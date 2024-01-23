import { Box, Heading, Text } from "@chakra-ui/react";

const Present = () => (
  <Box p="5" color="white">
    <Heading as="h1" mb="5">
      Present
    </Heading>
    <Text maxW={"600px"}>
      To be brutally honest, I don't really like talking about I've done, what
      I'm doing and what I'm thinking of doing. I don't like confining myself to
      categories when life is extremely dynamic. It is full of nuances and
      details which give it passion and meaning, but on the other hand no one
      needs to know that you fixed your neighbours fence yesterday.
      <br />
      <br />
      The goal is to find a balance where you talk about the grand scheme of
      things but also include meaningful moments from every day life. This is my
      attempt at doing so.
      <br />
      <br />I try to be as open-minded as possible and I try to relativize a lot
      of aspects in life. I'm curious, but I try not to be naive. I like
      learning, but I think it's also important to apply what you've learned. I
      like getting my hands dirty, but not without a goal.
    </Text>
    <Heading size="md" as="h2" mb="5" mt="5">
      Clearflare
    </Heading>
    <Text maxW={"600px"}>
      Currently, my biggest achievement was single-handedly developing an
      application from scratch that enables users to overcome Cloudflare's IUAM
      challenges and Turnstile captchas, allowing them to scrape and access the
      internet freely. By creating scalable infrastructure, robust backend
      systems, and a responsive frontend, I helped users have greater control
      over their online experience.
    </Text>
    <Heading size="md" as="h2" mb="5" mt="5">
      ArcProxy
    </Heading>
    <Text maxW={"600px"}>
      I designed and developed scalable proxy servers and implemented clever
      management systems to handle proxy rotation and load balancing. By
      utilizing homelab servers, I successfully hosted the service, providing
      reliable and efficient 4G proxies for various use cases.
    </Text>
  </Box>
);

export default Present;
