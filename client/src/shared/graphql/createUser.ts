import { gql } from '@apollo/client';

import { UserType } from 'shared/lib/types';

export type CREATE_USER_Type = {
  createUser: Pick<UserType, 'id'>;
};

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(createUser: $user) {
      id
    }
  }
`;
