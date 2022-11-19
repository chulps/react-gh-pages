import React from 'react';

function CaretUp (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 10 20" className={props.className || null}>
            <g transform="translate(-4001 -316)">
                <rect
                    width="10"
                    height="20"
                    transform="translate(4021 336) rotate(180)"
                    fill="none"/>

                <g transform="translate(4015.4 329) rotate(180)">
                    <path
                        d="M6.7,8.1,2,3.4,3.4,2,6.7,5.3,10,2l1.4,1.4Z"
                        transform="translate(3 -1)"
                        fill="var(--navy0)"/>
                </g>
            </g>
        </svg>
    )
}

export default CaretUp;
