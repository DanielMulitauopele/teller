import { Key } from "../../Key";
import { fetchRequest } from "../API/NewsApi";

export const fetchNews = async type => {
  let path = "";
  switch (type) {
    case "tech":
      path = "q=water";
      break;
    case "memes":
      path = "q=memes";
      break;
    case "abramov":
      path = "q=dan+abramov";
      break;
    case "culture":
      path = "q=culture";
      break;
    case "top":
      path = "q=top-news";
      break;
    default:
      path = "q=butts";
  }
  return await fetchRequest(
    `https://newsapi.org/v2/everything?${path}&from=2018-11-28&sortBy=publishedAt&apiKey=${Key}`
  );
};
