"use client";

import { Carousel } from "@mantine/carousel";
import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Image,
  Rating,
  Text,
} from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useQuery } from "@tanstack/react-query";
import API from "./api/intex";
import I_API from "./types";
import ProductCard from "./components/Card";
interface response {
  data: {
    products: I_API[];
    total: number;
    skip: number;
    limit: number;
  };
}

const carouseldata: string[] = [
  "https://assets.asaxiy.uz/uploads/banner/desktop/695bb07c326cb.png.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/690457fbe3389.png.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/68fa06941a02a.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/694a46611a94a.png.webp",
];
export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const { data } = useQuery<response>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await API.get<response>("/products");
      return res;
    },
  });

  const products: I_API[] = data?.data?.products ?? [];
  console.log(products);

  return (
    <Container size={1300}>
      <Flex
        w={"100%"}
        justify={"space-between"}
        mt={30}
        className="justify-between"
        h={350}
      >
        <Carousel
          withIndicators
          w={"73%"}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={() => autoplay.current.play()}
          h={"100%"}
          p={0}
          m={0}
        >
          {carouseldata.map((item, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={item}
                style={{ borderRadius: "20px" }}
                fit="cover"
                alt="text"
                height={"100%"}
              />
            </Carousel.Slide>
          ))}
        </Carousel>

        <Card
          w={"25%"}
          h={"91%"}
          style={{
            backgroundColor: "white",
            borderRadius: "15px",
          }}
          p={10}
          shadow="xl"
          withBorder
        >
          <Image
            src="https://cdn.asaxiy.uz/asaxiy-content/product/main_image/desktop/66a8cdacc6bb9.webp"
            alt="text"
            h={"50%"}
            fit="contain"
          />
          <Text fw={600}>
            Redmi Buds 5 Pro Moonlight White simsiz quloqchini. Original!
          </Text>
          <Text ta={"right"} c={"#E83360"} fw={700} fz={20}>
            549 000 so&apos;m
          </Text>
          <Flex justify={"space-between"} mb={10}>
            <Text
              py={0}
              px={15}
              bg={"#fff8e6"}
              style={{ borderRadius: "8px" }}
              c={"#555"}
              fw={500}
            >
              152 400 x 4 oy
            </Text>
            <Rating value={5} />
          </Flex>
          <Button>Hoziroq xarid qiling</Button>
        </Card>
      </Flex>

      <Grid justify="space-between">
        {products.map((item) => (
          <Grid.Col span={2.35} key={item.id}>
            <ProductCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
