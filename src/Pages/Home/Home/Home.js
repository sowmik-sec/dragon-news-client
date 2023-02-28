import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h2>Dragon News Home: {allNews.length}</h2>
      {allNews.map((news) => (
        <NewsSummaryCard news={news} key={news._id} />
      ))}
    </div>
  );
};

export default Home;
