import { Box, Icon, Stack, StackDivider, Text } from "@chakra-ui/react";
import Link from "next/link";

const languages = {
  V: "#4f87c4",
  Python: "#3572A5",
  Go: "#00ADD8",
  ["C++"]: "#f34b7d",
  Kotlin: "#A97BFF",
};

export interface OpenSourceCardProps {
  contributed?: boolean;
  name: string;
  language: string;
  description: string;
  href: string;
}

export default function OpenSourceCard({
  contributed,
  name,
  language,
  description,
  href,
}: OpenSourceCardProps) {
  return (
    <Box w="100%">
      <Link href={href} target="_blank">
        <Stack
          p="3"
          direction={["column", "row"]}
          divider={<StackDivider />}
          shadow="base"
          borderWidth="1px"
          borderRadius={"xl"}
          _hover={{
            bg: "blackAlpha.500",
          }}
        >
          <Text fontFamily={"mono"} w="30%">
            name{" "}
            <Text fontFamily={"body"}>
              {name}{" "}
              {contributed ? (
                <Text as="span" fontSize={"xs"}>
                  (contributed)
                </Text>
              ) : (
                ""
              )}
            </Text>
          </Text>
          <Text fontFamily={"mono"} w="25%">
            language
            {language !== "" ? (
              <Text fontFamily={"body"}>
                <Icon viewBox="0 0 200 200" color={languages[language]}>
                  <path
                    fill="currentColor"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  />
                </Icon>{" "}
                {language}
              </Text>
            ) : (
              <Text fontFamily={"body"}>n/a</Text>
            )}
          </Text>
          <Text fontFamily={"mono"} w="100%">
            description
            <Text fontFamily={"body"}>{description}</Text>
          </Text>
        </Stack>
      </Link>
    </Box>
  );
}
