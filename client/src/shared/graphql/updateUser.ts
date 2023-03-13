import { gql } from '@apollo/client';

import { UserType } from 'shared/lib/types';

export type UPDATE_USER_Type = {
  updateUser: Pick<UserType, 'id'>;
};

export const UPDATE_USER = gql`
  mutation updateUser($user: UpdateUserInput!) {
    updateUser(updateUser: $user) {
      id
    }
  }
`;
