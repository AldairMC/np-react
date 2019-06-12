import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper ligth-blue darken-3">
                <a className="brand-logo center">{props.titulo}</a>
            </div>
        </nav>
    );
};

export default Header;