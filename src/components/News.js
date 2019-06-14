import React, { Component } from 'react';
import New from './New';

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