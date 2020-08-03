import React, { useState } from "react";
import { StyleSheet, Modal, Text } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../../components/forms";

import CategoryPickerItem from "../../components/CategoryPickerItem";
import ImageInput from "../../components/ImageInput";
import FormImagePicker from "../../components/FormImagePicker";
import * as Location from "expo-location";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import AppText from "../../components/AppText";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().nullable().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    value: 1,
  },
  {
    label: "Cars",
    icon: "car",
    backgroundColor: "#fd9644",
    value: 2,
  },
  {
    label: "Cameras",
    icon: "camera",
    backgroundColor: "#fed330",
    value: 3,
  },
  {
    label: "Games",
    icon: "cards",
    backgroundColor: "#26de81",
    value: 4,
  },
  {
    label: "Clothing",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    value: 5,
  },
  {
    label: "Sports",
    icon: "basketball",
    backgroundColor: "#45aaf2",
    value: 6,
  },
  {
    label: "Movies & Music",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    value: 7,
  },

  {
    label: "Books",
    icon: "book-open-variant",
    backgroundColor: "#9B67E2",
    value: 8,
  },

  {
    label: "Other",
    icon: "calendar",
    backgroundColor: "#7C8CA1",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();
  const [modalVisible, setModalVisible] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setUploadProgress(0);

    setModalVisible(true);
    let result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setUploadProgress(progress.loaded / progress.total)
    );

    if (!result.ok) {
      setModalVisible(false);
      return alert("Could not post listing.");
    }
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setModalVisible(false)}
        visible={modalVisible}
        progress={uploadProgress}
      />

      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: "",
          description: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          width={120}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          items={categories}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
        />
        <SubmitButton title="add" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
