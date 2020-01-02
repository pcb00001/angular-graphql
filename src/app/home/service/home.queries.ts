import gql from 'graphql-tag';

export const homeData = gql`{
  spMoi: getFirstDtbTagById(id: 1) {
    id
    name
    dtbProductTagList {
      edges {
        node {
          productItem: ModelDtbProduct {
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
          }
        }
      }
    }
  }
  spBanChay: getFirstDtbTagById(id: 11) {
    id
    name
    dtbProductTagList {
      edges {
        node {
          productItem: ModelDtbProduct {
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
          }
        }
      }
    }
  }
}
`;


