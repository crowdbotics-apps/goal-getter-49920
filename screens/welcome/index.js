import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.group} />
          <View style={styles.group}>
            <Image style={styles.logo} source={{
            uri: "https://tinyurl.com/42evm3m3"
          }} />
            <Text style={styles.title}>Goal Getter</Text>
            <Text style={styles.text}>
              Let's build something amazing together!
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginVertical: 20
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 20
  },
  buttonText: {
    color: "#3b5998",
    fontSize: 18,
    fontWeight: "bold"
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 20
  }
});
export default WelcomeScreen;