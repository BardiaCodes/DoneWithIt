import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { StyleSheet, FlatList, Button, ActivityIndicator } from "react-native";
import colors from "../config/colors";
import ListItemSeparator from "../../components/lists/ListItemSeparator";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppText from "../../components/AppText";
import AppButton from "../../components/AppButton";
import AppActivityIndicator from "../../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      <AppButton onPress={getListingsApi.request}>Refresh Listings</AppButton>

      {getListingsApi.error && (
        <>
          <AppText>Couldn't retreive the listings.</AppText>
          <AppButton onPress={getListingsApi.request}>Retry</AppButton>
        </>
      )}
      <AppActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data.reverse()}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingsScreen;
