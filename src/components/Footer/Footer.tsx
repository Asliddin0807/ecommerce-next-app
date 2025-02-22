import { Box, Text, Link, Stack } from "@chakra-ui/react";
import Icons from "../Icons/Icons";

export default function Footer() {
  return (
    <Box
      boxShadow={"0px 0px 10px gray"}
      p={4}
      w={"100%"}
      mt={24}
      display={"flex"}
      gap={10}
      flexDirection={{ base: "column", md: "row", xl: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box p={5}>
        <Box
          w={"200px"}
          mb={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"55px"}
            h={"55px"}
            borderRadius={"full"}
            bg={"white"}
            boxShadow={"0 0 15px 5px rgba(56, 178, 172, 0.8)"}
            cursor={"pointer"}
            _hover={{
              boxShadow: "0 0 25px 10px rgba(56, 178, 172, 1)",
            }}
          >
            <Icons
              iconName={"BiChevronUp"}
              prioritet={true}
              color={"crimson"}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ base: "center", md: "start" }}
        >
          <Text
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            fontSize={"30px"}
            fontWeight={"bold"}
          >
            IT Academy
          </Text>
        </Box>

        <Text
          mt={4}
          textAlign={{ base: "center", md: "start" }}
          fontSize={"23px"}
        >
          Ijtimoyi tarmoqlarimiz
        </Text>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justify={{ base: "center", md: "start" }}
        >
          <Link>
            <Icons iconName={"BiLogoInstagram"} />
          </Link>
          <Link>
            <Icons iconName={"BiLogoTelegram"} />
          </Link>
          <Link>
            <Icons iconName={"BiLogoFacebook"} />
          </Link>
          <Link>
            <Icons iconName={"BiLogoYoutube"} />
          </Link>
          <Link>
            <Icons iconName={"BiLogoGoogle"} />
          </Link>
        </Stack>
      </Box>

      <Stack alignItems={"center"} p={5} mb={50}>
        <Box p={2}>
          <Text fontSize={"23px"} color={"gray"} fontWeight={"bold"}>
            Pochta manzil:
          </Text>
          <Text fontSize={"20px"}>komandirnuriddinov2@gmail.com</Text>
        </Box>
        <Box>
          <Text fontSize={"23px"} color={"gray"} fontWeight={"bold"}>
            Telefon raqam:
          </Text>
          <Text fontSize={"20px"}>+998(90) 110-05-46</Text>
        </Box>
      </Stack>

      <Box p={5}>
        <Text fontSize={"20px"}>Biz bilan xamkorlik qiling!</Text>
      </Box>
    </Box>
  );
}
