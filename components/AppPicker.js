import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	TouchableWithoutFeedback,
	Modal,
	Button,
	FlatList,
	Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../app/config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
	icon,
	items,
	width = "100%",
	placeholder,
	onSelectItem,
	PickerItemComponent = PickerItem,
	selectedItem,
	numberOfColumns = 1,
	...otherProps
}) {
	let [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<TouchableWithoutFeedback
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name={"chevron-down"}
						size={20}
						color={defaultStyles.colors.medium}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button
						title="Close"
						onPress={() => {
							setModalVisible(false);
						}}
					></Button>
					<FlatList
						data={items}
						keyExtractor={(item) => item.value.toString()}
						numColumns={numberOfColumns}
						renderItem={({ item }) => {
							return (
								<PickerItemComponent
									item={item}
									onPress={() => {
										setModalVisible(false);
										onSelectItem(item);
									}}
								/>
							);
						}}
					/>
				</Screen>
			</Modal>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		padding: 15,
		marginVertical: 10,
		alignItems: "center",
	},

	TextInput: defaultStyles.text,

	icon: {
		marginRight: 10,
	},

	text: {
		flex: 1,
	},

	placeholder: {
		color: defaultStyles.colors.medium,
		flex: 1,
	},
});
export default AppPicker;
