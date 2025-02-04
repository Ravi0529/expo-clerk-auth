import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const OAuth = () => {
  const handleGoogleSignIn = () => {
    // code
  };

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3 mb-4">
        <View className="flex-1 h-[1px] bg-gray-300" />
        <Text className="text-lg font-medium">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-300" />
      </View>

      <View>
        <TouchableOpacity
          className="flex flex-row justify-center items-center p-3 bg-neutral-100 rounded-lg"
          onPress={handleGoogleSignIn}
        >
          <Ionicons
            name="logo-google"
            size={24}
            color="blue"
            style={{ marginRight: 8 }}
          />
          <Text className="text-lg text-blue-600 font-semibold">
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OAuth;
