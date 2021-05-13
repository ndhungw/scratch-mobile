import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList, StatusBar, Text } from 'react-native';

// constants
import COLORS from '../../constants/colors';
import SCREENS from '../../constants/screenNames';
import { STORAGE_KEY } from '../../constants/defaultValues';

// components
import CardFeed from './components/CardFeed';
import Header from '../../components/Header/Header';
import CustomizedButton from '../../components/Button/Button';

// dummy data
import { FEED_DATA } from './../../assets/data/data';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FeedVerticalScroll({ route, navigation }) {
  const { username, password } = route.params || {
    username: 'user001',
    password: 'superSecret',
  };
  console.log('received from login screen: ', username, password);

  const [recipeFeeds, setRecipeFeeds] = useState(FEED_DATA);

  const [savedFeeds, setSavedFeeds] = useState([]);

  // const { getItem, setItem, removeItem } = useAsyncStorage(
  //   `${STORAGE_KEY}_SavedFeed`
  // );

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

  const handleSave = async (idFeed) => {
    const chosenFeed = FEED_DATA.filter((feed) => feed.id.toString() === idFeed.toString())[0];

    if (isExistingFeed(idFeed, savedFeeds.data)) {
      alert('This feed was already saved before!');
      return; //! important
    }

    // interact with storage
    // const newSavedFeedList = [...savedFeeds, chosenFeed];
    const newSavedFeedList = {
      ...savedFeeds,
      data: [...savedFeeds.data, chosenFeed],
    };
    console.log('handleSave-newSavedFeedList:', newSavedFeedList);

    try {
      // get user data first
      const userData = await AsyncStorage.getItem(`${STORAGE_KEY}_USER_user01`);
      const userObject = JSON.parse(userData);
      const newUserKitchen = userObject.kitchen.map((item) =>
        item.name === 'saved' ? newSavedFeedList : item,
      );
      const newUserObject = {
        ...userObject,
        kitchen: newUserKitchen,
      };
      await AsyncStorage.mergeItem(`${STORAGE_KEY}_USER_user01`, JSON.stringify(newUserObject));
      setSavedFeeds(newSavedFeedList);

      alert(`Save successfully, the saved feed has title: ${chosenFeed.title} `);
    } catch (err) {
      console.log(err);
    }
  };

  const readDataFromStorage = async (idUser) => {
    const userData = await AsyncStorage.getItem(`${STORAGE_KEY}_USER_${idUser}`);

    if (!userData) {
      console.log('User data NOT found in storage');
      return;
    }

    const userDataObject = JSON.parse(userData);
    const userKitchen = userDataObject.kitchen;
    const userSavedFeed = userKitchen.filter((kitchenItem) => kitchenItem.name === 'saved')[0];

    if (userSavedFeed) {
      console.log('savedFeeds we read from storage: ', userSavedFeed);
      setSavedFeeds(userSavedFeed);
    } else {
      console.log('userSavedFeed is not found in kitchen: ', userSavedFeed);
    }
  };

  const isExistingFeed = (idFeed, feeds) => {
    const found = feeds.find((feed) => feed.id.toString() === idFeed.toString());
    return Boolean(found);
  };

  // read data on mount
  React.useEffect(() => {
    readDataFromStorage('user01');
    console.log('Feed screen on mount');
  }, []);

  const renderItem = ({ item }) => (
    <CustomizedButton onPress={() => handleCardClick(item.id)} style={styles.item}>
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
