import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Features from "../components/features";
import { dummyMessages } from "../constants";
import Messages from "../components/Messages";

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  return (
    <View className="flex-1 bg-white pt-7">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/chat_bot.png")}
            style={{ height: hp(15), width: hp(15) }}
          />
        </View>
        {messages.length > 0 ? <Messages messages={messages} /> : <Features />}
        <View className="flex justify-center items-center">
        {
            recording? <TouchableOpacity>
            <Image
              className="rounded-full"
              source={require("../../assets/recordingOn.gif")}
              style={{ width: hp(10), height: hp(10) }}
            />
          </TouchableOpacity>:
          <TouchableOpacity>
            <Image
              className="rounded-full"
              source={require("../../assets/PngItem_2081719.png")}
              style={{ width: hp(10), height: hp(10) }}
            />
          </TouchableOpacity>
        }
          
        </View>
      </SafeAreaView>
    </View>
  );
}
