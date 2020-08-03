import React from "react";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import { StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import ListItemSeparator from "../../components/lists/ListItemSeparator";
import routes from "../navigation/routes";

let cards = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "100",
    image: require("../../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "1000",
    image: require("../../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={cards}
        keyExtractor={(card) => {
          return card.id.toString();
        }}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              props.navigation.navigate(routes.LISTING_DETAILS, item)
            }
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
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
