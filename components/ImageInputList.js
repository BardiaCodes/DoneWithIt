import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Image,
	ScrollView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import deafultStyles from "../app/config/styles";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
	const scrollView = useRef();

	return (
		<View>
			<ScrollView
				style={{ paddingBottom: 15 }}
				horizontal
				ref={scrollView}
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput
								imageUri={uri}
								key={uri}
								onChangeImage={() => {
									onRemoveImage(uri);
								}}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		marginRight: 10,
	},
	container: {
		flexDirection: "row",
	},
});

export default ImageInputList;
