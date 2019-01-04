const newsKey = process.env.newsKey;
import { fetchRequest } from "./NewsApi";

export const fetchNews = async type => {
  console.log("fetching news!");
  let path = "";
  switch (type) {
    case "tech":
      path = "q=Bitcoin";
      break;
    case "memes":
      path = "q=CryptoCurrency";
      break;
    case "abramov":
      path = "q=Ethereum";
      break;
    case "culture":
      path = "q=DogeCoin";
      break;
    case "top":
      path = "q=coin";
      break;
    default:
      path = "q=memes";
  }
  console.log("fetchRequest should be called...right...about...");
  return await fetchRequest(
    `https://newsapi.org/v2/everything?${path}&from=2019-1-18&sortBy=publishedAt&apiKey=${newsKey}`
  );
};
