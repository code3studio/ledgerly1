import * as React from "react";
import type { NextPage } from "next";
import {
  Container,
  Box,
  Stack,
  Button,
  Icon,
  Heading,
  Text,
  useClipboard,
  IconButton,
  Link as ChakraLink,
  VStack,
  Center,
  useBreakpointValue,
  Code,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link } from "@saas-ui/react";
import {
  FiArrowRight,
  FiCheck,
  FiCheckSquare,
  FiCopy,
  FiLock,
  FiRefreshCcw,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";

import { ButtonLink } from "components/button-link/button-link";

import faq from "data/faq";
import pricing from "data/pricing";

import { Highlights, HighlightsItem } from "components/highlights";
import siteConfig from "data/config";
import { FaBrain } from "react-icons/fa";
import { useConsent } from "components/consent";
import { HeroImages } from "components/hero/tabs";
import CodePill from "components/highlights/codepill";


const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="PySage: AI-powered agents with seamless integration for OpenAI, Anthropic, and Solana blockchain."
        description="The ultimate Web3 agent framework. Powered by Python."
      />
      <Box>
        <HeroSection />

        <FeaturesSection />




        <QuestionsSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  const orientation: "horizontal" | "vertical" | undefined = useBreakpointValue(
    {
      base: "vertical",
      md: "horizontal",
    },
    {
      fallback: "md",
    }
  );

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container
        maxW="container.xl"
        pt={{ base: 10, lg: 10 }}
        pb={{ base: 0, lg: 10 }}
      >
        <Stack direction={"column"} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            zIndex={1000}
            title={
              <FallInPlace delay={0.05}>
                Modular AI agents with CLI and Twitter integration.{" "}
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.1} fontWeight="medium">
                Your gateway to intelligent, decentralized automation.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.2}>
              <Center mt={10} justifyItems={"center"}>
                <ButtonLink
                  href={"https://github.com/pysageai/pysage"}
                  variant="primary"
                  data-attr="signup"
                  px={30}
                  fontSize="x-large"
                  py={"30px"}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(7px)",
                        },
                      }}
                    />
                  }
                >
                  Start Now
                </ButtonLink>
              </Center>
            </FallInPlace>
            <FallInPlace delay={0.3}>
  <Center mt={10}>
    <video
      src="static\images\demo.mp4" // Ensure your video is in the `public` directory if using Next.js
      controls
      width="100%"
      style={{
        maxWidth: "900px",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      Your browser does not support the video tag.
    </video>
  </Center>
</FallInPlace>
          </Hero>
        </Stack>
      </Container>
      <Container width={{ base: "full", lg: "90%" }} maxW="1800px" my="30">
        <FallInPlace delay={0.4}>
          <HeroImages />
        </FallInPlace>
      </Container>

   

      <InstallSection />
    </Box>
  );
};

const DockerInstall = () => {
  const dockerRunText =
    "docker run --rm -e POSTGRES_PASSWORD=postgres -p 5432:5432 --name=schemamap_postgres schemamap/postgres";
  const dockerRun = useClipboard(dockerRunText);

  return (
    <VStack alignItems={"stretch"} spacing="4" w="full">
      <Text color="muted" fontSize="xl">
        Support for Solana{" "}
        <Link isExternal href={"https://solana.com/docs"}>
          <Code>API</Code>
        </Link>{" "}
        in pre-release Alpha
      </Text>

      <CodePill>
        <Box width={"full"}>
          <Text color="blue.400" display="inline">
          {">"}
          </Text>{" "}
          <Text color="yellow.400" display="inline">
            solana-api key:
          </Text>{" "}
          <Text color="cyan.300" display="inline">
            <Link
            
            >
              https://api.mainnet-beta.solana.com
            </Link>
          </Text>
        </Box>
        <IconButton
          icon={dockerRun.hasCopied ? <FiCheck /> : <FiCopy />}
          aria-label="Copy docker run command"
          onClick={dockerRun.onCopy}
          variant="ghost"
          ms="4"
          isRound
          color="white"
        />
      </CodePill>
    </VStack>
  );
};

