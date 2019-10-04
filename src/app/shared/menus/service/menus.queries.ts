import gql from 'graphql-tag';

export const data = gql`{
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


