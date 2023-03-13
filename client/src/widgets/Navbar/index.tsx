import { NavLink } from 'react-router-dom';

import { IMenu } from './libs/consts';

export const Navbar = () => (
  <ul className="nav mb-3 flex">
    {IMenu.map((it) => {
      return (
        <li className="" key={it.id}>
          <NavLink to={it.href}>
            {({ isActive }) => (
              <p
                className={`${
                  isActive ? 'text-white bg-blue-400' : 'text-gray-500'
                } text-md px-6 py-2 uppercase rounded`}
              >
                {it.title}
              </p>
            )}
          </NavLink>
        </li>
      );
    })}
  </ul>
);
