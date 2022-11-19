import React from 'react';

function ColumnSettings (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M0 0h20v20H0z" className="cls-1" fill="none" />
            <g transform="translate(3 4)">
                <g>
                    <g id="Group_2692" transform="translate(-11 -7)">
                        <path 
                            fill={props.color || "var(--navy0)"}
                            d="M14.181 12.674H7.4a1.5 1.5 0 0 0-2.5 0H.749a.749.749 0 1 0 0 1.5h4.068a1.491 1.491 0 0 0 2.667 0h6.7a.749.749 0 1 0 0-1.5z" 
                            className="cls-2" 
                            transform="translate(11 3.989)"/>
                        <path 
                            fill={props.color || "var(--navy0)"}
                            d="M14.181 6.689h-1.528a1.494 1.494 0 0 0-2.517 0H.749a.749.749 0 0 0 0 1.5h9.319a1.491 1.491 0 0 0 2.652 0h1.461a.749.749 0 1 0 0-1.5z" 
                            className="cls-2" 
                            transform="translate(11 5.495)"/>
                        <path 
                            fill={props.color || "var(--navy0)"}
                            d="M.749 2.172H1.82a1.491 1.491 0 0 0 2.667 0h9.694a.749.749 0 1 0 0-1.5H4.4a1.5 1.5 0 0 0-2.5 0H.749a.749.749 0 0 0 0 1.5z" 
                            className="cls-2" 
                            transform="translate(11 7)"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default ColumnSettings;