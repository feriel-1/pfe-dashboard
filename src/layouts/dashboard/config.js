import CogIcon from '@heroicons/react/24/solid/CogIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';

import { SvgIcon } from '@mui/material';
import {FaServer } from 'react-icons/fa';
export const items = [
 {
    title: 'Server Room',
    path: '/ServerRoom',
    icon: (
     <SvgIcon fontSize="small">
        <FaServer />
      </SvgIcon>
    )
  },
,
 
 
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
 // {
   // title: 'Users',
   // path: '/Users',
    //icon: (
    // <SvgIcon fontSize="small">
      //  <UsersIcon />
     // </SvgIcon>
   // )
 // },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },

  {
    title: 'Register',
    path: '/auth/register',
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    )
  },
];
