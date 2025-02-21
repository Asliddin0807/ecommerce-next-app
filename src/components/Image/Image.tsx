"use client";

import { IProducts } from "@/Interface/Produc_iterfaces";
import Image from "next/image";
import { FC, useState } from "react";

interface Props {
  product: IProducts;
  fill?: boolean;
}

const CustomImage: FC<Props> = ({ product, fill }) => {
  const [isLoading, setIsloading] = useState(true);
  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          className="image"
          onLoad={() => setIsloading(false)}
          width={150}
          height={250}
          style={{ width: "auto", height: "auto", objectFit: "cover", borderRadius: '20px' }}

        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          onLoad={() => setIsloading(false)}
          style={{
            width: "400px",
            objectFit: "fill",
            height: "400px",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            filter: isLoading ? "blur(10px)" : "blur(0px)",
            transition: "transform 0.5s ease, filter 0.5s ease",
            transform: isLoading
              ? "scale(1.1)"
              : "scale(1)" /* Увеличение изображения на 10% */,
          }}
        />
      )}
    </>
  );
};

export default CustomImage;
