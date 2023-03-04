import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HeroImage, Jet } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* First section */}
      <View className="flex-row px-6 mt-20 items-center justify-center">
        <View className="mr-6">
          <Image source={Jet} className="w-16 h-16" />
        </View>
        <Text className="text-black font-semibold text-2xl">jet set </Text>
        <View className="bg-black rounded-full items-center justify-center w-16 h-16">
          <Text className="text-white font-bold text-2xl">GO</Text>
        </View>
      </View>

      {/* Second section  */}
      <View className="px-6 mt-10 z-10">
        <View>
          <Text className="text-xl pt-5">
            It is a <Text className="font-bold">big world</Text> out there!
          </Text>
          <Text className="text-3xl font-black pb-3">GO. EXPLORE.</Text>
          <Text>everything you can imagine is here</Text>
        </View>
      </View>

      {/* Circles  */}

      <View className="w-[300] h-[300] bg-[#BFEAF5] rounded-full absolute bottom-36 -right-36 z-0"></View>
      <View className="w-[320] h-[320] bg-[#82AAE3] rounded-full absolute -bottom-5 -left-36 z-0"></View>

      {/* image */}

      <View className="flex-1 justify-center items-center relative">
        <Image source={HeroImage} className="w-[420] h-[420] mt-20" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
