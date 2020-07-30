import React, { useState } from "react";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

function AppFormField({
	items,
	name,
	placeholder,
	width,
	PickerItemComponent,
	numberOfColumns,
	...otherProps
}) {
	const {
		setFieldTouched,
		errors,
		touched,
		setFieldValue,
		values,
	} = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				placeholder={placeholder}
				selectedItem={values[name]}
				width={width}
				PickerItemComponent={PickerItemComponent}
				numberOfColumns={numberOfColumns}
				{...otherProps}
			/>
			<ErrorMessage visible={touched[name]} error={errors[name]} />
		</>
	);
}

export default AppFormField;
