import { recommendedArray } from "../../stores";

export const addToStore = (post) => {
  post.tags.forEach((tag) => {
    recommendedArray.update((prevArray) => {
      return prevArray.includes(tag) ? prevArray : [...prevArray, tag];
    });
  });
  recommendedArray.subscribe((data) => {
    console.log(data);
  });
};
