import React from "react";
import Svg from "react-native-svg";
import { icons } from "./IconRegistry";

interface RadixIconProps {
  name?: string;
  size?: number;
  color?: string;
}

const RadixIcon: React.FC<RadixIconProps> = ({
  name = "hand",
  size = 24,
  color = "black",
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {icons[name]}
    </Svg>
  );
};

export default RadixIcon;
