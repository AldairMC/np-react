import React from 'react';
import PropTypes from 'prop-types'

const New = (props) => {
    
    const {url, urlToImage, description, title, source} = props.new 
    
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" className="waves-effect waves-light btn">Ir</a>
                </div>
            </div>
        </div>
    );
};

New.propType = {
    new: PropTypes.shape({
        url: PropTypes.string,
        urlToImage: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string,
        source: PropTypes.object,
    })
}

export default New;

