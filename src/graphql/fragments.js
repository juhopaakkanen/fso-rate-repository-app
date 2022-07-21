import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
  }
`;

export const REVIEW_DETAILS = gql`
  fragment ReviewDetails on Review {
    id
    text
    rating
    createdAt
    repository {
      fullName
    }
    user {
      id
      username
    }
  }
`;

export const PAGE_INFO = gql`
  fragment PageInfo on PageInfo {
    endCursor
    startCursor
    hasNextPage
  }
`;
