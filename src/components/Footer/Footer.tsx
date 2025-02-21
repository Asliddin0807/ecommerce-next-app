import { Box, HStack, Text, QrCode } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      w={"full"}
      position={"relative"}
      bottom={0}
      mt={2}
      _light={{ bg: "gray.200" }}
      bg={"gray.900"}
    >
      <HStack
        justifyContent={"space-between"}
        flexDirection={{ base: "column", md: "column", xl: "row" }}
        alignItems={"center"}
        p={5}
      >
        <Box>
          <Text fontSize={"25px"}>Next market platform</Text>
          <Text>@Nextjs all rights reserved!</Text>
        </Box>
        <Box>
          <QrCode.Root value="https://nextjs.org/">
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Root>
          <Text textAlign={"center"}>NextJs</Text>
        </Box>
      </HStack>
    </Box>
  );
}
