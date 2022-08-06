import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import Data from "./Sample.json";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export default function News(props) {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [articles, setAritcles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [progress, setProgress] = useState(0);

  const data = async () => {
    setProgress(10);
    const options = {
      method: "GET",
      headers: {
        "x-api-key": `${apikey}`,
      },
    };

    const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${
      props.topic
    }&countries=${props.country}&page_size=${props.size}&page=${page + 1}`;

    let data = await fetch(url, options);
    let parsedData = await data.json();

    setProgress(100);
    setAritcles(
      articles.concat(parsedData.articles ? parsedData.articles : [])
    );
    setLoading(false);
    setTotalPages(parsedData.total_hits);
    setPage(page + 1);
  };

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <LoadingBar color="#0D6EFD" height={3} progress={progress} />
      {loading ? (
        <Spinner height="100vh" />
      ) : (
        <div className="container my-3">
          <h2 className="text-center">Monkey top headline</h2>
          <InfiniteScroll
            dataLength={articles.length}
            next={data}
            hasMore={articles.length !== totalPages}
            loader={<Spinner height="none" />}
          >
            <div className="container">
              <div className="row">
                {articles.length === 0 ? (
                  <div className="text-center py-5">No Data Found</div>
                ) : (
                  articles.map((e, index) => (
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

News.defaultProps = {
  country: "Pk",
  size: 10,
  topic: "news",
};
News.propTypes = {
  country: PropTypes.string,
  size: PropTypes.number,
  topic: PropTypes.string,
};
