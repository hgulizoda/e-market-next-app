"use client";

import useCartStore from "@/store/cartStore";
import CartItemCard from "../components/CartCard";
import {
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
} from "@mantine/core";

const CartPage = () => {
  const { cart } = useCartStore();
  console.log(cart);

  return (
    <Container size={1300} mt={60}>
      <Text fz={"h2"} fw={500} mb={20}>
        Savatcha
      </Text>
      <Flex w={"100%"} justify={"space-between"} align={"start"}>
        <Stack w={"73%"}>
          {cart.map((item) => (
            <CartItemCard key={item.id} {...item} />
          ))}
        </Stack>
        <Card withBorder w={"25%"} radius={20}>
          <Text c={"orange"} fw={500}>
            Savatchada {cart.length} ta tovar bor
          </Text>
          <Flex justify={"space-between"} mt={20}>
            <Text> Summa:</Text>
            <Text fw={600}>
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              so&apos;m
            </Text>
          </Flex>
          <Flex justify={"space-between"} mb={20} mt={8}>
            <Text> Skidka: </Text>
            <Text fw={600}>
              -
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0) *
                0.2}
              so&apos;m
            </Text>
          </Flex>
          <Divider />
          <Flex justify={"space-between"} mt={20}>
            <Text fz={20} fw={700}>
              Umumiy narx:
            </Text>
            <Text fw={700} fz={18}>
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0) *
                0.8}
              so&apos;m
            </Text>
          </Flex>
          <Button mt={20} radius={10}>
            Rasmiylashtirish
          </Button>
        </Card>
      </Flex>
    </Container>
  );
};

export default CartPage;
