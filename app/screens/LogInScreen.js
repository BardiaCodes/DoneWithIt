import React from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LogInScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("../../assets/logo-red.png")}
        style={styles.logo}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          icon="email"
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          icon="lock"
        />
        <SubmitButton title="login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LogInScreen;
