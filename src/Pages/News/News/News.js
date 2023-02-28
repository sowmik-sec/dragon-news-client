import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>This is news {news.length}</h2>
    </div>
  );
};

export default News;
