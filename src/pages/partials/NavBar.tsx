import React from "react"
import BrandLabel from "./BrandLabel";
export default function index(){
    return(
        <nav className="menu">
          <BrandLabel/>
          <div className="menu-list">
            <a className="menu-item" href="#mortgage_calculator">Calculator</a>
            <a className="menu-item" href="#service">Services</a>
          </div>
        </nav>
    )
}