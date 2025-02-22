"use client";
import { IProducts } from "@/Interface/Produc_iterfaces";
import { Badge, Box, Text } from "@chakra-ui/react";

import { FC } from "react";
import "./image.css";
import CustomImage from "../Image/Image";
import { useRouter } from "nextjs-toploader/app";

const Products: FC<{ product: IProducts }> = ({ product }) => {
  const router = useRouter();
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      _hover={{ transition: "ease 1s" }}
      cursor={"pointer"}
      onClick={() => router.push(`/product/${product.id}`)}
    >
      <Box position={'relative'}>
        <CustomImage product={product} />
      </Box>
      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Badge rounded="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.600"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          _dark={{
            color: "white",
          }}
        >
          {product.title.slice(0, 35)}...
        </Text>

        <Box
          _dark={{
            color: "white",
          }}
        >
          {product.price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              // <StarIcon
              //   key={i}
              //   color={i < property.rating ? "teal.500" : "gray.300"}
              // />
              <Text key={i}>Ap</Text>
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {/* {product.discount} reviews */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
