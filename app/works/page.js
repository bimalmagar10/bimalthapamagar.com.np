import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import Header from "../../components/Header";

export const metadata = {
  title: "Works",
  description:
    "Welcome! This is Bimal Thapa Magar's page about his works.It demonstrates what work he has done or accomplished and the projects he had built using various tech stacks.",
};

export default function Works() {
  return (
    <>
      <Box height="20rem" width="100%" p="2rem" position="relative">
        <Alert
          status="info"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
        >
          <AlertIcon />
          This page is under development.I will get back to you soon with all my
          fabuluos works.
        </Alert>
      </Box>
    </>
  );
}
