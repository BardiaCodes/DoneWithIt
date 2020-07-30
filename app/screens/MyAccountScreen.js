import React from "react";
import Screen from "../../components/Screen";
import ListItem from "../../components/lists/ListItem";

import { View, StyleSheet, FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/lists/ListItemSeparator";

const options = [
  {
    title: "My Listings",
    icon: "format-list-bulleted",
    backgroundColor: colors.primary,
  },
  {
    title: "My Messages",
    icon: "email",
    backgroundColor: colors.secondary,
    targetScreen: "Messages",
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.background}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedami"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={options}
          keyExtractor={(option) => {
            return option.title;
          }}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              iconComponent={
                <Icon name={item.icon} backgroundColor={item.backgroundColor} />
              }
              onPress={() => props.navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          iconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.light,
  },

  container: {
    backgroundColor: colors.white,
    marginVertical: 20,
  },
});

export default MyAccountScreen;
