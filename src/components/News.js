import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import Data from "./Sample.json";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "Pk",
    size: 100,
    topic: "news",
  };
  static propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    topic: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  data = async () => {
    this.setState({
      loading: true,
    });
    var options = {
      method: "GET",
      headers: {
        "x-api-key": "SFSG78-MkJhqh_pv5pgSB_aY5pVYHfuUxrXwRs6LXRM",
      },
    };
    const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${this.props.topic}&countries=${this.props.country}&page_size=${this.props.size}&page=${this.state.page}`;
    const data = await fetch(url, options);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalPages: parsedData.total_pages,
    });
  };
  componentDidMount = () => {
    this.data();
  };

  clickToNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.data();
  };

  clickToPrev = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.data();
  };

  render() {
    let articles = this.state.articles;
    let loading = this.state.loading;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="container my-3">
            <h2 className="text-center">Monkey top headline</h2>
            <div className="row">
              {articles === undefined ? (
                <div className="text-center">No Data Found</div>
              ) : (
                articles.map((e) => (
                  <div key={e._id} className="col-md-4">
                    <NewsItem
                      title={e.title}
                      description={e.summary}
                      imageUrl={e.media}
                      url={e.link}
                      time={e.published_date}
                      author={e.author}
                      twitter={e.twitter_account}
                    />
                  </div>
                ))
              )}
            </div>
            <div className="container my-3 d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                type="button"
                className="btn btn-primary"
                onClick={this.clickToPrev}
              >
                &larr; Privious
              </button>
              <button
                disabled={this.state.page >= this.state.totalPages}
                onClick={this.clickToNext}
                type="button"
                className="btn btn-primary"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
