import { StyleSheet } from "react-native";
import React from "react";
import { View, ImageBackground, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { NavigationHelpersContext, useNavigationBuilder, TabRouter, TabActions, createNavigatorFactory } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createStackNavigator } from "@react-navigation/stack";
import { BACKGROUND_URL, LOGO_URL } from "./screens/constants.js";
import { slice } from "./auth";
import { styles } from "./screens/styles";
import { SignInTab, SignupTab } from "./screens/loginsignup";
import PasswordReset from "./screens/reset";

const LoginTabBar = ({
  navigation,
  state,
  descriptors
}) => {
  const currentTab = state.routes[state.index];
  return <View style={styles.tabStyle}>
      {state.routes.map(route => <View key={route.key} style={route.key == currentTab.key ? styles.activeTabStyle : null}>
          <TouchableOpacity onPress={() => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true
        });

        if (!event.defaultPrevented) {
          navigation.dispatch({ ...TabActions.jumpTo(route.name),
            target: state.key
          });
        }
      }}>
            <Text style={styles.tabStyle}>
              {descriptors[route.key].options.title || route.name}
            </Text>
          </TouchableOpacity>
        </View>)}
    </View>;
};

function LoginSignupTabs({
  initialRouteName,
  children,
  screenOptions
}) {
  const {
    state,
    navigation,
    descriptors
  } = useNavigationBuilder(TabRouter, {
    children,
    screenOptions,
    initialRouteName
  });
  return <NavigationHelpersContext.Provider value={navigation}>
      <KeyboardAwareScrollView contentContainerStyle={{
      flex: 1
    }}>
        <ScrollView style={[styles.container]}>
          <View style={_styles.kUDhwpfo}>
            <View style={styles.imageContainer}>
              <ImageBackground source={{
              uri: BACKGROUND_URL
            }} style={_styles.MNUSzYBC}>
                <Image source={{
                uri: LOGO_URL
              }} style={_styles.tbqMjDUj} />
              </ImageBackground>
            </View>
          </View>
          <View style={[styles.cardView]}>
            <LoginTabBar navigation={navigation} state={state} descriptors={descriptors} />
            <View style={styles.tabContainerStyle}>
              {descriptors[state.routes[state.index].key].render()}
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </NavigationHelpersContext.Provider>;
}

const createLoginNavigator = createNavigatorFactory(LoginSignupTabs);
const LoginStack = createLoginNavigator();

const LoginScreen = () => {
  return <LoginStack.Navigator>
      <LoginStack.Screen name="SignIn" component={SignInTab} options={{
      title: "Sign In"
    }} />
      <LoginStack.Screen name="SignUp" component={SignupTab} options={{
      title: "Sign Up"
    }} />
    </LoginStack.Navigator>;
};

const Stack = createStackNavigator();

const LoginSignup = () => {
  return <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
    </Stack.Navigator>;
};

export default {
  title: "login",
  navigator: LoginSignup,
  slice: slice
};

const _styles = StyleSheet.create({
  kUDhwpfo: {
    flex: 1
  },
  MNUSzYBC: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    height: "100%",
    width: "100%"
  },
  tbqMjDUj: {
    width: 155,
    height: 155,
    alignSelf: "center",
    resizeMode: "contain"
  }
});