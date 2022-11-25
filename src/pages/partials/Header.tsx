import React from "react";
import { graphql } from "gatsby";
import NavBar from "../../components/NavBar";
import heroImg from '../../images/hero.png';
import useHeroBanner from '../../hooks/use-hero-banner';
import { IHomeData } from "../../interface/IHomeData";
const Page = ({data}:any) => {
    const banner = useHeroBanner()[0] as IHomeData;
    console.log(banner);
    return (
        <section className="header">
            <div style={{ maxWidth: '1440px', margin: 'auto' }}>
                <NavBar />
                <div className="banner">
                    <h1 className="banner-title">
                        {banner.homeTitle}
                    </h1>
                    <span className="banner-description">
                        {banner.homeDescription.homeDescription}
                    </span>
                    <div className="banner-button">
                        <button
                            className="orangeBackground"
                        // onMouseEnter={(event)=>handleEffectHoverButton(event.nativeEvent)}
                        >{banner.heroBannerButton}</button>
                    </div>
                </div>
            </div>
            <div className="banner-background">
                {/* <BackgroundBanner /> */}
                <img src={banner.heroBanner.url} height={banner.heroBanner.height}  alt={banner.heroBanner.title} />
            </div>
        </section>
    )
}
export const query = graphql`
  query {
    allContentfulHome {
      totalCount
      nodes {
        heroBanner {
          url
          size
          id
          height
          width
        }
        heroBannerButton
        homeDescription {
          homeDescription
        }
        homeTitle
        id
      }
    }
  }
`
export default Page;