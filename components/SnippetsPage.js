"use client";

import {
  VStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { getSnippetsFromCategory } from "../lib/helpers";
import { ThreeDots } from "react-loader-spinner";

const SnippetsLists = dynamic(() => import("./SnippetsList"), {
  ssr: "false",
  loading: () => (
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
  ),
});

const SnippetsPage = (props) => {
  const { colorMode } = useColorMode();
  return (
    <VStack align="flex-start" mb="2rem">
      <Tabs
        variant="unstyled"
        colorScheme="green"
        size={"sm"}
        isLazy={true}
        lazyBehavior="keepMounted"
      >
        <TabList style={{ gap: "1rem" }}>
          <Tab
            _selected={{
              color:
                colorMode == "light"
                  ? "white !important"
                  : "black.800 !important",
              bg:
                colorMode == "light"
                  ? "black.800 !important"
                  : "white !important",
            }}
            style={{
              borderRadius: "5px",
              padding: ".5rem 1.5rem",
              backgroundColor:
                colorMode == "light" ? "#EDF2F7" : "rgba(255, 255, 255, 0.04)",
              color: colorMode == "light" ? "#101010" : "white",
              border: "1px solid #CBD5E0",
              borderColor:
                colorMode == "light" ? "#CBD5E0" : "rgba(255, 255, 255, 0.06)",
            }}
          >
            Machine Learning
          </Tab>
          <Tab
            _selected={{
              color: colorMode == "light" ? "white" : "black.800",
              bg: colorMode == "light" ? "black.800" : "white",
            }}
            style={{
              borderRadius: "5px",
              padding: ".5rem 1.5rem",
            }}
          >
            JS
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SnippetsLists
              data={getSnippetsFromCategory(
                props?.snippets,
                "machine-learning"
              )}
            />
          </TabPanel>
          <TabPanel>
            <div>Coming soon!!</div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default SnippetsPage;
