import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import Data from "./Sample.json";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  static defaultProps = {
    country: "Pk",
    size: 10,
    topic: "news",
  };
  static propTypes = {
    country: PropTypes.string,
    size: PropTypes.number,
    topic: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 0,
      totalPages: 0,
    };
  }

  data = async () => {
    const options = {
      method: "GET",
      headers: {
        "x-api-key": `${this.apikey}`,
      },
    };
    const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${
      this.props.topic
    }&countries=${this.props.country}&page_size=${this.props.size}&page=${
      this.state.page + 1
    }`;

    let data = await fetch(url, options);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(
        parsedData.articles ? parsedData.articles : []
      ),
      page: this.state.page + 1,
      loading: false,
      totalPages: parsedData.total_hits,
    });
  };
  componentDidMount() {
    this.data();
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner height="100vh" />
        ) : (
          <div className="container my-3">
            <h2 className="text-center">Monkey top headline</h2>
            <InfiniteScroll
              dataLength={this.state.articles.length}
              // next={this.fetchMoreData}
              next={this.data}
              hasMore={this.state.articles.length !== this.state.totalPages}
              loader={<Spinner height="none" />}
            >
              <div className="container">
                <div className="row">
                  {this.state.articles.length === 0 ? (
                    <div className="text-center py-5">No Data Found</div>
                  ) : (
                    this.state.articles.map((e, index) => (
                      <div key={index} className="col-md-4">
                        <NewsItem
                          title={e.title ? e.title : ""}
                          description={e.summary ? e.summary : ""}
                          imageUrl={e.media ? e.media : ""}
                          url={e.link ? e.link : ""}
                          time={e.published_date ? e.published_date : ""}
                          author={e.author ? e.author : ""}
                          twitter={e.twitter_account ? e.twitter_account : ""}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        )}
      </>
    );
  }
}
