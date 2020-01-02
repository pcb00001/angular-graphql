import gql from 'graphql-tag';

export const allProductsByCategoryId = gql`
query getAllDtbProductByCategoryIdAndTagIds ($categoryId:Int)
{
  productList: getAllDtbProductByCategoryId(categoryId: $categoryId) {
      id
      name
      dtbProductClassList {
        edges {
          node {
            id
            price01
            price02
          }
        }
      }
      dtbProductImageList {
        edges {
          node {
            id
            fileName
          }
        }
      }
      dtbProductTagList {
          edges {
            node {
              id
              ModelDtbTag{
                name
                id
              }
            }
      }
    }
  }
}
`;



