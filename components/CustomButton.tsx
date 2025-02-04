import { Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton: React.FC<{
  onPress: () => void;
  title: string;
  IconLeft?: React.FC;
  IconRight?: React.FC;
  className?: string;
  [key: string]: any;
}> = ({ onPress, title, IconLeft, IconRight, className, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full rounded-full flex flex-row justify-center items-center shadow-sm shadow-neutral-400/70 p-3 ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-lg font-bold ${className}`}>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
