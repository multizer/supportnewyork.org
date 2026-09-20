import dictionary from "./dictionaries/en.json";

export const getDictionary = async () => dictionary;

export type Dictionary = typeof dictionary;
