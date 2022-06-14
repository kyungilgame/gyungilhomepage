/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      course
      name
      phone
      kakaoEmail
      email
      birth
      address
      detailedAddress
      survey1
      survey2
      survey3
      survey4
      survey5
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        course
        name
        phone
        kakaoEmail
        email
        birth
        address
        detailedAddress
        survey1
        survey2
        survey3
        survey4
        survey5
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
