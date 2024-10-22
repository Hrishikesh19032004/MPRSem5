import React, { Component } from 'react';
import NewsTypes from '../Components/NewsTypes';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../Components/Spinner';
import "../Styles/News.css"
import Newsletter from '../Components/NewsLetter';

class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'business',
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
    }

    async componentDidMount() {
        try {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6db5072ef9e42379e38494506131571&page=${this.state.page}&pageSize=9`);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        try {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a6db5072ef9e42379e38494506131571&page=${this.state.page}&pageSize=9`);
            let parsedData = await data.json();
            this.setState({ articles: this.state.articles.concat(parsedData.articles), loading: false, totalResults: parsedData.totalResults });
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    }

    render() {
        return (
            <>
                <h3 className='text-center' style={{ color: 'var(--light-text)', marginTop: "7%", marginBottom: '3%', fontSize:"5.5rem",fontWeight:"100"}}>
                    Top Headlines - {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}
                </h3>
                <Newsletter/>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="contain">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4 my-2" key={element.url}>
                                        <NewsTypes 
                                            title={element.title} 
                                            description={element.description} 
                                            imageURL={element.urlToImage} 
                                            newsURL={element.url} 
                                            source={element.source.name} 
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                </InfiniteScroll>
            </>
        )
    }
}

export default News;
