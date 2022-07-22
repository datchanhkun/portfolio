import { gql } from "@apollo/client";

const FILTER_ARTICLE_BY_CATE_QUERY = gql`
  query ArticlesByCategory($category: String) {
    articles(filters:{categories:{name: {contains: $category}}}) {
      data {
        attributes {
          slug
          title
          updatedAt
          description
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

export default FILTER_ARTICLE_BY_CATE_QUERY;