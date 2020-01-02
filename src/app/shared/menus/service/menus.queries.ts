import gql from 'graphql-tag';

export const data = gql`{

    menusData:getFirstDtbCategoryByCategoryName(categoryName: "menu") {
        menusGroup:ModelChildrenDtbCategory {
            edges {
                node {
                    groupName:categoryName
                    groupItems:ModelChildrenDtbCategory {
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


