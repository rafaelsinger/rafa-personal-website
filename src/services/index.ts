import { request, gql } from 'graphql-request';

const graphqlAPI:any  = process.env.REACT_APP_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            name
                            id
                        }
                        slug
                        title
                        createdAt
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getReviewDetails = async (slug: string) => {
    const query = gql`
        query GetReviewDetails($slug: String!){
            post(where: { slug: $slug }){
                author {
                    name
                    id
                }
                slug
                title
                createdAt
                excerpt
                featuredImage {
                    url
                }
                content {
                    raw
                }
                rating
                categories {
                    name
                    slug
                }                
            }
        }
    `

const result = await request(graphqlAPI, query, { slug });

return result.post;
}