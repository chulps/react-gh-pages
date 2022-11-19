import React from 'react';

function Favorite (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path 
                fill="none"
                d="M0 0h20v20H0z" 
                className="cls-1" />
            <g transform="translate(4 4)">
                <path 
                    fill={props.color || "var(--navy0)"}
                    d="M6.278 10.187l-3.3 1.742a.526.526 0 0 1-.764-.558l.633-3.683-2.69-2.609a.529.529 0 0 1 .3-.9l3.7-.537L5.8.287a.531.531 0 0 1 .95 0L8.406 3.64l3.7.537a.531.531 0 0 1 .3.9L9.721 7.688l.633 3.683a.526.526 0 0 1-.764.558z" 
                    className="cls-2" 
                    transform="translate(.003 .008)"/>
            </g>
        </svg>
    )
}

export default Favorite;