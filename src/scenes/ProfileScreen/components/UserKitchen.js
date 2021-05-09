import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

// constants
import COLORS from "../../../constants/colors";

// icons
import SeparatorLine from "../../../assets/icons/separator-line";

// components
import CustomizedButton from "../../../components/Button/Button";
import SimpleCard from "../../../components/Card/SimpleCard";

// local
import { simplify, capitalizeFirstLetter } from "../../../utils/utils";

export default function UserKitchen({ route, navigation, style, kitchen }) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const handleChangeCategory = (btnIndex) => {
    setSelectedCategoryIndex(btnIndex);
  };

  const handleCardClick = (id) => {
    alert(`Clicked card with id: ${id} `);
  };

  // renderItem
  const categoryItem = ({ item }) => {
    return (
      <SimpleCard
        imageSrc={item.imageSrc}
        title={item.name}
        onPress={() => handleCardClick(item.id)}
        imageStyle={styles.itemImage}
        textStyle={styles.itemText}
        style={styles.itemContainer}
      />
    );
  };

  return (
    <View style={styles.userKitchen}>
      <View style={styles.buttonsRowWrapper}>
        {kitchen.map((category, index) => (
          <CustomizedButton
            key={`${category.name + index}`}
            onPress={() => handleChangeCategory(index)}
            style={styles.kitchenTabButton}
          >
            <Text style={styles.countText}>{simplify(category.count)}</Text>
            <Text style={styles.tabNameText}>
              {capitalizeFirstLetter(category.name)}
            </Text>
            <View
              style={[
                styles.bottomLine,
                selectedCategoryIndex === index
                  ? styles.borderHighlight
                  : styles.borderTransparent,
              ]}
            />
          </CustomizedButton>
        ))}
      </View>

      <SeparatorLine style={styles.separatorLine} />

      <View style={styles.listContainer}>
        <FlatList
          data={kitchen[selectedCategoryIndex].data}
          renderItem={categoryItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userKitchen: {
    marginTop: 25,
  },
  kitchenTabButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonsRowWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  bottomLine: {
    width: 84,
    borderTopWidth: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginTop: 4,
  },
  borderHighlight: {
    borderTopColor: COLORS.DarkGreen,
  },
  borderTransparent: {
    borderTopColor: "transparent",
  },
  countText: {
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 27,
  },
  tabNameText: {
    fontWeight: "400",
    fontSize: 16,
  },
  separatorLine: {
    width: 290,
    marginLeft: "auto",
    marginRight: "auto",
  },
  listContainer: {},
  itemContainer: {
    width: 120,
    display: "flex",
    alignItems: "center",
    backgroundColor: COLORS.White,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 12,
  },
  itemImage: {
    width: 120,
    height: 100,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  itemText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
    margin: 5,
  },
  itemSeparator: {
    margin: 15,
  },
  columnWrapperStyle: {
    marginTop: 15,
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
});
