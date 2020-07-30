import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import AppButton from "../../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        ></Image>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color={colors.primary}
          onPress={() => props.navigation.navigate("Login")}
        >
          LOG IN
        </AppButton>
        <AppButton
          color={colors.secondary}
          onPress={() => props.navigation.navigate("Register")}
        >
          REGISTER
        </AppButton>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },

  logo: {
    height: 100,
    width: 100,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  buttonContainer: {
    padding: 15,
    width: "100%",
  },

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
