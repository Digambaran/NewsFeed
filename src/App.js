/* eslint-disable no-nested-ternary */
import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import Search from "./components/Search";
import TabList from "./components/TabList";
import WeatherCard from "./components/WeatherCard";

const Serialize = (Obj) => {
  const str = [];
  Object.keys(Obj).forEach((v) => {
    if (Obj[v] !== "" && v !== "group")
      str.push(`${encodeURIComponent(v)}=${encodeURIComponent(Obj[v])}`);
  });
  return `https://newsapi.org/v2/${Obj.group}?${str.join("&")}`;
};
const initState = {
  group: "top-headlines",
  query: "",
  qInTitle: "",
  category: "",
  country: "in",
  apiKey: process.env.REACT_APP_NEWS_API_KEY,
};
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [URLObj, setURLObj] = useState({ ...initState });
  const [news, setNews] = useState([]);

  const handleTabClick = ({ target: { value } }) => {
    if (value === "headlines") {
      return setURLObj((prevState) => ({
        ...prevState,
        ...initState,
      }));
    }

    return setURLObj((prevState) => ({
      ...prevState,
      group: "top-headlines",
      category: value,
    }));
  };
  const handleSearch = (value) => {
    setNews([]);
    setURLObj((prevState) => ({
      ...prevState,
      group: "everything",
      qInTitle: value,
      // api doesn't support country in everything group
      country: "",
    }));
  };

  useEffect(() => {
    const url = Serialize(URLObj);
    console.log(url);
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("failed");
      })
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, [URLObj]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="flex flex-col h-full justify-between bg-yellow-50 dark:bg-gray-200">
        <header>
          <div className="px-4 py-2 h-12 bg-yellow-400 dark:bg-gray-400 flex justify-between">
            <h1 className=" font-semibold">The news App</h1>

            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${darkMode ? "bg-blue-900" : "bg-blue-700"}
          my-auto relative inline-flex flex-shrink-0 h-6 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Dark Mode</span>
              <span
                aria-hidden="true"
                className={`${darkMode ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block w-6 h-full rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
              />
            </Switch>
          </div>
          <div className="px-4 py-2 bg-yellow-300 dark:bg-gray-300 flex justify-between flex-wrap-reverse">
            <TabList
              handleTabClick={handleTabClick}
              items={["Headlines", "Entertainment", "Technology"]}
              listName="news category"
            />
            <Search handler={handleSearch} />
          </div>
        </header>
        <ErrorBoundary>
          <main className="h-full">
            <div
              className="grid gap-3 sm:gap-1 xl:gap-2 p-4 sm:p-2 xl:p-6
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6
      grid-flow-row-dense max-w-screen-2xl mx-auto"
            >
              <WeatherCard />
              {news.length === 0
                ? // eslint-disable-next-line react/no-array-index-key
                  new Array(20).fill("").map((v, i) => (
                    <NewsCard
                      variant={
                        i % 9 === 0 ? "large" : i % 8 === 0 ? "wide" : "normal"
                      }
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                    />
                  )) // to avoid screen jumping
                : news.articles.map((article, i) => (
                    <NewsCard
                      variant={
                        i % 9 === 0 ? "large" : i % 8 === 0 ? "wide" : "normal"
                      }
                      key={article.pulishedAt}
                      data={article}
                    />
                  ))}
            </div>
          </main>
        </ErrorBoundary>
        <footer>
          <div className="bg-yellow-400 dark:bg-gray-400 h-12 flex" />
        </footer>
      </div>
    </div>
  );
};

export default App;
