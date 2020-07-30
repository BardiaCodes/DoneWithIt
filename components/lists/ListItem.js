import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Text,
	TouchableHighlight,
} from "react-native";
import AppText from "../AppText";
import colors from "../../app/config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListItem(props) {
	return (
		<Swipeable renderRightActions={props.renderRightActions}>
			<TouchableHighlight onPress={props.onPress} underlayColor={colors.light}>
				<View style={styles.container}>
					{props.iconComponent}
					{props.image && <Image style={styles.image} source={props.image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title} numberOfLines={1}>
							{props.title}
						</AppText>
						{props.subTitle && (
							<AppText style={styles.subTitle} numberOfLines={2}>
								{props.subTitle}
							</AppText>
						)}
					</View>
					<MaterialCommunityIcons
						style={styles.icon}
						name="chevron-right"
						size={24}
						color={colors.medium}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		alignItems: "center",
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},

	title: {
		fontWeight: "500",
	},

	subTitle: {
		color: colors.medium,
	},

	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
		flex: 1,
	},
});

export default ListItem;
