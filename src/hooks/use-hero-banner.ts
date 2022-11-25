import { graphql, useStaticQuery } from 'gatsby';

const useHeroBanner = () => {
    const {
        allContentfulHome: { nodes }
    } = useStaticQuery(graphql`
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
          description
          title
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
  `);
    return nodes;
};

export default useHeroBanner;