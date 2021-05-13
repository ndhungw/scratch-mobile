import RecipeImg from "../images/recipe.png";
import userAvatarImage from "../images/avatar.png";

const FEED_DATA = [
  {
    id: "111",
    title: "Red Wine and Mint Soufflé",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky …",
    imageUri: "",
    isLiked: true,
    likesCount: 31,
    commentsCount: 5,
    profileName: "Eden Wally",
    profileAvatarSrc: userAvatarImage,
    time: "2h",
  },
  {
    id: "222",
    title: "Red Wine 222",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky …",
    imageUri: "",
    isLiked: false,
    likesCount: 3,
    commentsCount: 7,
    profileName: "Emily Ommats",
    profileAvatarSrc: userAvatarImage,
    time: "4h",
  },
  {
    id: "333",
    title: "Red Wine and 333",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky …",
    imageUri: "",
    isLiked: false,
    likesCount: 12,
    commentsCount: 2,
    profileName: "Elise Gwen",
    profileAvatarSrc: userAvatarImage,
    time: "15h",
  },
];

const TRENDING_RECIPES = [
  {
    id: "suggest_01",
    title: "Banana and Mandarin Buns",
    imageUri: "",
    type: "",
  },
  {
    id: "suggest_02",
    title: "Coconut Pound Cake",
    imageUri: "",
    type: "",
  },
  {
    id: "suggest_03",
    title: "Cardamom and Cranberry Pastry",
    imageUri: "",
    type: "",
  },
];

const MADE_BY_RECIPE_TYPE_LIST = [
  {
    name: "potato",
    data: [
      {
        id: "potato_01",
        imageUri: "",
        title: "Tenderized Salty & Sour Potato Beef",
      },
      {
        id: "potato_02",
        imageUri: "",
        title: "Sautéed Orange & Mustard Bruschetta",
      },
      {
        id: "potato_03",
        imageUri: "",
        title: "Blanched Peppermint Pheasant",
      },
    ],
  },
  {
    name: "banana",
    data: [
      {
        id: "banana_01",
        imageUri: "",
        title: "Banana Salty & Sour Potato Beef",
      },
      {
        id: "banana_02",
        imageUri: "",
        title: "Banana Orange & Mustard Bruschetta",
      },
      {
        id: "banana_03",
        imageUri: "",
        title: "Banana Peppermint Pheasant",
      },
    ],
  },
  {
    name: "tomato",
    data: [
      {
        id: "tomato_01",
        imageUri: "",
        title: "Tomato Salty & Sour Potato Beef",
      },
      {
        id: "tomato_02",
        imageUri: "",
        title: "Tomato Orange & Mustard Bruschetta",
      },
      {
        id: "tomato_03",
        imageUri: "",
        title: "Tomato Peppermint Pheasant",
      },
    ],
  },
  {
    name: "pumpkin",
    data: [
      {
        id: "pumpkin_01",
        imageUri: "",
        title: "Pumpkin Salty & Sour Potato Beef",
      },
      {
        id: "pumpkin_02",
        imageUri: "",
        title: "Pumpkin Orange & Mustard Bruschetta",
      },
      {
        id: "pumpkin_03",
        imageUri: "",
        title: "Pumpkin Peppermint Pheasant",
      },
    ],
  },
];

const USER_DATA = {
  id: "user01",
  fullName: "Nguyen Dong Hung",
  avatarSrc: "",
  bio: "Potato Master",
  email: "ndh1379@gmail.com",
  phone: "0987654321",
  followersCount: 542,
  likesCount: 28500,
  kitchen: [
    {
      name: "recipes",
      count: 20,
      data: [
        { id: "recipe_01", imageUri: "", title: "Sweets" },
        { id: "recipe_02", imageUri: "", title: "Italian" },
        { id: "recipe_03", imageUri: "", title: "Desserts" },
        { id: "recipe_04", imageUri: "", title: "Chocolates" },
        { id: "recipe_05", imageUri: "", title: "Noodles" },
        { id: "recipe_06", imageUri: "", title: "Sweets" },
        { id: "recipe_07", imageUri: "", title: "Italian" },
        { id: "recipe_08", imageUri: "", title: "Desserts" },
        { id: "recipe_09", imageUri: "", title: "Chocolates" },
        { id: "recipe_10", imageUri: "", title: "Noodles" },
        { id: "recipe_11", imageUri: "", title: "Sweets" },
        { id: "recipe_12", imageUri: "", title: "Italian" },
      ],
    },
    {
      name: "saved",
      count: 75,
      data: [
        // { id: "savedRecipe_01", imageUri: '', title: "savedRecipe_01" },
        // { id: "savedRecipe_02", imageUri: '', title: "savedRecipe_02" },
        // { id: "savedRecipe_03", imageUri: '', title: "savedRecipe_03" },
        // { id: "savedRecipe_04", imageUri: '', title: "savedRecipe_04" },
        // { id: "savedRecipe_05", imageUri: '', title: "savedRecipe_05" },
        // { id: "savedRecipe_06", imageUri: '', title: "savedRecipe_06" },
        // { id: "savedRecipe_07", imageUri: '', title: "savedRecipe_07" },
        // { id: "savedRecipe_08", imageUri: '', title: "savedRecipe_08" },
      ],
    },
    {
      name: "following",
      count: 75,
      data: [
        { id: "following_01", imageUri: "", title: "following_01" },
        { id: "following_02", imageUri: "", title: "following_02" },
        { id: "following_03", imageUri: "", title: "following_03" },
        { id: "following_04", imageUri: "", title: "following_04" },
        { id: "following_05", imageUri: "", title: "following_05" },
      ],
    },
  ],
};

export { FEED_DATA, TRENDING_RECIPES, MADE_BY_RECIPE_TYPE_LIST, USER_DATA };
