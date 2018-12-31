import { Key } from "../../Key";
import { fetchRequest } from "./NewsApi";

export const fetchNews = async type => {
  console.log('fetching news!')
  let path = "";
  switch (type) {
    case "tech":
    console.log('the case is tech!')
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
  console.log('fetchRequest should be called...right...about...')
  return await fetchRequest(
    `https://newsapi.org/v2/everything?${path}&from=2018-11-28&sortBy=publishedAt&apiKey=${Key}`
  );
    console.log('it did not get called')
};
