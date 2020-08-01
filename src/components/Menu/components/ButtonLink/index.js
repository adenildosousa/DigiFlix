import React from 'react';

function ButtonLink(props) {
    // props => {className: "o que vier no parametro"}
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>  
    );
}

export default ButtonLink;