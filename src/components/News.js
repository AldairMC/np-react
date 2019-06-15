import React, { Component } from 'react';
import New from './New';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition } from 'react-transition-group'

class News extends Component {
    render() {
        return (
            <div className="row">
                <TransitionGroup>
                    {this.props.news.map( i => (
                        <CSSTransition
                            key = {i.url}
                            classNames="fade"
                            timeout={500}
                        >
                            <New 
                                new = {i}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

News.propType = {
    news: PropTypes.array.isRequired
}

export default News;

