"use client";

import useCartStore from "@/store/cartStore";
import {
  Container,
  Grid,
  Image,
  Text,
  Title,
  Badge,
  Button,
  Group,
  Stack,
  Card,
  Rating,
  Divider,
  SimpleGrid,
  ActionIcon,
  Box,
  Flex,
} from "@mantine/core";
import {
  IconHeart,
  IconShare,
  IconScale,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import API from "../api/intex";
import I_API from "../types";

interface response {
  data: {
    products: I_API[];
    total: number;
    skip: number;
    limit: number;
  };
}

export default function ProductDetailPage() {
  const { cart, addItem, removeItem, decreaseQuantity, increaseQuantity } =
    useCartStore();
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await API.get<response>("/products");
      return res;
    },
  });

  const products: I_API[] = data?.data.products ?? [];
  const item = products.find((p) => p.id === id);

  if (isLoading) return <div>Loading...</div>;
  if (!item) return <div>Product not found</div>;

  return (
    <Container size="xl" py="lg" mt={60}>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Grid>
            <Grid.Col span={2}>
              <Stack gap="sm">
                {item?.images.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    radius="md"
                    style={{ cursor: "pointer" }}
                    alt="text"
                  />
                ))}
              </Stack>
            </Grid.Col>

            <Grid.Col span={10}>
              <Card radius="lg" withBorder>
                <Image src={item?.thumbnail} alt="" />
                <Badge color="orange" mb="sm">
                  Skidka
                </Badge>
                <Group justify="flex-end" mt="sm">
                  <ActionIcon variant="subtle">
                    <IconHeart />
                  </ActionIcon>
                  <ActionIcon variant="subtle">
                    <IconScale />
                  </ActionIcon>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Stack>
            <Title order={3}>{item?.title}</Title>

            <Group gap="xs">
              <Rating value={5} readOnly />
              <Text c="dimmed">{item?.reviews.length} ta sharh</Text>
              <ActionIcon variant="subtle">
                <IconShare />
              </ActionIcon>
            </Group>

            <Group gap="sm">
              <Text td="line-through" c="dimmed">
                {item?.price ? item.price * 0.8 : 0} sum
              </Text>
              <Title order={2} c="orange">
                {item?.price} sum
              </Title>
            </Group>

            <Text c="green">{item?.price} sum</Text>

            <Divider />

            <Text fw={500}>Rangi: Velvet Grey</Text>

            <Divider />

            <SimpleGrid cols={2}>
              <Text c="dimmed">Артикул:</Text>
              <Text> T79093</Text>

              <Text c="dimmed">Brand</Text>
              <Text fw={500} c="blue">
                {item?.brand}
              </Text>

              <Text c="dimmed">Model: </Text>
              <Text>400 Lite</Text>
            </SimpleGrid>

            <Group mt="md">
              {cart.findIndex((item) => item.id === id) !== -1 ? (
                <Flex w={"100%"} justify={"space-between"}>
                  <Button
                    onClick={() => increaseQuantity(id)}
                    px={60}
                    bg={"cyan"}
                  >
                    +
                  </Button>
                  <Text>{cart.find((item) => item.id === id)?.quantity}</Text>
                  <Button
                    onClick={() => decreaseQuantity(id)}
                    px={60}
                    bg={"cyan"}
                  >
                    -
                  </Button>
                </Flex>
              ) : (
                <Button
                  leftSection={<IconShoppingCart size={18} />}
                  size="md"
                  color="teal"
                  fullWidth
                  onClick={() => addItem({ quantity: 1, ...item })}
                >
                  Xarid qilish
                </Button>
              )}
              <Button size="md" fullWidth>
                Qo&apos;shish
              </Button>
            </Group>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}>
          <Card withBorder radius="lg">
            <Title order={4} mb="sm">
              Muddatli to&apos;lov
            </Title>

            <Group justify="space-between">
              <Text c="dimmed">Oylar</Text>
              <Group gap="xs">
                <Badge variant="outline">3</Badge>
                <Badge variant="outline">6</Badge>
                <Badge variant="filled">12</Badge>
                <Badge variant="outline">18</Badge>
              </Group>
            </Group>

            <Stack mt="md">
              <InstallmentItem name="xazna nasiya" price="326 000 сум" />
              <InstallmentItem name="asaxiy" price="364 000 сум" />
              <InstallmentItem name="uzum nasiya" price="366 100 сум" />
            </Stack>

            <Divider my="md" />

            <Group justify="space-between">
              <Text fw={500}>Umumiy summa</Text>
              <Text fw={700}>{item?.price}</Text>
            </Group>

            <Button fullWidth color="orange" mt="md">
              Muddatli to&apos;lovga olish
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

function InstallmentItem({ name, price }: { name: string; price: string }) {
  return (
    <Card withBorder radius="md">
      <Group justify="space-between">
        <Text fw={500}>{name}</Text>
        <Text c="orange" fw={600}>
          {price}
        </Text>
      </Group>
    </Card>
  );
}
