import React, { Component } from 'react';
import NewSingle from './NewSingle';
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = `http://newsapi.org/v2/${this.props.news.query}${API_KEY}`
        console.log(url)

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news:data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render() {
        return (
            <div className='row'>
                <h2>{this.props.news.title}</h2>
                {this.renderItems()}
            </div>
        )
    }
}

export default News;