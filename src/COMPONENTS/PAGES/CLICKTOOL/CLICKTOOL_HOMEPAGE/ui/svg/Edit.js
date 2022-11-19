import React from 'react';

function Edit (props) {
    return (
        <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20"
            onClick={props.onClick}>
            <path d="M0 0h20v20H0z" className="cls-1" fill="none" />
            <g transform="translate(-4414 -350)">
                <g transform="translate(4418 354)">
                    <g transform="translate(-642 -250)">
                        <g transform="translate(642 250)">
                            <g transform="translate(.636 2.441)">
                                <path 
                                    fill={props.color || "var(--navy0)"}
                                    d="M0 0h9.357v3.239H0z" 
                                    className="cls-2" 
                                    transform="rotate(-45 7.987 3.308)"/>
                            </g>
                            <g transform="translate(0 10.201)">
                                <path 
                                    fill={props.color || "var(--navy0)"}
                                    d="M1.8 18.8H0V17z" 
                                    className="cls-2" 
                                    transform="translate(0 -17)"/>
                            </g>
                            <g transform="translate(8.038)">
                                <path 
                                    fill={props.color || "var(--navy0)"}
                                    d="M15.679 3.9L13.4 1.617l.96-.96a1.635 1.635 0 0 1 2.459-.18 1.642 1.642 0 0 1-.24 2.459z" 
                                    className="cls-2" 
                                    transform="translate(-13.4 .006)" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Edit;