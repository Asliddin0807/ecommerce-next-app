"use client";
import React from "react";
import * as Iconses from "react-icons/bi"; // Импортируем все иконки как объект
import { useColorMode } from "@/components/ui/color-mode";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  iconName?: keyof typeof Iconses; // Разрешаем только существующие иконки из Bi (BoxIcons)
  color?: string;
  prioritet?: boolean;
  size?: string | number;
}

const Icons: React.FC<IconsProps> = ({
  iconName = "",
  color = "black",
  prioritet = false,
  size = "24px",
  ...props
}) => {
  const { colorMode } = useColorMode();
  const IconComponent = Iconses[iconName as keyof typeof Iconses];

  if (!IconComponent) {
    return null; // Возвращаем null, если иконка не найдена
  }

  return (
    <IconComponent
      style={{ color: prioritet ? color : colorMode, fontSize: size }}
      {...props}
    />
  );
};

export default Icons;
