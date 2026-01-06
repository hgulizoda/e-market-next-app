import {
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCreditCard,
  IconHeart,
  IconMenu2,
  IconScale,
  IconShoppingCart,
  IconTruck,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface InavData {
  icon: ReactNode;
  text: string;
  to: string;
}

const navData: InavData[] = [
  { icon: <IconScale height={30} />, text: "Taqqoslash", to: "/" },
  { icon: <IconCreditCard height={30} />, text: "To'lov", to: "/" },
  { icon: <IconTruck height={30} />, text: "Trek", to: "/" },
  { icon: <IconShoppingCart height={30} />, text: "Savatcha", to: "/cart" },
  { icon: <IconHeart height={30} />, text: "Sevimlilar", to: "/favourites" },
  { icon: <IconUser height={30} />, text: "Kirish", to: "/" },
];

const bottomNav: string[] = [
  "Asaxiy kuni",
  "0-0-6",
  "Havo tozalagichlar",
  "Smartfonlar",
  "Maishiy texnika",
  "Kitoblar",
  "Televizorlar",
  "Noutbuklar",
];

const Header = () => {
  return (
    <Stack gap={0} className="bg-white shadow-gray-100 shadow-xl">
      <Container
        size={1300}
        w={"100%"}
        py={17}
        className="items-center flex justify-between gap-3.5"
      >
        <Image
          src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo.svg"
          alt=""
          w={"10%"}
        />
        <Button className="flex" py={8} px={20} radius={10}>
          <IconMenu2 />
          <Text fz={18} ml={10}>
            Bo&apos;limlar
          </Text>
        </Button>
        <Flex w={"35%"} className="border-blue-500 border-2 rounded-[11px]">
          <Input
            placeholder="Qidirish..."
            w={"81%"}
            h={"100%"}
            radius={"10px 0 0 10px"}
          />
          <Button style={{ borderRadius: "0 10px 10px 0" }}>Qidirish</Button>
        </Flex>
        <Flex component="nav" w={"40%"} justify={"space-between"} ml={20}>
          {navData.map((item) => (
            <Link
              key={item.text}
              className="flex"
              style={{ flexDirection: "column", alignItems: "center" }}
              href={item.to}
            >
              {item.icon}
              <Text fz={12} fw={500}>
                {item.text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Container>
      <Divider my={0} p={0} m={0} />
      <Container
        size={1300}
        className="flex justify-between"
        w={"100%"}
        py={17}
      >
        {bottomNav.map((text) => (
          <Text key={text} fz={17}>
            {text}
          </Text>
        ))}
      </Container>
    </Stack>
  );
};

export default Header;
