import RecipeImg from "../images/recipe.png";
import userAvatarImage from "../images/avatar.png";

const FEED_DATA = [
  {
    id: "111",
    title: "Red Wine and Mint Soufflé",
    description:
      "Apparently we had reached a great height in the atmosphere, for the sky …",
    imageSrc: RecipeImg,
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
    imageSrc: RecipeImg,
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
    imageSrc: RecipeImg,
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
    name: "Banana and Mandarin Buns",
    imageSrc: RecipeImg,
    type: "",
  },
  {
    id: "suggest_02",
    name: "Coconut Pound Cake",
    imageSrc: RecipeImg,
    type: "",
  },
  {
    id: "suggest_03",
    name: "Cardamom and Cranberry Pastry",
    imageSrc: RecipeImg,
    type: "",
  },
];

const MADE_BY_RECIPE_TYPE_LIST = [
  {
    name: "potato",
    data: [
      {
        id: "potato_01",
        imageSrc: RecipeImg,
        name: "Tenderized Salty & Sour Potato Beef",
      },
      {
        id: "potato_02",
        imageSrc: RecipeImg,
        name: "Sautéed Orange & Mustard Bruschetta",
      },
      {
        id: "potato_03",
        imageSrc: RecipeImg,
        name: "Blanched Peppermint Pheasant",
      },
    ],
  },
  {
    name: "banana",
    data: [
      {
        id: "banana_01",
        imageSrc: RecipeImg,
        name: "Banana Salty & Sour Potato Beef",
      },
      {
        id: "banana_02",
        imageSrc: RecipeImg,
        name: "Banana Orange & Mustard Bruschetta",
      },
      {
        id: "banana_03",
        imageSrc: RecipeImg,
        name: "Banana Peppermint Pheasant",
      },
    ],
  },
  {
    name: "tomato",
    data: [
      {
        id: "tomato_01",
        imageSrc: RecipeImg,
        name: "Tomato Salty & Sour Potato Beef",
      },
      {
        id: "tomato_02",
        imageSrc: RecipeImg,
        name: "Tomato Orange & Mustard Bruschetta",
      },
      {
        id: "tomato_03",
        imageSrc: RecipeImg,
        name: "Tomato Peppermint Pheasant",
      },
    ],
  },
  {
    name: "pumpkin",
    data: [
      {
        id: "pumpkin_01",
        imageSrc: RecipeImg,
        name: "Pumpkin Salty & Sour Potato Beef",
      },
      {
        id: "pumpkin_02",
        imageSrc: RecipeImg,
        name: "Pumpkin Orange & Mustard Bruschetta",
      },
      {
        id: "pumpkin_03",
        imageSrc: RecipeImg,
        name: "Pumpkin Peppermint Pheasant",
      },
    ],
  },
];

const USER_DATA = {
  displayName: "Nick Evans",
  avatarSrc: userAvatarImage,
  title: "Potato Master",
  followersCount: 542,
  likesCount: 28500,
  kitchen: [
    {
      name: "recipes",
      count: 20,
      data: [
        { id: "recipe_01", imageSrc: RecipeImg, name: "Sweets" },
        { id: "recipe_02", imageSrc: RecipeImg, name: "Italian" },
        { id: "recipe_03", imageSrc: RecipeImg, name: "Desserts" },
        { id: "recipe_04", imageSrc: RecipeImg, name: "Chocolates" },
        { id: "recipe_05", imageSrc: RecipeImg, name: "Noodles" },
        { id: "recipe_06", imageSrc: RecipeImg, name: "Sweets" },
        { id: "recipe_07", imageSrc: RecipeImg, name: "Italian" },
        { id: "recipe_08", imageSrc: RecipeImg, name: "Desserts" },
        { id: "recipe_09", imageSrc: RecipeImg, name: "Chocolates" },
        { id: "recipe_10", imageSrc: RecipeImg, name: "Noodles" },
        { id: "recipe_11", imageSrc: RecipeImg, name: "Sweets" },
        { id: "recipe_12", imageSrc: RecipeImg, name: "Italian" },
      ],
    },
    {
      name: "saved",
      count: 75,
      data: [
        { id: "savedRecipe_01", imageSrc: RecipeImg, name: "savedRecipe_01" },
        { id: "savedRecipe_02", imageSrc: RecipeImg, name: "savedRecipe_02" },
        { id: "savedRecipe_03", imageSrc: RecipeImg, name: "savedRecipe_03" },
        { id: "savedRecipe_04", imageSrc: RecipeImg, name: "savedRecipe_04" },
        { id: "savedRecipe_05", imageSrc: RecipeImg, name: "savedRecipe_05" },
        { id: "savedRecipe_06", imageSrc: RecipeImg, name: "savedRecipe_06" },
        { id: "savedRecipe_07", imageSrc: RecipeImg, name: "savedRecipe_07" },
        { id: "savedRecipe_08", imageSrc: RecipeImg, name: "savedRecipe_08" },
      ],
    },
    {
      name: "following",
      count: 75,
      data: [
        { id: "following_01", imageSrc: RecipeImg, name: "following_01" },
        { id: "following_02", imageSrc: RecipeImg, name: "following_02" },
        { id: "following_03", imageSrc: RecipeImg, name: "following_03" },
        { id: "following_04", imageSrc: RecipeImg, name: "following_04" },
        { id: "following_05", imageSrc: RecipeImg, name: "following_05" },
      ],
    },
  ],
};

export { FEED_DATA, TRENDING_RECIPES, MADE_BY_RECIPE_TYPE_LIST, USER_DATA };
