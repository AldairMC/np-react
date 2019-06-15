import React, { Component } from 'react';
import New from './New';
import PropTypes from 'prop-types';

class News extends Component {
    render() {
        return (
            <div className="row">
               {this.props.news.map( i => (
                   <New 
                    key = {i.url}
                    new = {i}
                   />
               ))}
            </div>
        );
    }
}

export default News;

News.propType = {
    news: PropTypes.object.isRequired
}