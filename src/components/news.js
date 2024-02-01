import React, { Component } from "react";
import NewsItem from "./newsItem";
import "./news.css";
import Spinner from "./spinner";
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export class news extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }


  async updateNews(){
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }



  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=1&pageSize=${this.props.pageSize}`
    //   this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("Previous");
    // let url =
    // `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNextClick = async () => {
    console.log("Next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let url = 
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6dd077f549814e7f87b5987785557a6e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({ 
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   });
    // }
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center heading">InfoPulse - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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

        <div className="container d-flex justify-content-between">
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
            <button className="primary-button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>
              {" "}
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default news;
