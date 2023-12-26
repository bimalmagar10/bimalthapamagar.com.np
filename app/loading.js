"use client";
import { Flex, Box } from "@chakra-ui/react";
import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  return (
    <Flex justifyContent="center" width="100%">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#B2C7DD"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Flex>
  );
}
