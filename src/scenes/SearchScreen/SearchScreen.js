import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView } from "react-native";

// constants
import COLORS from "../../constants/colors";

// components
import SearchBar from "./components/SearchBar/SearchBar";
import CustomizedButton from "../../components/Button/Button";
import SimpleCard from "../../components/Card/SimpleCard";

// icons
import SeparatorLine from "../../assets/icons/separator-line";

import { TRENDING_RECIPES } from "../../assets/data/data";
import { MADE_BY_RECIPE_TYPE_LIST } from "../../assets/data/data";

import { capitalizeFirstLetter } from "../../utils/utils";
import Constants from "expo-constants";
import { StatusBar } from "react-native";

export default function SearchSuggestion({ route, navigation }) {
  const [searchText, setSearchText] = useState("");
  const [trendingRecipes, setTrendingRecipes] = useState(TRENDING_RECIPES);
  const [madeByRecipeTypeList, setMadeByRecipeTypeList] = useState(
    MADE_BY_RECIPE_TYPE_LIST
  );
  const [selectedRecipeTypeIndex, setSelectedRecipeTypeIndex] = useState(0);
  const recipeTypeNameList = madeByRecipeTypeList.map((recipeType, index) => ({
    // id: `${recipeType.name + index}`,
    id: index,
    name: recipeType.name,
  }));

  // Search
  const handleChangeSearchText = (text) => {
    setSearchText(text);
  };

  const handleSelectRecipeType = (typeId) => {
    setSelectedRecipeTypeIndex(typeId);
  };

  const handleClickCard = (id) => {
    alert(`Clicked card with id ${id}`);
  };

  const simpleCardItem = ({ item }) => {
    return (
      <SimpleCard
        imageUri={item.imageSrc}
        title={item.name}
        onPress={() => handleClickCard(item.id)}
        style={styles.itemContainer}
        imageStyle={styles.itemImage}
        textStyle={styles.itemText}
      />
    );
  };

  const recipeTypeButtonItem = ({ item }) => {
    return (
      <CustomizedButton
        style={styles.recipeTypeButton}
        onPress={() => handleSelectRecipeType(item.id)}
      >
        <Text
          style={[
            styles.recipeTypeButtonText,
            selectedRecipeTypeIndex === item.id && styles.selectedText,
          ]}
        >
          {capitalizeFirstLetter(item.name)}
        </Text>
      </CustomizedButton>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        onChangeText={handleChangeSearchText}
        text={searchText}
        placeholder={"Type here to search for recipe"}
      />
      <View style={styles.suggestionWrapper}>
        <Text style={styles.suggestionTitle}>Trending Recipes</Text>
        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={trendingRecipes}
          renderItem={simpleCardItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>

      <SeparatorLine style={styles.separatorLine} />

      <View style={styles.suggestionWrapper}>
        <Text style={styles.suggestionTitle}>{"What can I make with ..."}</Text>
        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={recipeTypeNameList}
          renderItem={recipeTypeButtonItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={styles.recipeTypeButtonSeparator} />
          )}
        />

        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={madeByRecipeTypeList[selectedRecipeTypeIndex].data}
          renderItem={simpleCardItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.White,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
  },
  searchBar: {
    width: "100%",
  },
  suggestionWrapper: {
    alignSelf: "flex-start",
    paddingTop: 25,
  },
  suggestionTitle: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  // + item
  separator: {
    marginHorizontal: 15,
  },
  flatList: {
    flexGrow: 0,
  },
  itemContainer: {
    width: 120,
  },
  itemImage: {
    width: 120,
    height: 140,
  },
  itemText: {
    marginTop: 10,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  // - item
  separatorLine: {
    marginTop: 25,
    width: 290,
  },
  // + button list
  recipeTypeButton: {
    marginBottom: 15,
  },
  recipeTypeButtonText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 27,
    opacity: 0.3,
  },
  selectedText: {
    opacity: 1,
  },
  recipeTypeButtonSeparator: {
    marginHorizontal: 12,
  },
  // - buttonList
});
