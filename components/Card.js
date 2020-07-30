import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../app/config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.card}>
        <Image style={styles.imageCard} source={props.image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{props.title}</AppText>
          <AppText style={styles.subTitle}>{props.subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
  },

  imageCard: {
    height: 200,
    width: "100%",
  },

  background: {
    width: "100%",
    height: "100%",
  },

  detailsContainer: {
    padding: 20,
  },

  title: {
    marginBottom: 7,
  },

  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
