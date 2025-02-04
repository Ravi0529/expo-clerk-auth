import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import InputField from "@/components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import OAuth from "@/components/OAuth";

const Signup = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onLoginPress = () => {
    // code
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center">
      <View className="flex-1 bg-white">
        <Text className="">Login to Your Account</Text>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
          />
          <CustomButton
            title="Login"
            onPress={onLoginPress}
            className="bg-blue-600 text-white p-2"
          />

          <OAuth />

          <Link
            href="/Signup"
            className="text-lg text-center text-gray-500 mt-10"
          >
            Don't have an Account?{" "}
            <Text className="text-blue-400 font-semibold">Sign Up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
