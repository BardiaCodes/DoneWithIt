import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../app/config/colors";

function AppButton(props) {
	return (
		<TouchableOpacity onPress={props.onPress} style={[styles.button, { backgroundColor: props.color ? props.color : colors.primary }]}>
			<Text style={styles.buttonText}>{props.children}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		padding: 15,
		marginVertical: 10,
	},
	buttonText: {
		color: colors.white,
		fontWeight: "bold",
		fontSize: 18,
		textTransform: "uppercase",
	},
});

export default AppButton;
