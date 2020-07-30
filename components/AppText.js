import React from "react";
import { Text } from "react-native";
import deafultStyles from "../app/config/styles";
function AppText({ children, style, ...otherProps }) {
	return (
		<Text style={[deafultStyles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}

export default AppText;
