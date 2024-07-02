import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading.js';
import PropTypes from 'prop-types'



export class News extends Component {
  articles = []

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      page: 1,
      Loading: false
    }
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b8cdeef0dd540259e638194162510a8&pageSize=${this.props.pageSize}`;
    this.setState({ Loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ Loading: false });
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handleNext = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b8cdeef0dd540259e638194162510a8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ Loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      Loading: false
    });

  }



  handlePrev = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1b8cdeef0dd540259e638194162510a8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ Loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      Loading: false
    });
  }



  render() {
    const containerStyle = {
      margin: '55px', // 5px margin on both sides
    };
    return (
      <div className='Container my - 4'  >
        <div className='text-center' style={{ margin: '35px' }}>
          <h2>GetUpdates-Top Headlines </h2>
          {this.state.Loading && <Loading />}
        </div>
        <div className='row' >
          {!this.state.Loading && this.state.articles.map((element) => {
            return <div className='col-md-3' key={element.url} style={containerStyle} >
              <NewsItem title={element.title ? element.title.slice(0, 54) : ""} description={element.description ? element.description.slice(0, 80) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          }
          )}

        </div>
        <div className='container d-flex justify-content-around'>
          <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>&rarr;Next</button>
        </div>
      </div>
    )
  }
}

export default News
