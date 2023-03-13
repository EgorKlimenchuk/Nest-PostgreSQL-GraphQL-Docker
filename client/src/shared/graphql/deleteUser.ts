import { gql } from '@apollo/client';

export type REMOVE_USER_Type = {
  removeUser: number;
};

export const REMOVE_USER = gql`
  mutation removeUser($id: Float!) {
    removeUser(id: $id)
  }
`;
