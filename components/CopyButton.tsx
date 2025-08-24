"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const CopyButton = (props) => {
  const { colorMode } = useColorMode();
  const [isCopied, setIsCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(props?.text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  const Icon = isCopied ? CheckIcon : CopyIcon;
  return (
    <Button
      variant={"outline"}
      disabled={isCopied}
      onClick={copy}
      leftIcon={<Icon />}
      backgroundColor={colorMode == "light" ? "gray.200" : "black.800"}
      color={colorMode == "light" ? "black.800" : "white"}
      p={"1.5rem 1rem"}
      style={{
        position: "absolute",
        right: "1rem",
        top: "3rem",
      }}
      fontSize={"1.4rem"}
    >
      {isCopied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyButton;