const BinaryInstall = () => {
  const brewInstallText =
    "brew install schemamap/tap/schemamap && schemamap init";
  const brewCmd = useClipboard(brewInstallText);

  const nixInstallText =
    "nix profile install nixpkgs#schemamap && schemamap init";
  const nixCmd = useClipboard(nixInstallText);

  return (
    <VStack alignItems="flex-start" spacing="0" w="full">
      <Tabs w="full">
        <TabList>
          <Tab>Twitter</Tab>
          <Tab>OpenAi</Tab>
          <Tab>Solana</Tab>
          <Tab>Start</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px="0">
            <CodePill>
              <Box w="full">
                <Text color="blue.400" display="inline">
                  {">"}
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  configure-connection
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  <Link
                   
                  >
                    twitter
                  </Link>
                </Text>
                <Text color="yellow.400" display="inline">
                  {" "}
                </Text>
                <Text color="cyan.300" display="inline">
                  
                </Text>
              </Box>
              <IconButton
                icon={brewCmd.hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy install command"
                onClick={brewCmd.onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </CodePill>
          </TabPanel>
          <TabPanel px="0">
            <CodePill>
              <Box w="full">
                <Text color="blue.400" display="inline">
                {">"}
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  configure-connection
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  <Link
                  
                  >
                    openai
                  </Link>
                </Text>
                <Text color="yellow.400" display="inline">
                  {" "}
                </Text>
                <Text color="cyan.300" display="inline">
                  
                </Text>
              </Box>
              <IconButton
                icon={nixCmd.hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy install command"
                onClick={nixCmd.onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </CodePill>
          </TabPanel>
          <TabPanel px="0">
            <DockerInstall />
          </TabPanel>
          <TabPanel px="0">
            <CodePill>
              <Box w="full">
                <Text color="blue.400" display="inline">
                {">"}
                </Text>{" "}
                <Text color="yellow.400" display="inline">
                  load-agent
                </Text>{" "}
                <Text color="cyan.300" display="inline">
                  <Link
                   
                  >
                   &quot;example-agent&quot;
                  </Link>
                </Text>
                <Text color="yellow.400" display="inline">
                  {" "}
                </Text>
                <Text color="cyan.300" display="inline">
                  
                </Text>
              </Box>
              <IconButton
                icon={nixCmd.hasCopied ? <FiCheck /> : <FiCopy />}
                aria-label="Copy install command"
                onClick={nixCmd.onCopy}
                variant="ghost"
                ms="4"
                isRound
                color="white"
              />
            </CodePill>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

const InstallSection = () => {
  return (
    <Highlights display={["none", "initial"]}>
      <HighlightsItem
        title="Runs on local, no signup needed"
        colSpan={[5]}
      >
        <BinaryInstall />
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      mb="20"
      id="features"
      innerWidth={"container.xl"}
      title={
        /*         <Heading
          lineHeight="tall"
          fontSize={"2xl"}
          mt="30"
          textAlign="left"
          as="div"
        >
          <q>
            Show me your flowcharts and conceal your tables, and I shall
            continue to be mystified. <br />
            Show me your tables, and I won&apos;t usually need your flowcharts;
            they&apos;ll be obvious.
          </q>
          <Box color="muted" fontSize="medium">
            -- Fred Brooks, Mythical Man Month
          </Box>
        </Heading> */ ""
      }
      description={
        <Box mt={6} mb="30" color="white">
          <p>
           PySage lets you manage AI agents with precision, leveraging a modular system and CLI tools
          </p>
          <p>
           Finally, an AI framework that adapts to your needs as effortlessly as updating a command line.
          </p>
        </Box>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Repeatable processes.",
          icon: FiRefreshCcw,
          description:
            "PySage ensures consistent agent workflows, allowing easy reruns and adjustments without complex reconfiguration.",
        },
        {
          title: "Dynamic AI Validation",
          icon: FiCheckSquare,
          description:
            "Automatically validates agent configurations and tasks with LLM integrations, ensuring seamless operation before execution.",
        },
        {
          title: "Modular Connections",
          icon: FaBrain,
          description: (
            <span>
              Connect agents to multiple systems effortlessly, from Twitter integration to blockchain tasks, all within a flexible modular framework.
            </span>
          ),
        },
        {
          title: "Secure by default.",
          icon: FiLock,
          description:
            "PySage operates with minimal permissions, ensuring your data and systems are secure by default while handling sensitive configurations.",
        },
        {
          title: "In-Memory Task Processing",
          icon: FiTrendingUp,
          description:
            "Tasks are executed in a highly efficient in-memory environment, leveraging Python's strengths without external server dependencies.",
        },
        {
          title: "Agent State Tracking",
          icon: FiSearch,
          description:
            "Track and compare your agent configurations across environments (Dev/Prod) and adapt to evolving system requirements with ease.",
        },
      ]}
    />
  );
};




const QuestionsSection = () => {
  const { consent, setConsent } = useConsent();
  return (
    <Box>
      <Container maxW="container.xl" mb="60">
        <Stack spacing="10" alignItems={"center"}>
          <Heading as="h2" fontSize="4xl" textAlign="center">
            Any questions?
          </Heading>

          <ButtonLink
            href={siteConfig.meetingUrl}
            variant={"primary"}
            size={"lg"}
            px={"50px"}
            py={"30px"}
          >
            Talk to the founder
          </ButtonLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        
      },
    },
  };
}
