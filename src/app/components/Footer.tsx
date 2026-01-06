"use client";

import {
  Container,
  Grid,
  Stack,
  Text,
  Group,
  Box,
  Divider,
  Flex,
  Paper,
  ActionIcon,
} from "@mantine/core";
import {
  IconPhone,
  IconMail,
  IconBrandTelegram,
  IconMapPin,
  IconChevronRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconRss,
} from "@tabler/icons-react";
import { start } from "repl";

const Footer = () => {
  return (
    <Box className="bg-gray-100" mt="100px">
      <Container size="xl" py="xl">
        <Grid justify="space-between">
          <Grid.Col span={{ base: 12, md: 2 }}>
            <Stack>
              <Text fw={700}>Asaxiy haqida</Text>
              <Text c="dimmed">Biz haqimizda</Text>
              <Text c="dimmed">Asaxiyda ish</Text>
              <Text c="dimmed">Litsenziyalar</Text>
              <Text c="dimmed">Asaxiy siyosati</Text>
              <Text c="dimmed">Aloqa</Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack>
              <Text fw={700}>Xaridorlarga</Text>
              <Text c="dimmed">Ko‘p so‘raladigan savollar</Text>
              <Text c="dimmed">El-yurt ishonchi</Text>
              <Text c="dimmed">Asaxiy Plus</Text>
              <Text c="dimmed">Ommaviy oferta</Text>
              <Text c="dimmed">Muddatli to‘lov shartlari</Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2 }}>
            <Stack>
              <Text fw={700}>Ma’lumot</Text>
              <Text c="dimmed">Bizning brendlar</Text>
              <Text c="dimmed">Yangiliklar</Text>
              <Text c="dimmed">Blog</Text>
              <Text c="dimmed">Sayt xaritasi</Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2.5 }}>
            <Stack>
              <Text fw={700}>Yetkazib berish va do‘konlar</Text>

              {[
                "Bizning do‘konlar",
                "Topshirish punktlari",
                "Yetkazib berish",
              ].map((item) => (
                <Paper key={item} p="md" radius="md" bg="white">
                  <Flex justify="space-between" align="center">
                    <Text fw={500}>{item}</Text>
                    <IconChevronRight size={18} />
                  </Flex>
                </Paper>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 15, md: 2 }}>
            <Stack>
              <Text fw={700}>Bog‘lanish uchun</Text>

              <Group>
                <IconPhone size={18} />
                <Text c="dimmed">+998 71 200 01 05</Text>
              </Group>

              <Group>
                <IconMail size={18} />
                <Text c="dimmed">info@asaxiy.uz</Text>
              </Group>

              <Group>
                <IconBrandTelegram size={18} />
                <Text c="dimmed">Telegram bot</Text>
              </Group>

              <Group>
                <IconMapPin size={18} />
                <Text c="dimmed">Gavhar ko‘chasi 124</Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Flex justify={"space-between"} align={"start "}>
          <Stack mt="xl">
            <Text fw={700}>To‘lov turlari</Text>
            <Group>
              {["Uzum", "Payme", "Uzcard", "Xazna", "Click", "Paynet"].map(
                (item) => (
                  <Paper key={item} px="xl" py="md" radius="md" bg="white">
                    <Text fw={500}>{item}</Text>
                  </Paper>
                )
              )}
            </Group>
          </Stack>

          <Stack justify="space-between" gap={20} mt={30}>
            <Text fw={700}>Biz ijtimoiy tarmoqlarda</Text>

            <Group>
              <ActionIcon variant="subtle">
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon variant="subtle">
                <IconBrandTelegram />
              </ActionIcon>
              <ActionIcon variant="subtle">
                <IconBrandInstagram />
              </ActionIcon>
              <ActionIcon variant="subtle">
                <IconBrandYoutube />
              </ActionIcon>
              <ActionIcon variant="subtle">
                <IconRss />
              </ActionIcon>
            </Group>
          </Stack>
        </Flex>

        <Divider my="xl" />

        <Text ta="center" c="dimmed" fz="sm">
          2015–2026 asaxiy.uz internet-do‘koni. Barcha huquqlar himoyalangan.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
