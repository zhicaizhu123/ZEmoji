import Emoji from "./src/ZEmoji";
import EmojiItem from "./src/ZEmojiItem";
import EmojiList from "./src/ZEmojiList";

export const ZEmoji = Emoji;
export const ZEmojiItem = EmojiItem;
export const ZEmojiList = EmojiList;

const ZEmojiInstall = {};

ZEmojiInstall.install = function (Vue) {
  Vue.component("ZEmoji", Emoji);
};

export default ZEmojiInstall;
