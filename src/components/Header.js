import React from 'react';
import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper ligth-blue darken-3">
                <a href="" className="brand-logo center">{props.titulo}</a>
            </div>
        </nav>
    );
};

Header.propType = {
    titulo: PropTypes.string.isRequired
}

export default Header;

