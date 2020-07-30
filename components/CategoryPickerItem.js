import React from "react";
import Icon from "./Icon";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Icon name={item.icon} size={80} backgroundColor={item.backgroundColor} />
			<AppText style={styles.label}>{item.label}</AppText>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: "5%",
		paddingVertical: 15,
		alignItems: "center",
		width: "33%",
	},
	label: {
		marginTop: 5,
		textAlign: "center",
	},
});
export default CategoryPickerItem;
