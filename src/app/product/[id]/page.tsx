import CustomImage from "@/components/Image/Image";
import { IProducts } from "@/Interface/Produc_iterfaces";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const fetchSingleData = await fetch(
    `https://fakestoreapi.in/api/products/${id}`
  );

  const product: { product: IProducts } = await fetchSingleData.json();

  return (
    <Flex
      p={50}
      mt={10}
      w="full"
      alignItems="center"
      justifyContent="center"
      gap={'10px'}
      flexDirection={{ base: "column", md: "column", xl: "row" }}
    >
      <Box
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "4xl",
        }}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
        }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            py={10}
            px={6}
          >
            <CustomImage product={product.product} />
          </Box>
        </Box>

        <Box
          py={10}
          px={'10px'}
          mt={{ base: "200px", md: 0, xl: 0 }}
          maxW={{
            base: "xl",
            lg: "5xl",
          }}
          w={{
            lg: "50%",
          }}
        >
          <Text
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            textAlign={{ base: "center", md: "center", xl: "start" }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            {product.product.title}
          </Text>
          <Text
            color="brand.600"
            _dark={{
              color: "yellow.400",
            }}
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            textAlign={{ base: "center", md: "center", xl: "start" }}
          >
            {product.product.category}
          </Text>
          <Text
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
            textAlign={{ base: "center", md: "center", xl: "start" }}
          >
            {product.product.description}
          </Text>

          <Box mt={8} p={4} textAlign={"center"}>
            <Link
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "gray.800",
              }}
            >
              <Text
                color="brand.600"
                _dark={{
                  color: "yellow.400",
                }}
                textAlign={"end"}
              >
                {product.product.price}$ add to cart
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
