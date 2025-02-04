import { View, Text, Alert } from "react-native";
import React, { useCallback, useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import InputField from "@/components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import OAuth from "@/components/OAuth";
import { useSignIn } from "@clerk/clerk-expo";

const Signup = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/Home");
      } else {
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);

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
            onPress={onSignInPress}
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
