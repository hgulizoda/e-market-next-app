import { Button, Card, Flex, Image, Rating, rgba, Text } from "@mantine/core";
import { IconHeart, IconShoppingCartFilled } from "@tabler/icons-react";
import I_API from "../types";
import Link from "next/link";
import useCartStore from "@/store/cartStore";

const ProductCard = (props: I_API) => {
  const { images, title, id, price, rating, reviews } = props;
  const { cart, addItem, removeItem, increaseQuantity, decreaseQuantity } =
    useCartStore();

  const isOnCart = cart.findIndex((item) => id === item.id) !== -1;
  const cartItem = cart.find((item) => item.id == id);

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
      component={Link}
      href={`/${id}`}
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
        {isOnCart ? (
          <Flex>
            <Button
              onClick={(e) => {
                e.preventDefault();
                increaseQuantity(id);
              }}
            >
              +
            </Button>
            <Text w={40} className=" flex items-center justify-center">
              {isOnCart ? cart.find((item) => item.id === id)?.quantity : 1}
            </Text>
            <Button
              onClick={(e) => {
                e.preventDefault();
                decreaseQuantity(id);
              }}
            >
              -
            </Button>
          </Flex>
        ) : (
          <Button
            fz={15}
            w={"80%"}
            onClick={(e) => {
              e.preventDefault();
              addItem({ quantity: 1, ...props });
            }}
          >
            Xarid qilish
          </Button>
        )}

        <Button className="bg-emerald-300" bg={"#00BFAF"}>
          <IconShoppingCartFilled />
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard;
