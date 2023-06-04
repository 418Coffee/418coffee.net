import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return (
    <Box
      wordBreak={"break-word"}
      p="1rem"
      h="100%"
      w="100%"
      mb={4}
      shadow="base"
      borderWidth="1px"
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export interface ExperienceCardProps {
  imageSrc: string;
  href?: string;
  name: string;
  description: string;
  time: string;
  role: string;
  experience: string;
}

export default function ExperienceCard({
  imageSrc,
  href,
  name,
  description,
  time,
  role,
  experience,
}: ExperienceCardProps) {
  return (
    <Card>
      <VStack divider={<StackDivider />} align={"left"}>
        <HStack spacing={"5"}>
          <Image
            alt={`${name} Logo`}
            draggable={false}
            src={imageSrc}
            boxSize={"16"}
            borderRadius={"xl"}
          ></Image>
          <Box>
            {href ? (
              <Link target="_blank" href={href} isExternal>
                <Heading fontSize={"lg"}>
                  {name} <ExternalLinkIcon viewBox="0 0 25 28" />
                </Heading>
              </Link>
            ) : (
              <Heading fontSize={"lg"}>{name}</Heading>
            )}
            <Heading as="h3" fontSize={"md"} fontWeight={"normal"}>
              {description}
            </Heading>
            <Heading
              mt="3px"
              as="h4"
              fontSize={"sm"}
              fontWeight={"normal"}
              color="purple.500"
              fontFamily={"mono"}
            >
              {time}
            </Heading>
          </Box>
        </HStack>
        <VStack align={"left"} fontSize={"sm"}>
          <Box>
            <Heading fontSize={"lg"}>Role</Heading>
            <Text>{role}</Text>
          </Box>
          <Box>
            <Heading fontSize={"lg"}>Experience</Heading>
            <Text>{experience}</Text>
          </Box>
        </VStack>
      </VStack>
    </Card>
  );
}
