import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import colors from "../app/config/colors";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ onPress, image, title, subTitle }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.imageCard} source={{ uri: image }}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
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
