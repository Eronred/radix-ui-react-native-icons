import React from "react";
import Svg from "react-native-svg";
import { icons } from "./IconRegistry";

export type RadixIconName = keyof typeof icons;

interface RadixIconProps {
  name?: RadixIconName;
  size?: number;
  color?: string;
}

const RadixIcon: React.FC<RadixIconProps> = ({
  name = "hand",
  size = 24,
  color = "black",
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15" fill={color}>
      {icons[name]}
    </Svg>
  );
};

export default RadixIcon;
