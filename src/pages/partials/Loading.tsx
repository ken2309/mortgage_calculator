import React from "react";
import '../../styles/loading.css';

export default function index() {
    return (
        <div className="mainLoad">
            <svg width="200" height="200" viewBox="0 0 40 60">
                <polygon className="triangle" fill="none" stroke="#fff" stroke-width="1" points="16,1 32,32 1,32"/>
                <text className="loading" x="0" y="45" fill="#fff" >Loading...</text>
            </svg>
        </div>
    )
}