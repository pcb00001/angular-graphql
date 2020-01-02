import gql from 'graphql-tag';

export const productDetailPageData = gql`
query getFirstDtbProductById($id:Int)
{
    productDetail: getFirstDtbProductById(id: $id) {
        id
        name
        descriptionList
        descriptionDetail
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
  }
}
`;


