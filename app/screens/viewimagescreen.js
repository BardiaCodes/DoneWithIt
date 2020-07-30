import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<MaterialCommunityIcons
				style={styles.closeicon}
				name="close"
				size={35}
				color="white"
			/>

			<MaterialCommunityIcons
				style={styles.deleteicon}
				name="trash-can-outline"
				size={35
				 }
				color="white"
			/>

			<Image
				source={require("../../assets/chair.jpg")}
				style={styles.image}
				resizeMode="contain"
			/>
		</View>
	);
}

export default ViewImageScreen;

const styles = StyleSheet.create({
	closeicon: {
		position: "absolute",
		top: 20,
		bottom: 10,
		left: 10,
	},
	deleteicon: {
		position: "absolute",
		top: 20,
		right: 10,
	},

	container: {
		backgroundColor: colors.black,
		flex: 1,
	},

	image: {
		height: "100%",
		width: "100%",
		flex: 1,
	},
});
