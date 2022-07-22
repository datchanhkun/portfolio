import { gql } from "@apollo/client";

const ARTICLE_DETAIL_QUERY = gql`
  query Article($slug: String) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          content
          createdAt
          updatedAt
          categories {
            data {
              attributes {
                slug
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
          author {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLE_DETAIL_QUERY;