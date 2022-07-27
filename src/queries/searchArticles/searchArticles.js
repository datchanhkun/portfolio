import { gql } from "@apollo/client";

const SEARCH_ARTICLES = gql`
  query Article($keyword: String) {
    articles(filters: { title: { contains: $keyword }}) {
      data {
        attributes {
          slug
          title
          description
          content
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
        }
      }
    }
  }
`;

export default SEARCH_ARTICLES;