/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import imageNotFound from "../assets/Image_not_available.png";

export default class NewsItem extends Component {
  firstLetterRemove = (account) => {
    if (account === null) {
      return account;
    }
    return account.substring(1);
  };
  render() {
    let { title, description, imageUrl, url, author, time, twitter } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-info"
            style={{ left: "85%", zIndex: "1" }}
          >
            <a
              href={`https://twitter.com/${this.firstLetterRemove(twitter)}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              {!twitter ? "Not Found" : twitter}
            </a>
          </span>
          <img
            src={!imageUrl ? imageNotFound : imageUrl}
            // src={imageUrl}
            className="card-img-top"
            // alt={imageNotFound}
            alt="not found img"
            height="200px"
          />
          <div className="card-body">
            <h5 className="card-title">{title && title.slice(0, 45)}</h5>
            <p className="card-text">
              {description && description.slice(0, 95)}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {time}
              </small>
            </p>

            <a
              href={url}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
