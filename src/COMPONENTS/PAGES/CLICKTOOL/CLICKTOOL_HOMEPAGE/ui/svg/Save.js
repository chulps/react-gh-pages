import React from 'react';

function Save (props) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M0 0h20v20H0z" className="cls-1" fill="none" />
            <g transform="translate(-4505 -349)">
                <g transform="translate(4509 353)">
                    <g>
                        <g>
                            <path 
                                fill={props.color || "var(--navy0)"}
                                d="M9.429 11.994V8.583H2.577V12c-.284 0-.556.006-.827-.006-.038 0-.082-.044-.114-.082L.082 10.358a.315.315 0 0 1-.076-.2Q0 5.719 0 1.276V.891A.856.856 0 0 1 .891 0h10.174A.863.863 0 0 1 12 .935v10.054a.911.911 0 0 1-.341.827.849.849 0 0 1-.423.171c-.6.019-1.2.007-1.807.007zM1.724.865v5.981h8.552V.865z" 
                                 />
                            
                            <path 
                                fill={props.color || "var(--navy0)"}
                                d="M5.44 14.93h1.7v2.552h-1.7z" 
                                transform="translate(-2.004 -5.501)" />
                            
                            <path 
                                fill={props.color || "var(--navy0)"}
                                d="M10.926 8.16V9H4.08v-.84z"                                  
                                transform="translate(-1.503 -3.006)" />
                            
                            <path 
                                fill={props.color || "var(--navy0)"}
                                d="M10.93 5.44v.84H4.09v-.84z" 
                                transform="translate(-1.507 -2.004)" />
                            
                            <path 
                                fill={props.color || "var(--navy0)"}
                                d="M10.93 2.73v.84H4.09v-.84z"
                                transform="translate(-1.507 -1.006)" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default Save;