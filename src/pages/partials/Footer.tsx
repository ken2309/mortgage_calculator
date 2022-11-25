import React from "react";
import {Link} from "gatsby";
import BrandLabel from "./BrandLabel";
import Fb from "../../images/icon-fb.svg"
import Twitter from "../../images/icon-twitter.svg"
import Insta from "../../images/icon-insta.svg"
export default function index() {
    return (
        <footer>
            <div className="companyInfo">
                <BrandLabel darkTheme={true} />
                <div className="companyInfo__description">
                    2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
                </div>
                <div className="network-logo">
                    <img src={Fb} alt='net work icon' />
                    <img src={Twitter} alt='net work icon' />
                    <img src={Insta} alt='net work icon' />
                </div>
            </div>
            <div className="footer-navigate">
                <div className="col">
                    <div className="col-title">
                        Location
                    </div>
                    <Link to="#" className="col-item">America</Link>
                    <Link to="#" className="col-item">Asia</Link>
                    <Link to="#" className="col-item">Europe</Link>
                    <Link to="#" className="col-item">Africa</Link>
                </div>
                <div className="col">
                    <div className="col-title">
                        Location
                    </div>
                    <Link to="#" className="col-item">America</Link>
                    <Link to="#" className="col-item">Asia</Link>
                    <Link to="#" className="col-item">Europe</Link>
                    <Link to="#" className="col-item">Africa</Link>
                </div>
                <div className="col">
                    <div className="col-title">
                        Location
                    </div>
                    <Link to="#" className="col-item">America</Link>
                    <Link to="#" className="col-item">Asia</Link>
                    <Link to="#" className="col-item">Europe</Link>
                    <Link to="#" className="col-item">Africa</Link>
                </div>
            </div>
        </footer>
    )
}