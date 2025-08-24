"use client";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";
import Navbar from "./Navbar";
const Header = () => {
  const navColor = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 34, 44,.8)"
  );
  return (
    <Flex
      mb="6rem"
      p="1rem .5rem"
      align="center"
      justify={["center", "center", "space-between", "space-between"]}
      position="sticky"
      top="0"
      zIndex="1000"
      backdropFilter="saturate(180%) blur(5px)"
      bg={navColor}
    >
      <DarkModeSwitch />
      <Navbar />
    </Flex>
  );
};
export default Header;
