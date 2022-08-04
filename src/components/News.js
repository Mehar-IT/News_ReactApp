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
      totalArticles: 0,
    };
  }
  componentDidMount = async () => {
    var options = {
      method: "GET",
      headers: {
        "x-api-key": "SFSG78-MkJhqh_pv5pgSB_aY5pVYHfuUxrXwRs6LXRM",
      },
    };
    var url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${this.props.topic}&countries=${this.props.country}&page_size=${this.props.size}&page=1`;
    const data = await fetch(url, options);
    const parsedData = await data.json();
    // const total = parsedData.total_hits - parsedData.articles.length;
    // status: 'ok', total_hits: 10000, page: 5, total_pages: 100, page_size: 100, …}
    console.log(parsedData.articles);
    console.log(parsedData.status);
    if (parsedData.status === "ok") {
      this.setState({
        articles: parsedData.articles,
        loading: false,
        // totalArticles: total,
        totalPages: parsedData.total_pages,
        page: parsedData.page,
      });
    } else {
      this.setState({
        articles: [],
        status: parsedData.status,
        loading: false,
        totalPages: parsedData.total_pages,
        page: parsedData.page,
      });
    }
  };

  clickToNext = async () => {
    this.setState({
      loading: true,
    });
    var options = {
      method: "GET",
      headers: {
        "x-api-key": "SFSG78-MkJhqh_pv5pgSB_aY5pVYHfuUxrXwRs6LXRM",
      },
    };
    var url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${
      this.props.topic
    }&countries=${this.props.country}&page_size=${this.props.size}&page=${
      this.state.page + 1
    }`;
    const data = await fetch(url, options);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: this.state.page + 1,
      // totalArticles: this.state.totalArticles - parsedData.articles.length,
    });

    // console.log(this.state.totalArticles);
    console.log(this.state.page);
  };
  clickToPrev = async () => {
    this.setState({
      loading: true,
    });
    var options = {
      method: "GET",
      headers: {
        "x-api-key": "SFSG78-MkJhqh_pv5pgSB_aY5pVYHfuUxrXwRs6LXRM",
      },
    };
    var url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${
      this.props.topic
    }&countries=${this.props.country}&page_size=${this.props.size}&page=${
      this.state.page - 1
    }`;
    const data = await fetch(url, options);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      loading: false,
      page: this.state.page - 1,
      // totalArticles: this.state.totalArticles + parsedData.articles.length,
    });
    // console.log(this.state.totalArticles);
  };

  render() {
    let articles = this.state.articles;
    let loading = this.state.loading;
    return (
      <>
        {loading === true ? (
          <Spinner />
        ) : (
          <div className="container my-3">
            <h2 className="text-center">Monkey top headline</h2>
            <div className="row">
              {articles.length === 0 ? (
                <div className="text-center">{this.state.status}</div>
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
                // disabled={this.state.totalArticles <= 0}
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
