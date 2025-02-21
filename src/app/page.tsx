import { Box, HStack } from "@chakra-ui/react";
import Hero from "@/components/Hero/Hero";
import { IProducts } from "../Interface/Produc_iterfaces";
import Products from "@/components/Products/Products";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.in/api/products");
  const products: {products: IProducts[]} = await res.json();


  return (
    <div>
      <Box mt={"100px"}>
        <Hero />
        <HStack mt={"100px"} wrap={"wrap"} justifyContent={"center"}>
          {products.products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </HStack>
      </Box>
    </div>
  );
}
