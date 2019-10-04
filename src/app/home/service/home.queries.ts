import gql from 'graphql-tag';

export const homeData = gql`{
    getAllDtbCategoryByCategoryName(categoryName: "menu") {

        ModelChildrenDtbCategory {
            edges {
                node {
                    categoryName
                    ModelChildrenDtbCategory {
                        edges {
                            node {
                                id
                                categoryName

                            }
                        }
                    }
                }
            }
        }
    }
}

`;


