import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "79Gksh9otl",
    firstName: "Mehul",
    lastName: "Satardekar",
    username: "mehul7",
    password: "mehulSATARDEKAR1!",
    bio: "Programmer",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297050/flicker/flicker-user-img/mehulsatardekar_wqyksi.jpg",
    website: "https://github.com/mehulsatardekar/",
    createdAt: "2022-01-02T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Hitesh",
    lastName: "Chaudhary",
    username: "hiteshlco",
    password: "hiteshCHAUDHARY7!",
    bio: "Programmer with Entrepreneur mindset.. 😎",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297053/flicker/flicker-user-img/hiteshchoudhary_tsjtgy.jpg",
    website: "https://www.youtube.com/channel/UCXgGY0wkgOzynnHvSEVmE3A",
    createdAt: "2022-01-01T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Selena",
    lastName: "Gomez",
    username: "selnagomez",
    password: "selenaQueen55#",
    bio: "Girl with beautiful heart",
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297057/flicker/flicker-user-img/selenagomez_ogrq2k.jpg",
    website: "https://www.selenagomez.com/",
    createdAt: "2022-01-03T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },

  {
    _id: "o5gzWjEeX_",
    firstName: "Views",
    lastName: ".",
    username: "views",
    password: "viewsT90!",
    bio: "🌎 Sharing amazing views around the world",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657297059/flicker/flicker-user-img/views_eziy1w.jpg",
    website: "https://www.instagram.com/views/",
    createdAt: "2022-01-04T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "Robbert",
    lastName: "Corput",
    username: "hardwell",
    password: "robertHARDWELL55!",
    bio: "Rebel Never Dies.",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657298640/flicker/flicker-user-img/277316583_281741717325036_5159690811602956398_n_aftncy.jpg",
    website: "",
    createdAt: "2022-01-05T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "Tomorrowland",
    lastName: ".",
    username: "tomorrowland",
    password: "musicFEST919@",
    bio: "Live Today, Love Tomorrow, Unite Forever.",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1657299069/flicker/flicker-user-img/274318265_315790373723953_651891059280672099_n_sjyb6r.jpg",
    website: "https://linktr.ee/tomorrowland",
    createdAt: "2022-01-06T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },
  {
    _id: "t7cZfWIp-q",
    firstName: "Natalie",
    lastName: "Portman",
    username: "natalie",
    password: "nataliePortman123!",
    bio: "Be yourself!",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dwhsfh3sc/image/upload/v1658784621/flicker/flicker-user-img/240518537_398789948263808_5626611832738449619_n_urbmll.jpg",
    website: "https://www.instagram.com/natalieportman/",
    createdAt: "2022-01-01T10:55:06+05:30",
    backgroudImage: "",
    updatedAt: formatDate(),
  },
];
