"use client";

import Icons from "@/components/Icons/Icons";
import CustomImage from "@/components/Image/Image";
import { IProducts } from "@/Interface/Produc_iterfaces";
import { Box, Button, HStack, Separator, Text, EmptyState, VStack } from "@chakra-ui/react";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu"


export default function CartPage() {
  const [product, setProduct] = useState<IProducts[]>(
    JSON.parse(window.localStorage.getItem("cart") || "[]")
  );

  const router = useRouter()
  const [total, setTotal] = useState<number>(0);

  const deleteHandler = (id: number) => {
    const deleteItem = product.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(deleteItem));
    setProduct(deleteItem);
  };

  useEffect(() => {
    const totalPrice = product.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotal(totalPrice);
  }, [product]);



  return (
    <>
      {product.length ? (
        <Box
          w={"full"}
          display={"flex"}
          flexDirection={{ base: "column", md: "column", xl: "row" }}
          alignItems={"start"}
          gap={2}
          mt={20}
          p={4}
        >
          <Box w={{ base: "100%", md: "100%", xl: "70%" }}>
            {product.map((item) => (
              <HStack
                mt={4}
                key={item.id}
                p={4}
                borderRadius={"xl"}
                boxShadow={"xl"}
                _dark={{ bg: "gray.900" }}
                bg={"gray.200"}
                alignItems={"center"}
                gap={2}
                justifyContent={"space-between"}
              >
                <Box px={2} display={"flex"} gap={6} alignItems={"center"}>
                  <Box w={"150px"}>
                    <CustomImage product={item} fill={true} />
                  </Box>
                  <Box>
                    <Text fontSize={"xl"}>{item.title.slice(0, 20)}</Text>
                    <Text fontSize={"lg"} fontWeight={"bold"}>
                      price:{" "}
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "usd",
                      })}
                    </Text>
                    <Text fontSize={"lg"} color={"blue.600"}>
                      category: {item.category}
                    </Text>
                    <Text fontSize={"lg"} color={"yellow.600"}>
                      quantity: {item.quantity}
                    </Text>
                  </Box>
                </Box>
                <Box mx={50}>
                  <Button
                    colorPalette={"red"}
                    onClick={() => deleteHandler(item.id)}
                  >
                    <Icons iconName={"BiTrash"} />
                  </Button>
                </Box>
              </HStack>
            ))}
          </Box>
          <Box
            w={{ base: "100%", md: "100%", xl: "30%" }}
            position={"sticky"}
            top={"110px"}
            borderRadius={"md"}
            p={4}
            _dark={{ bg: "gray.900" }}
            bg={"gray.200"}
          >
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"20px"}>Subtotal price</Text>
              <Text fontSize={"20px"}>
                {total.toLocaleString("en-US", {
                  style: "currency",
                  currency: "usd",
                })}
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"} mt={2}>
              <Text fontSize={"20px"}>Shipping price</Text>
              <Text fontSize={"20px"}>
                {(10).toLocaleString("en-US", {
                  style: "currency",
                  currency: "usd",
                })}
              </Text>
            </HStack>
            <Separator mt={2} colorPalette={"black"} />
            <HStack
              justifyContent={"space-around"}
              mt={2}
              alignItems={"center"}
            >
              <Text fontSize={"22px"} fontWeight={"bold"}>
                Total price
              </Text>
              <Text fontSize={"22px"} fontWeight={"bold"}>
                {(total + 10).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Text>
            </HStack>
            <Button
              colorPalette={"blue"}
              variant={"solid"}
              p={4}
              w={"full"}
              mt={5}
            >
              Checkout
              <Icons iconName="BiCartAlt" />
            </Button>
          </Box>
        </Box>
      ) : (
        <EmptyState.Root py={'200px'}>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <LuShoppingCart />
            </EmptyState.Indicator>
            <VStack textAlign="center">
              <EmptyState.Title>Your cart is empty</EmptyState.Title>
              <EmptyState.Description>
                Explore our products and add items to your cart
              </EmptyState.Description>
              <Button w={'full'} onClick={() => router.push('/')}>Go to products</Button>
            </VStack>
          </EmptyState.Content>
        </EmptyState.Root>
      )}
    </>
  );
}
