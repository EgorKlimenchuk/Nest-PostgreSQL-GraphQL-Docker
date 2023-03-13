import { useQuery } from '@apollo/client';
import { NavLink } from 'react-router-dom';

import { GET_ALL_USERS, GET_ALL_USERS_Type } from 'shared/graphql/getAllUsers';

export const UserList = () => {
  const { data: users } = useQuery<GET_ALL_USERS_Type>(GET_ALL_USERS);

  return (
    <div className="w-full mt-8 text-left flex flex-col gap-2">
      {users?.getAllUsers.map((user) => {
        return (
          <NavLink to={`/users/${user.id}`} key={user.id}>
            <div className="border py-1 px-2 rounded hover:bg-slate-200">
              {user.name}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
