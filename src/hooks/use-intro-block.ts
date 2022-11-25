import { graphql, useStaticQuery } from "gatsby";

const useIntroBlock = () => {
  const {
    allContentfulIntroBlock: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulIntroBlock {
        nodes {
          title
          icon {
            url
            width
            height
          }
          description {
            description
          }
        }
        pageInfo {
          perPage
          totalCount
        }
      }
    }
  `);
  return nodes;
};

export default useIntroBlock;
