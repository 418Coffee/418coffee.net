import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Link as CLink,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode, ReactText } from "react";
import { IconType } from "react-icons";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

interface LinkItemProps {
  name: string;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "present", href: "/" },
  { name: "past", href: "/past" },
  { name: "future", href: "/future" },
  { name: "contact", href: "/contact" },
];

interface FooterItemProps {
  icon: IconType;
  href: string;
}

const FooterItems: Array<FooterItemProps> = [
  { icon: FiGithub, href: "https://github.com/418Coffee" },
  { icon: FiTwitter, href: "https://twitter.com/kmattha" },
];

export default function SimpleSidebar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        mb="4"
        justifyContent="space-between"
      >
        <Text fontSize="lg" fontWeight="medium">
          Matthijs Kessener
        </Text>
      </Flex>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      {LinkItems.map((link) => (
        <NavItem key={link.name} href={link.href}>
          {link.name}
        </NavItem>
      ))}
      <Flex
        width="100%"
        position={"absolute"}
        bottom="0"
        justifyContent={"space-between"}
        p="10"
      >
        {FooterItems.map((item) => (
          <CLink href={item.href}>
            <Icon
              as={item.icon}
              boxSize={9}
              opacity={0.8}
              _hover={{
                opacity: 1,
              }}
            />
          </CLink>
        ))}
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  children: ReactText;
  href: string;
}
const NavItem = ({ children, href, ...rest }: NavItemProps) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={href}
      style={{ textDecoration: "none" }}
      // _focus={{ boxShadow: "none" }}
    >
      <Flex
        fontSize={"md"}
        align="center"
        p="2"
        mx="6"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          color: "white",
          opacity: pathname === href ? 1 : 0.7,
        }}
        color={pathname === href ? "white" : "grey"}
        {...rest}
      >
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold">
        Matthijs Kessener
      </Text>
    </Flex>
  );
};
