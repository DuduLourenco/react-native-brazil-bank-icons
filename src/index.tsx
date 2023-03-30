import React from "react";
import { Image } from "react-native";
import * as icons from "./icons/iconsIndex";

interface Props {
  COMPE: string;
  size: number;
  style?: any;
  quality?: "low" | "default";
}

const BankIcon = ({ COMPE, size, style, quality = "default" }: Props) => {
  const source = (icons as any)["b" + COMPE.toLowerCase()] || icons["b000"];

  return <Image source={source} style={[{ width: size * 1.6, height: size }, style]} />
};

export default BankIcon;
