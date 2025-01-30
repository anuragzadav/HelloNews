import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (str) => {
    if (str.length === 0) return str; // Return empty string if input is empty
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(80);
    // console.log(parsedData);

    setarticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - HelloNews`;
    updateNews();
  }, []);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length !== totalResults}
      loader={
        <div className="d-flex justify-content-center my-3">
          {loading && <Spinner />}
        </div>
      }
    >
      <h2 className="text-center" style={{ marginTop: "5rem" }}>
        HelloNews - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      <div className="container my-4">
        <div className="d-flex justify-content-center">
          {loading && <Spinner />}
        </div>

        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  author={element.author}
                  publishedAt={element.publishedAt}
                  imageURL={element.urlToImage}
                  newsURL={element.url}
                  source={element.source.name}
                  theme={props.theme}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "General",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
