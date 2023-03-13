import { gql } from '@apollo/client';

import { UserType } from 'shared/lib/types';

export type GET_ONE_USER_Type = {
  getOneUser: UserType;
};

export const GET_ONE_USER = gql`
  query getOneUser($id: Float!) {
    getOneUser(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;
