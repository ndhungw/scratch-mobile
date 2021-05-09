import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";

// constants
import COLORS from "../../constants/colors";
import SCREENS from "../../constants/screenNames";

// components
import CardFeed from "./components/CardFeed";
import Header from "../../components/Header/Header";
import CustomizedButton from "../../components/Button/Button";

// dummy data
import { FEED_DATA } from "./../../assets/data/data";

export default function FeedVerticalScroll({ route, navigation }) {
  const { username, password } = route.params || {
    username: "user001",
    password: "superSecret",
  };
  console.log("received from login screen: ", username, password);

  const [recipeFeeds, setRecipeFeeds] = React.useState(FEED_DATA);

  const handleToggleLike = (idFeed) => {
    if (!idFeed) {
      return false;
    }

    const updatedRecipeFeeds = recipeFeeds.map((feed) => {
      if (feed.id === idFeed) {
        const prevVal = feed.isLiked;
        // update isLike property
        feed.isLiked = !prevVal; // call api instead

        // update likesCount
        let newLikesCount;
        if (prevVal) {
          newLikesCount = feed.likesCount - 1;
        } else {
          newLikesCount = feed.likesCount + 1;
        }
        feed.likesCount = newLikesCount;
      }
      return feed;
    });

    setRecipeFeeds(updatedRecipeFeeds);

    return true;
  };

  const handleCardClick = (id) => {
    const clickedCard = recipeFeeds.filter((feed) => feed.id === id)[0];
    navigation.navigate(SCREENS.FEED_DETAILS_SCREEN, {
      profileName: clickedCard.profileName,
      time: clickedCard.time,
      title: clickedCard.title,
      description: clickedCard.description,
    });
  };

  const handleSave = () => alert("SAVED");

  const renderItem = ({ item }) => (
    <CustomizedButton
      onPress={() => handleCardClick(item.id)}
      style={styles.item}
    >
      <CardFeed
        // style={styles.card}
        id={item.id}
        title={item.title}
        description={item.description}
        imageSrc={item.imageSrc}
        isLiked={item.isLiked}
        likesCount={item.likesCount}
        commentsCount={item.commentsCount}
        profileName={item.profileName}
        profileAvatarSrc={item.profileAvatarSrc}
        time={item.time}
        handleToggleLike={handleToggleLike}
        handleSave={handleSave}
      />
    </CustomizedButton>
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={recipeFeeds}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={itemSeparator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.WhiteSmoke,
    padding: 25,
  },
  header: {},
  flatListContainer: {
    marginTop: 15,
  },
  itemSeparator: {
    marginVertical: 4,
  },
  item: {
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
