import React from "react"
export default function index({darkTheme}:any) {
    return (
        <div className={darkTheme?"logo logo-dark":"logo"}>
            <div className="logo-avatar">
                <div className="logo-avatar__circle">
                    k
                </div>
            </div>
            <div className="logo-label">
                Kinka Finance
            </div>
        </div>
    )
}