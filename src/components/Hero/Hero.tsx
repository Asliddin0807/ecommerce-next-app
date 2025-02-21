"use client";

import { Box, Heading, Text, Button, Stack, Container } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box overflow="hidden" w={"full"}>
      <Container
        maxW="7xl"
        py={{ base: 12, md: 16, lg: 20 }}
        textAlign="center"
        p={3}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="short"
          _dark={{ color: "white" }}
        >
          Data to enrich your{" "}
          <Text as="span" color="blue.700">
            online business
          </Text>
        </Heading>
        <Text
          mt={4}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.600"
          _dark={{ color: "gray.300" }}
        >
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mt={6}
          borderSpacing={4}
          justify="center"
        >
          <Button colorPalette="blue" variant={"solid"} size="lg" px={8}>
            Get started
          </Button>
          <Button colorPalette="black" variant="solid" size="lg" px={8}>
            Live demo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
