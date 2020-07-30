import React from "react";
import ImageInputList from "./ImageInputList";
import { ErrorMessage } from "./forms";
import { useFormikContext } from "formik";

function FormImagePicker({ name }) {
	const {
		setFieldTouched,
		errors,
		touched,
		setFieldValue,
		values,
	} = useFormikContext();

	const imageUris = values[name];

	const handleAdd = (uri) => {
		setFieldValue(name, [...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setFieldValue(
			name,
			[...imageUris].filter((imageUri) => imageUri !== uri)
		);
	};
	return ( 
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={(uri) => handleAdd(uri)}
				onRemoveImage={(uri) => handleRemove(uri)}
			/>
			<ErrorMessage visible={touched[name]} error={errors[name]} />
		</>
	);
}

export default FormImagePicker;
