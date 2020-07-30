import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Image,
	Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import deafultStyles from "../app/config/styles";

function ImageInput({ size = 100, imageUri, onChangeImage }) {
	useEffect(() => {
		requestPermission();
	}, []);

	const requestPermission = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		if (!result.granted) {
			alert("Enable camera permission");
		}
	};

	const handlePress = () => {
		if (!imageUri) {
			selectImage();
		} else {
			Alert.alert("Delete", "Are you sure you want to delete this image?", [
				{ text: "Yes", onPress: () => onChangeImage(null) },
				{ text: "No" },
			]);
		}
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			if (!result.cancelled) {
				onChangeImage(result.uri);
			}
		} catch (error) {
			console.log("Error reading image");
		}
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageUri && (
					<MaterialCommunityIcons
						color={deafultStyles.colors.medium}
						name="camera"
						size={50}
					/>
				)}
				{imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: "100%",
	},
	container: {
		width: 100,
		height: 100,
		borderRadius: 15,
		backgroundColor: deafultStyles.colors.light,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
});

export default ImageInput;
