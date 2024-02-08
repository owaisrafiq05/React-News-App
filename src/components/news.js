import React, { useEffect, useState } from 'react';
import NewsItem from "./newsItem";
import "./news.css";
import Spinner from "./spinner";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${this.capatilize(props.category)} - InfoPulse App`;

 const capatilize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async() => {
    props.setProgress(10);
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }


  useEffect(() => {
    updateNews();
  }, []);


  // async componentDidMount() {
  //   // let url =
  //   //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=1&pageSize=${props.pageSize}`
  //   //   this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // this.setState({
  //   //   articles: parsedData.articles,
  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false
  //   // });
  //   this.updateNews();
  // }

// const handlePrevClick = async () => {
//     console.log("Previous");
//     // let url =
//     // `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//     // this.setState({loading: true});
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parsedData.articles,
//     //   loading: false
//     // });
//     setPage(page - 1);
//     updateNews();
//   };

  // const handleNextClick = async () => {
  //   console.log("Next");
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
  //   //   let url = 
  //   //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   //   this.setState({loading: true});
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   this.setState({ 
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false
  //   //   });
  //   // }
  //   setPage(page + 1);
  //   updateNews();
  // };


  const fetchMoreData = async () => {
    const url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

    return (
      <div className="container my-3">
        <h1 className="text-center heading">InfoPulse - {capatilize(props.category)} Chronicles: Today's Top Stories</h1>
        {loading && <Spinner/>}
        {articles.length > 0 && (
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        style={{ overflow: 'hidden'}}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >

        <div className="container">  
        <div className="row1">
          {articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={
                    element.description
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author = {element.author}
                  date = {element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>

        </div>
        </InfiniteScroll>
)}
        {/* <div className="container d-flex justify-content-between">
          <div className="button-borders">
            <button
              disabled={this.state.page <= 1}
              className="primary-button"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
          </div>
          <div className="button-borders">
            <button className="primary-button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handleNextClick}>
              {" "}
              Next &rarr;
            </button>
          </div>
        </div> */}
      </div>
    );
  }


News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
