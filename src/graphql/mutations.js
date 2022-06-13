/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      course
      name
      phone
      kakaoEmail
      email
      birth
      address
      detailedAddress
      surveyData1
      surveyData2
      surveyData3
      surveyData4
      surveyData5
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      course
      name
      phone
      kakaoEmail
      email
      birth
      address
      detailedAddress
      surveyData1
      surveyData2
      surveyData3
      surveyData4
      surveyData5
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      course
      name
      phone
      kakaoEmail
      email
      birth
      address
      detailedAddress
      surveyData1
      surveyData2
      surveyData3
      surveyData4
      surveyData5
      createdAt
      updatedAt
    }
  }
`;
