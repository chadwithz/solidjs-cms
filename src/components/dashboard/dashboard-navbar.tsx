import type {Component} from "solid-js";
import Box from "@suid/material/Box";
import Button from "@suid/material/Button";
import Divider from "@suid/material/Divider";
import Drawer from "@suid/material/Drawer";
import Typography from "@suid/material/Typography";
import OpenInNewIcon from '@mui/icons-material/OpenInNewIcon';

// import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
// import { Cog as CogIcon } from '../icons/cog';
// import { Lock as LockIcon } from '../icons/lock';
// import { Selector as SelectorIcon } from '../icons/selector';
// import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
// import { User as UserIcon } from '../icons/user';
// import { UserAdd as UserAddIcon } from '../icons/user-add';
// import { Users as UsersIcon } from '../icons/users';
// import { XCircle as XCircleIcon } from '../icons/x-circle';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

const DashboardNavbar:Component = ({content}) => {
  return <Drawer
      anchor="left"
      onClose={null}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
    sx={{ zIndex: (theme:any) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
};

export default DashboardNavbar;
