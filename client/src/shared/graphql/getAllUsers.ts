import { gql } from '@apollo/client';

import { UserType } from 'shared/lib/types';

export type GET_ALL_USERS_Type = {
  getAllUsers: Pick<UserType, 'id' | 'name'>[];
};

export const GET_ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      name
    }
  }
`;
