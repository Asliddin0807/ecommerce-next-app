"use client";
import { FC, useEffect, useState } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toaster, toaster } from "@/components/ui/toaster";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Link,
  createToaster,
} from "@chakra-ui/react";
import { useRouter } from "nextjs-toploader/app";
import { IProducts } from "@/Interface/Produc_iterfaces";
import CustomImage from "../Image/Image";
import StarRating from "@/components/Icons/Stars";

const DialogComponent: FC<{ product: IProducts }> = ({ product }) => {
  const router = useRouter();
  const nextPageHandler = () => {
    router.push(`/product/${product.id}`);
  };

  const addCart = () => {
    const cart: any[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toaster.create({
      title: "Success added to cart",
    });
  };

  return (
    <HStack wrap="wrap" gap="4">
      <Toaster />
      <DialogRoot
        placement={"center"}
        motionPreset="slide-in-bottom"
        defaultOpen
        onOpenChange={() => {
          router.back();
        }}
        size={{ base: "sm", md: "md", xl: "xl" }}
      >
        <div
          aria-hidden="true"
          style={{ position: "fixed", background: "gray" }}
        />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Detail product</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <HStack
              gap={5}
              alignItems={"start"}
              flexDirection={{ base: "column", md: "column", xl: "row" }}
            >
              <CustomImage product={product} />
              <Box p={4}>
                <Heading fontSize={"23px"}>
                  {product.title.slice(0, 45)}
                </Heading>
                <Box display={"flex"} gap={4} mt={4} alignItems={"center"}>
                  <Text fontSize={"20px"}>({product.discount})</Text>
                  <StarRating rating={5} />
                </Box>
                <Text fontSize={"20px"} mt={4}>
                  {product.price}$
                </Text>
                <Text fontSize={"20px"} mt={4} color={"yellow"}>
                  {product.category}
                </Text>
                <Text fontSize={"20px"} mt={4} color={"gray"}>
                  {product.description.slice(0, 200)}...
                </Text>
                <Box mt={10} display={"flex"} flexDirection={"column"}>
                  <Button
                    variant={"solid"}
                    colorPalette={"blue"}
                    mb={2}
                    onClick={addCart}
                  >
                    Add to cart
                  </Button>
                  <Link
                    variant={"underline"}
                    w={"100%"}
                    href={`/product/${product.id}`}
                  >
                    <Button
                      variant={"outline"}
                      colorPalette={"orange"}
                      mb={2}
                      onClick={nextPageHandler}
                      w={"100%"}
                    >
                      Full detail
                    </Button>
                  </Link>
                </Box>
              </Box>
            </HStack>
          </DialogBody>
          <DialogFooter></DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </HStack>
  );
};

export default DialogComponent;
