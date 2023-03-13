import { useMutation } from '@apollo/client';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { UserList } from 'entities/UserList';
import { Button } from 'shared/Button';
import { User } from 'entities/User';
import { UserForm } from 'entities/UserForm';
import { GET_ALL_USERS } from 'shared/graphql/getAllUsers';
import { CREATE_USER, CREATE_USER_Type } from 'shared/graphql/createUser';

export const Users = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [createUser] = useMutation<CREATE_USER_Type>(CREATE_USER, {
    refetchQueries: () => [{ query: GET_ALL_USERS }],
  });

  const handleCreateUser = (email: string, name: string) => {
    createUser({ variables: { user: { email, name } } }).then(({ data }) =>
      navigate(`/users/${data!.createUser.id}`)
    );
  };

  return (
    <div className="w-full text-lg px-6 py-2 h-full flex gap-10">
      <div className="w-2/5 border-r-2 pr-5">
        <NavLink to="/users/create">
          <Button title="Create User" classname="w-full border" />
        </NavLink>

        <UserList />
      </div>

      <div className="w-full">
        {pathname === '/users/create' ? (
          <UserForm title="Create" onClick={handleCreateUser} />
        ) : (
          <User />
        )}
      </div>
    </div>
  );
};
