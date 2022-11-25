import React from "react"
import NavBar from "./NavBar";
import heroImg from '../../images/hero.png';
const page = {
    banner: {
        title: 'Financial Advisor For Next Level Happy Life!',
        des: 'Are you looking for amazing financial advisor services? Don’t worry! We got it for you!'
    }
}
export default function index() {
    return (
        <section className="header">
            <div style={{ maxWidth: '1440px', margin: 'auto' }}>
                <NavBar />
                <div className="banner">
                    <h1 className="banner-title">
                        {page.banner.title}
                    </h1>
                    <span className="banner-description">
                        {page.banner.des}
                    </span>
                    <div className="banner-button">
                        <button
                            className="orangeBackground"
                        // onMouseEnter={(event)=>handleEffectHoverButton(event.nativeEvent)}
                        >Learn More</button>
                    </div>
                </div>
            </div>
            <div className="banner-background">
                {/* <BackgroundBanner /> */}
                <img src={heroImg} alt="hero background" />
            </div>
        </section>
    )
}