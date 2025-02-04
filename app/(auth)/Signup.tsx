import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import InputField from "@/components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onSignUpPress = () => {
    // code
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-center">
      <View className="flex-1 bg-white">
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            value={form.name}
            onChangeText={(value: string) => setForm({ ...form, name: value })}
          />
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
            title="Sign Up"
            onPress={onSignUpPress}
            className="bg-blue-600 text-white p-2"
          />

          {/* <OAuth /> */}

          <Link
            href="/Login"
            className="text-lg text-center text-gray-500 mt-10"
          >
            Already have an account? <Text className="text-blue-400 font-semibold">Log In</Text>
          </Link>
        </View>
        {/* <ReactNativeModal
        isVisible={verification.state === "pending"}
        onBackdropPress={() =>
          setVerification({ ...verification, state: "default" })
        }
        onModalHide={() => {
          if (verification.state === "success") {
            setShowSuccessModal(true);
          }
        }}
      >
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Text className="font-JakartaExtraBold text-2xl mb-2">
            Verification
          </Text>
          <Text className="font-Jakarta mb-5">
            We've sent a verification code to {form.email}.
          </Text>
          <InputField
            label={"Code"}
            placeholder={"12345"}
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code) => setVerification({ ...verification, code })}
          />
          {verification.error && (
            <Text className="text-red-500 text-sm mt-1">
              {verification.error}
            </Text>
          )}
          <CustomButton
            title="Verify Email"
            onPress={onPressVerify}
            className="mt-5 bg-success-500"
          />
        </View>
      </ReactNativeModal>
      <ReactNativeModal isVisible={showSuccessModal}>
        <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
          <Image
            source={images.check}
            className="w-[110px] h-[110px] mx-auto my-5"
          />
          <Text className="text-3xl font-JakartaBold text-center">
            Verified
          </Text>
          <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
            You have successfully verified your account.
          </Text>
          <CustomButton
            title="Browse Home"
            onPress={() => router.push(`/(root)/(tabs)/Home`)}
            className="mt-5"
          />
        </View>
      </ReactNativeModal> */}
      </View>
    </SafeAreaView>
  );
};

export default Signup;
