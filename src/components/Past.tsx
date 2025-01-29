import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import ExperienceCard, { ExperienceCardProps } from "./Experience";
import OpenSourceCard, { OpenSourceCardProps } from "./OpenSource";

const experienceCards: Array<ExperienceCardProps> = [
  {
    imageSrc:
      "https://pbs.twimg.com/profile_images/1630762972946505729/Agl3Bnjx_400x400.jpg",
    name: "FreebieFlow (Joylink)",
    description: "Amazon Automation",
    time: "2024-present",
    role: "Software Engineer",
    experience: `Expanded distributed scrapers for Amazon products and promo codes. 
    Helped build a platform connecting influencers with merchants for Amazon affiliate deeplink generation.`,
  },
  {
    imageSrc:
      "https://cdn.discordapp.com/emojis/702616980598948016.webp?quality=lossless",
    name: "ARC AIO",
    description: "Retail Automation",
    time: "2020-2022",
    role: "Founder & Developer",
    experience: `Solely built and managed all infrastructure of my private retail
    automation application. Mainly used to purchase hype sneakers
    during the 2020-2021 pandemic. Roughly €1,000,000 worth of items
    were bought using ARC AIO.`,
  },
  {
    imageSrc:
      "https://pbs.twimg.com/profile_images/1317804895123218432/offpE2Hm_400x400.jpg",
    href: "https://twitter.com/FleekFramework",
    name: "Fleek Framework",
    description: "Retail Automation",
    time: "2020-2021",
    role: "Software Engineer",
    experience: `I developed custom low-level implementations and features of networking protocols, 
    gave consultation on application security and helped expand upon core features.`,
  },
  {
    imageSrc:
      "https://pbs.twimg.com/profile_images/1404550536926576641/ObC2xKJI_400x400.jpg",
    href: "https://twitter.com/rootlabz",
    name: "ROOTLABz",
    description: "Retail Automation",
    time: "2020-2020",
    role: "Software Developer",
    experience: `I reverse engineered anti-bot protections and developed a tailored API for accessing protected websites. 
    I also maintaned and provisioned several core features.`,
  },
];

const openSourceCards: Array<OpenSourceCardProps> = [
  {
    name: "verceptron",
    description: "A perceptron written in V",
    language: "V",
    href: "https://github.com/418Coffee/verceptron",
  },
  {
    name: "celox",
    description: "An aiohttp-esque HTTP/1.1 client built with trio",
    language: "Python",
    href: "https://github.com/418Coffee/celox",
  },
  {
    name: "flux-template",
    description:
      "An opionated cluster agnostic Flux GitOps template repository",
    language: "",
    href: "https://github.com/418Coffee/flux-template",
  },
  {
    name: "teapot",
    description:
      "A teapot implementing the Hyper Text Coffee Pot Control Protocol (HTCPCP) as per RFC 2324",
    language: "C++",
    href: "https://github.com/418Coffee/teapot",
  },
  {
    name: "life",
    description: "A minimal implementation of Conway's Game of Life",
    language: "Go",
    href: "https://github.com/418Coffee/life",
  },
  {
    name: "caesar-salad",
    description:
      "A tool to automatically break shift ciphers using frequency analysis",
    language: "V",
    href: "https://github.com/418Coffee/caesar-salad",
  },
  {
    contributed: true,
    name: "rueidis",
    description:
      "A fast Golang Redis client that supports Client Side Caching, Auto Pipelining, Generics OM, RedisJSON, RedisBloom, RediSearch, etc.",
    language: "Go",
    href: "https://github.com/redis/rueidis",
  },
  {
    contributed: true,
    name: "lambda",
    description: "Minecraft utility mod coded in Kotlin",
    language: "Kotlin",
    href: "https://github.com/lambda-client/lambda",
  },
];

const Past = () => (
  <Box p="5" color="white">
    <Heading as="h1" mb="2">
      Past
    </Heading>
    <Heading as="h2" mb="5" fontSize={"xl"}>
      Organizations
    </Heading>
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={"8"}
      mb="5"
    >
      {experienceCards.map((card) => (
        <ExperienceCard
          imageSrc={card.imageSrc}
          href={card.href}
          name={card.name}
          description={card.description}
          time={card.time}
          role={card.role}
          experience={card.experience}
        />
      ))}
    </Stack>
    <Heading as="h2" mb="2" fontSize={"xl"}>
      Open-source Projects
    </Heading>
    <Text mb="5">
      Non-exhaustive hand curated list of open source projects I made /
      contributed to.
    </Text>
    <VStack spacing="4">
      {openSourceCards.map((card) => (
        <OpenSourceCard
          contributed={card.contributed}
          name={card.name}
          language={card.language}
          description={card.description}
          href={card.href}
        />
      ))}
    </VStack>
  </Box>
);

export default Past;
