import React, { useState } from 'react';
import NewsItem from '../components/NewsItem';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect,useContext } from 'react';
import UserContext from '../context/UserContext';
import './news.scss';

function News(props) {

    const context = useContext(UserContext);
    const {setProgress } = context;

    const pageSize = 9;
    const apiKey = process.env.REACT_APP_NEWS_API;

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    function capitalizeFirstLetter(string) {
        // return string[0].toUpperCase() + string.substring(1);
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        setProgress(30);
        let parsedData = await data.json()
        setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        setProgress(100);
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <div className='news'>
            {articles ? (
                <>
                    <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>RadarNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                    <div className="spinner">
                        {loading && <Spinner />}
                    </div>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">

                            <div className="row">
                                {articles.map((element) => {
                                    return <div className="col-md-4" key={element.url}>
                                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </>
            ) : (
                ""
            )}

        </div>
    )
}



// default values
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

// data type
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News;
