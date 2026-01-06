import { Button, Card, Flex, Image, Rating, rgba, Text } from "@mantine/core";
import { IconHeart, IconShoppingCartFilled } from "@tabler/icons-react";
import I_API from "../types";

const ProductCard = (props: I_API) => {
  const { images, title, id, price, rating, reviews } = props;
  return (
    <Card
      withBorder
      w={"100%"}
      h={400}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <IconHeart className="absolute top-4 right-4 text-gray-600" />
      <Image src={images[0]} alt="title" />
      <Text fw={500}>{title}</Text>
      <Flex justify={"space-between"}>
        <Rating value={rating} />
        <Text>{reviews.length} ta sharh</Text>
      </Flex>
      <Text c={"blue"} fw={600} fz={20}>
        {price} so&apos;m
      </Text>
      <Flex gap={5}>
        <Button fz={15} w={"80%"}>
          Xarid qilish
        </Button>
        <Button className="bg-emerald-300" bg={"#00BFAF"}>
          <IconShoppingCartFilled />
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard;
