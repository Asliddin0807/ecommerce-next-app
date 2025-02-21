"use client";
import {
  Link,
  HStack,
  Button,
  Box,
  List,
  DrawerActionTrigger,
  useBreakpointValue,
  DrawerFooter,
  DrawerCloseTrigger,
  IconButton,
} from "@chakra-ui/react";
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
} from "@/components/ui/drawer";
import { useRouter } from "nextjs-toploader/app";
import Icons from "../Icons/Icons";
import { useColorMode } from "../ui/color-mode";
import ColorModeToggle from "../Mode/Mode";

export default function Navbar() {
  const bg = "gray.800";
  const value = useBreakpointValue({ base: "mobile", md: "desktop" });
  const router = useRouter();
  const { toggleColorMode } = useColorMode();
  return (
    <Box w={"full"}>
      <Box
        position={"fixed"}
        top={0}
        padding={5}
        zIndex={1}
        w={"full"}
        display={"flex"}
        justifyContent={"space-between"}
        bg="rgba(0, 0, 0, .3)" // затемнённый фон
        backdropFilter="blur(10px)" // эффект размыт
      >
        {value == "mobile" ? (
          <DrawerRoot placement={"start"}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <Button variant="outline" size="sm">
                <Icons iconName="BiMenu" prioritet={true} color="white" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader p={4}>
                <DrawerTitle>Academy</DrawerTitle>
              </DrawerHeader>
              <DrawerBody padding={4}>
                <List.Root variant="plain" mt={2}>
                  <List.Item>
                    <IconButton onClick={toggleColorMode} />
                  </List.Item>
                  <List.Item>
                    <Button
                      variant={"outline"}
                      size={"md"}
                      w={"100%"}
                      p={4}
                      onClick={() => router.push("/")}
                    >
                      Home
                    </Button>
                  </List.Item>
                  <List.Item>
                    <Button
                      mt={2}
                      variant={"outline"}
                      size={"md"}
                      w={"100%"}
                      p={4}
                    >
                      About
                    </Button>
                  </List.Item>
                </List.Root>
              </DrawerBody>
              <DrawerFooter>
                <DrawerActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerActionTrigger>
                <Button>Save</Button>
              </DrawerFooter>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        ) : (
          <HStack mx={10}>
            <Link onClick={() => router.push("/")} fontSize={"22px"}>
              Next market
            </Link>
          </HStack>
        )}
        <HStack>
          <ColorModeToggle />
          <IconButton
            onClick={() => router.push("/cart")}
            variant="outline"
            size="sm"
          >
            <Icons iconName={"BiCartAlt"} />
          </IconButton>
          <Button
            colorPalette={"purple"}
            boxShadow={"xl"}
            p={4}
            variant={"plain"}
            color={"white"}
            onClick={() => router.push("/")}
          >
            Home page
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
