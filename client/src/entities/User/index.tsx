import { useLazyQuery, useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Button } from 'shared/Button';
import { GET_ONE_USER, GET_ONE_USER_Type } from 'shared/graphql/getOneUser';
import { GET_ALL_USERS } from 'shared/graphql/getAllUsers';
import { REMOVE_USER, REMOVE_USER_Type } from 'shared/graphql/deleteUser';
import { UserForm } from 'entities/UserForm';
import { UPDATE_USER, UPDATE_USER_Type } from 'shared/graphql/updateUser';

export const User = () => {
  const params = useParams();
  const naviate = useNavigate();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const [getUser, { data: user }] =
    useLazyQuery<GET_ONE_USER_Type>(GET_ONE_USER);
  const [removeUser] = useMutation<REMOVE_USER_Type>(REMOVE_USER, {
    refetchQueries: () => [{ query: GET_ALL_USERS }],
  });
  const [updateUser] = useMutation<UPDATE_USER_Type>(UPDATE_USER, {
    refetchQueries: () => [
      {
        query: GET_ALL_USERS,
      },
    ],
  });

  useEffect(() => {
    if (params.id) {
      getUser({ variables: { id: +params.id } });
    }
  }, [getUser, params.id]);

  const { email, name, createdAt, updatedAt, id } = user?.getOneUser || {};

  const handleRemoveUser = (userId: string) => {
    if (window.confirm(`Delete the ${name ?? 'User'}`)) {
      removeUser({ variables: { id: +userId } }).then(() => naviate('/users'));
    }
  };

  const handleEditUser = (updatedEmail?: string, updatedName?: string) => {
    updateUser({
      variables: {
        user: {
          id,
          email: updatedEmail,
          name: updatedName,
        },
      },
    }).then(() => toggleEditing);
  };

  const formatDate = (date?: string) => {
    return (
      date &&
      `${new Date(date).toLocaleDateString().replaceAll('/', '.')} ${new Date(
        date
      ).toLocaleTimeString()}`
    );
  };

  return params.id && user ? (
    <div className="w-1/2 rounded border p-4 m-auto">
      <h5 className="text-md">{name}</h5>
      <div className="text-sm">email: {email}</div>
      <div className="my-2 bg-blue-200 p-2 rounded">
        <div className="text-sm">createdAt: {formatDate(createdAt)}</div>
        <div className="text-sm">updatedAt: {formatDate(updatedAt)}</div>
      </div>
      <div className="flex justify-between gap-5 pt-5">
        <Button
          title="Edit"
          onClick={toggleEditing}
          classname="border border-blue-500 text-blue-500 w-full"
        />
        <Button
          title="Delete"
          onClick={() => handleRemoveUser(id!)}
          classname="border border-red-500 text-red-500 w-full"
        />
      </div>

      {isEditing && (
        <UserForm
          title="Edit"
          onClick={handleEditUser}
          currentName={name}
          currentEmail={email}
        />
      )}
    </div>
  ) : null;
};
