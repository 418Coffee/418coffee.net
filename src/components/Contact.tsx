import { Box, Heading, Link, Text } from "@chakra-ui/react";

const Contact = () => (
  <Box p="5" color="white">
    <Heading as="h1" mb="5">
      Contact
    </Heading>
    <Text>
      If you would like to get in touch with me, you can reach me through the
      following channels:
      <br />
      <br />
      Discord: Arcturus#3828 <br />
      Twitter:{" "}
      <Link
        target="_blank"
        color="purple.500"
        href="https://twitter.com/kmattha"
        isExternal
      >
        @kmattha
      </Link>{" "}
      or{" "}
      <Link
        target="_blank"
        color="purple.500"
        href="https://twitter.com/messages/compose?recipient_id=2680090438"
        isExternal
      >
        write me a DM
      </Link>
      <br />
      Email: matthijskes <i>[at]</i> gmail <i>[dot]</i> com <br />
      <br />
      Feel free to connect with me on any of these platforms. I look forward to
      hearing from you!
      <br />
      <br />
      The source code for this website is available at{" "}
      <Link
        target="_blank"
        color="purple.500"
        href="https://github.com/418Coffee/418coffee.net"
      >
        418coffee/418coffee.net
      </Link>
      .
    </Text>
  </Box>
);

export default Contact;
