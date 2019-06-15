import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    
    categoryRef = React.createRef()
    
    getCategory = (e) => {
        e.preventDefault()

        //obteniendo categoria
        let category = this.categoryRef.current.value
        this.props.getNews(category)
    }

    render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.getCategory}>
                        <h2>Category news</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoryRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sport">Sport</option>
                                <option value="technology">Technology</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m8 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Search" />
                        </div>
                    </form>
                </div>        
            </div>        
        );
    }
}

export default Form;

Form.propType = {
    getNews: PropTypes.func.isRequired
}