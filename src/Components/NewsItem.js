import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    imageURL,
    newsURL,
    author,
    publishedAt,
    source,
    theme,
  } = props;
  return (
    <div className="my-3">
      <div
        className="card"
        style={{
          backgroundColor: theme === "light" ? "#F5F5F5" : "#210F2D",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <img
          src={
            !imageURL
              ? "https://image.cnbcfm.com/api/v1/image/108086703-1736930590034-gettyimages-2187622132-20090101241204-99-231578.jpeg?v=1736930647&w=1920&h=1080"
              : imageURL
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}...{" "}
            <span
              className="badge text-bg-danger"
              style={{ fontSize: "0.6rem" }}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p
            className="card-text"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            <small>
              By {author ? author : "Unknown"} on{" "}
              {publishedAt
                ? new Date(publishedAt).toLocaleString("en-US", {
                    // hour: "2-digit",
                    // minute: "2-digit",

                    dateStyle: "medium",
                    timeStyle: "short",
                  })
                : "Unknown Time"}{" "}
            </small>
          </p>
          <a
            href={newsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm "
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
