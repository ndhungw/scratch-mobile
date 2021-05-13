import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Avatar } from "react-native-elements";

// constants
import COLORS from "../../../constants/colors";
import {
  RECIPE_DESCRIPTION_SAMPLE,
  RECIPE_TITLE_SAMPLE,
  RECIPE_PROFILE_NAME_SAMPLE,
  RECIPE_TIME_SAMPLE,
  RECIPE_LIKES_COUNT_SAMPLE,
  RECIPE_COMMENTS_COUNT_SAMPLE,
} from "../../../constants/defaultValues";

// images
import RecipeImg from "../../../assets/images/recipe.png";
import AvatarImg from "../../../assets/images/avatar.png";

// icons
import DotIcon from "../../../assets/icons/dot";
import HeartIcon from "../../../assets/icons/heart";
import PlusIcon from "../../../assets/icons/plus";

// local components
import CustomizedButton from "../../../components/Button/Button";

export default function CardFeed({
  id,
  profileName,
  profileAvatarSrc,
  time,
  title,
  description,
  imageSrc,
  isLiked,
  likesCount,
  commentsCount,
  handleToggleLike,
  handleSave,
  ...rest
}) {
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.cardMediaArea}>
        <ImageBackground
          source={imageSrc || RecipeImg}
          style={styles.imageSize}
          imageStyle={styles.image}
        >
          <View style={styles.cardHeader}>
            <View>
              <Avatar
                source={profileAvatarSrc || AvatarImg}
                rounded
                avatarStyle={styles.avatar}
              />
            </View>
            <View style={styles.authorInfo}>
              <Text style={styles.profileName}>
                {profileName || RECIPE_PROFILE_NAME_SAMPLE}
              </Text>
              <Text style={styles.time}>{time || RECIPE_TIME_SAMPLE} ago</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.contentTitle}>
          <Text style={styles.contentTitleText}>
            {title || RECIPE_TITLE_SAMPLE}
          </Text>

          <CustomizedButton
            onPress={() => handleToggleLike(id)}
            activeOpacity={0.8}
          >
            <HeartIcon fillColor={isLiked ? COLORS.Red : "none"} />
          </CustomizedButton>
        </View>
        <Text style={styles.contentParagraph}>
          {description || RECIPE_DESCRIPTION_SAMPLE}
        </Text>
      </View>
      <View style={styles.cardActions}>
        <View style={styles.actionArea}>
          <Text style={styles.actionAreaText}>
            {likesCount || RECIPE_LIKES_COUNT_SAMPLE} likes
          </Text>
          <DotIcon />
          <Text style={styles.actionAreaText}>
            {commentsCount || RECIPE_COMMENTS_COUNT_SAMPLE} comments
          </Text>
        </View>
        <CustomizedButton
          style={styles.saveButton}
          onPress={() => handleSave(id)}
          activeOpacity={0.8}
        >
          <PlusIcon style={styles.plusIcon} />
          <Text style={styles.saveButtonText}>Save</Text>
        </CustomizedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 270,
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
  // +cardHeader
  cardMediaArea: {
    height: 353,
    flexDirection: "column",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageSize: {
    flex: 1,
  },
  image: {
    borderRadius: 8,
  },
  cardHeader: {
    height: 62,
    backgroundColor: "white",
    opacity: 0.92,
    fontSize: 42,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 15,
    paddingRight: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  avatar: {
    backgroundColor: "transparent",
    width: 32,
    height: 32,
  },
  profileName: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16.37,
    color: "#030F09",
  },
  time: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16.37,
    color: COLORS.Grey,
  },
  // -cardHeader
  // +cardContent
  cardContent: {
    padding: 15,
    paddingBottom: 10,
  },
  contentTitle: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentTitleText: {
    color: COLORS.VampireBlack,
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 32,
  },
  contentParagraph: {
    color: "#A8A8A8",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
  },
  // +cardActions
  cardActions: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 15,
  },
  actionArea: {
    flex: 1,
    flexDirection: "row",
  },
  actionAreaText: {
    color: COLORS.Zambezi,
    lineHeight: 22,
    fontSize: 14,
    fontWeight: "400",
  },
  saveButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 26,
    width: 73,
    backgroundColor: COLORS.Ivory,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.DarkGreen,
    borderRadius: 4,
  },
  plusIcon: {
    width: 14,
    height: 14,
  },
  saveButtonText: {
    color: COLORS.DarkGreen,
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
});
