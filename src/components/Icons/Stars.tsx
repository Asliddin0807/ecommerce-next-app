import React, { FC } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface Props {
  rating: number;
  maxStars?: number;
  size?: number;
}

const StarRating: FC<Props> = ({ rating, maxStars = 5, size = 6 }) => {
  const stars: React.ReactNode[] = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <Icon
        as={StarIcon}
        key={i}
        color={i <= rating ? "yellow.400" : "gray.300"}
        boxSize={size}
      />
    );
  }

  return (
    <Box display="flex" w={"auto"}>
      {stars}
    </Box>
  );
};

export default StarRating;
