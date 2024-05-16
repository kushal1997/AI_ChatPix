import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Messages({ messages }) {
  return (
    <View className="space-y-2 flex-1">
      <Text
        style={{ fontSize: wp(5) }}
        className="text-gray-700 font-semibold ml-1"
      >
        Assistant
      </Text>

      <View
        style={{ height: hp(58) }}
        className="bg-neutral-200 rounded-3xl p-4"
      >
        <ScrollView
          bounces={false}
          classname="space-y-4"
          showsHorizontalScrollIndicator={false}
        >
          {messages.length > 0 &&
            messages.map((msg, i) => {
              if (msg.role == "assistant") {
                return msg.content.includes("https") ? (
                  <View key={i} className="flex-row justify-start">
                    <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                      <Image
                        source={{ uri: msg.content }}
                        className="rounded-2xl"
                        resizeMode="contain"
                        style={{ height: wp(60), width: wp(60) }}
                      />
                    </View>
                  </View>
                ) : (
                  <View
                    key={i}
                    style={{ width: wp(70) }}
                    className=" bg-emerald-100 rounded-xl p-2 my-1 rounded-tl-none"
                  >
                    <Text>{msg.content}</Text>
                  </View>
                );
              } else {
                return (
                  <View key={i} className="flex-row justify-end my-1">
                    <View
                      style={{ width: wp(70) }}
                      className="bg-white rounded-xl p-2 rounded-tr-none"
                    >
                      <Text>{msg.content}</Text>
                    </View>
                  </View>
                );
              }
            })}
        </ScrollView>
      </View>
    </View>
  );
}
