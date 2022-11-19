import React from 'react';

function Plus (props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
            <g transform="rotate(45 2.44 6.06)">
                <path 
                    d="M0 0h8.999v.9H0z" 
                    transform="rotate(45 .318 .768)"
                    fill="var(--navy0)"
                    stroke="var(--navy0)"
                />
                <path 
                    d="M0 0h8.999v.9H0z" 
                    transform="rotate(-45 7.682 3.182)"
                    fill="var(--navy0)"
                    stroke="var(--navy0)"
                />
            </g>
        </svg>
    )
}

export default Plus;