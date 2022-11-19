import React from 'react';

function DetailedReport (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M0 0h20v20H0z" className="cls-1" fill="none" />
            <g transform="translate(-4348 -350)">
                <g transform="translate(4352 354)">
                    <g transform="translate(-19 -28)">
                        <g transform="translate(20.871 28.323)">
                            <path
                                fill={props.color || "var(--navy0)"}
                                d="M11.739.5a1.143 1.143 0 0 0-1.161 1.1L8.9 2.694a.818.818 0 0 0-.387-.065 1.225 1.225 0 0 0-1.226 1.226 1.09 1.09 0 0 0 .194.645l-.516 1.677a1.2 1.2 0 0 0-.839.9l-1.484.71a1.518 1.518 0 0 0-.516-.129A1.225 1.225 0 0 0 2.9 8.887a1.186 1.186 0 0 0 1.226 1.226 1.182 1.182 0 0 0 1.161-.9L6.9 8.435a1.2 1.2 0 0 0 .452.129 1.225 1.225 0 0 0 1.225-1.225 1.245 1.245 0 0 0-.194-.645l.581-1.742a1.213 1.213 0 0 0 .774-.968l1.677-1.1a.818.818 0 0 0 .387.065 1.225 1.225 0 0 0 1.226-1.226A1.281 1.281 0 0 0 11.739.5z" 
                                className="cls-2" 
                                transform="translate(-2.9 -.5)" />
                        </g>
                        <g transform="translate(19 28)">
                            <path
                                fill={props.color || "var(--navy0)"}
                                d="M11.935 11.935H0V0h1.29v10.645h10.645z" 
                                className="cls-2" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default DetailedReport;