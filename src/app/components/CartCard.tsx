"use client";

import useCartStore from "@/store/cartStore";
import {
  Card,
  Flex,
  Image,
  Text,
  Checkbox,
  Badge,
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconHeart, IconTrash, IconMinus, IconPlus } from "@tabler/icons-react";
import Link from "next/link";

type CartItemCardProps = {
  thumbnail: string;
  title: string;
  brand: string;
  price: number;
  quantity: number;
  id: number;
};

const CartItemCard = ({
  thumbnail,
  title,
  brand,
  price,
  quantity,
  id,
}: CartItemCardProps) => {
  const { cart, addItem, removeItem, increaseQuantity, decreaseQuantity } =
    useCartStore();
  return (
    <Card withBorder radius="md" p="md" component={Link} href={`/${id}`}>
      <Flex gap="md" align="center">
        <Checkbox />

        <Image src={thumbnail} w={90} h={110} fit="contain" alt="text" />

        <Flex direction="column" gap={6} style={{ flex: 1 }}>
          <Text fw={500} lineClamp={2}>
            {title}
          </Text>

          <Badge w="fit-content" radius="md">
            {brand}
          </Badge>

          <Group gap="xs">
            <ActionIcon variant="subtle">
              <IconHeart size={18} />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="red"
              onClick={(e) => {
                e.preventDefault();
                removeItem(id);
              }}
            >
              <IconTrash size={18} />
            </ActionIcon>
          </Group>
        </Flex>

        <Flex direction="column" align="flex-end" gap={4} miw={160}>
          <Text fw={700} fz={20}>
            {price.toLocaleString()} сум
          </Text>

          <Badge color="orange" variant="outline">
            {(price / 12).toLocaleString()} сум × 12 мес
          </Badge>
        </Flex>

        <Group>
          <ActionIcon
            variant="outline"
            radius="xl"
            onClick={(e) => {
              e.preventDefault();
              decreaseQuantity(id);
            }}
          >
            <IconMinus size={16} />
          </ActionIcon>

          <Text fw={600}>{quantity}</Text>

          <ActionIcon
            variant="outline"
            radius="xl"
            onClick={(e) => {
              e.preventDefault();
              increaseQuantity(id);
            }}
          >
            <IconPlus size={16} />
          </ActionIcon>
        </Group>
      </Flex>
    </Card>
  );
};

export default CartItemCard;
