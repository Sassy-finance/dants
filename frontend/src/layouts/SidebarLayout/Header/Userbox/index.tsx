import { useRef, useContext, useEffect } from 'react';
import { User } from "../../../../contexts"

import {
  Avatar,
  Box,
  Button,
  Hidden,
  lighten,
  Typography
} from '@mui/material';

import { styled } from '@mui/material/styles';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`
);

function HeaderUserbox() {
  const user = {
    name: 'Your Account',
    description: 'Connect Metamask'
  };

  const ref = useRef<any>(null);

  const { loginMetamask, isLogged, userWallet, getUserUploads } = useContext(User);

  useEffect(() => {
    if (!isLogged) return
    getUserUploads()
  }, [isLogged])


  return (


    <>
      <UserBoxButton color="secondary" ref={ref} onClick={loginMetamask}>
        <Avatar variant="rounded" alt={user.name} src={user.avatar} onClick={loginMetamask} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{user.name}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {isLogged ? userWallet : user.description}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
      </UserBoxButton>
    </>
  );
}

export default HeaderUserbox;
