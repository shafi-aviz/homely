import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import * as React from 'react';
import useCurrentRoute from '../hooks/useCurrentRoute';
import { tabs } from '../util/index.mockData';
import { bgColor } from '../util/theme';
import Logo from './Logo';
import {
  BaseBox,
  GrayBody1Text,
  NavLink,
  PrimaryButton,
} from './styled';

const Header = () => {
  const route = useCurrentRoute();

  return (
    <BaseBox background={bgColor}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="start"
        gap={8}
        paddingTop={1.5}
        paddingBottom={3}
        bgcolor={bgColor}
      >
        <Logo />

        <Box display="flex" gap={3} alignItems="end">
          {tabs.map((tab) => (
            <Link href={tab.href}>
              <NavLink isActive={route == tab.href}>
                <GrayBody1Text
                  color={grey[800]}
                  sx={{ cursor: 'pointer' }}
                >
                  {tab.name}
                </GrayBody1Text>
              </NavLink>
            </Link>
          ))}
        </Box>
        <Box marginLeft="auto" display="flex" gap={0}>
          <PrimaryButton>Login</PrimaryButton>
          <PrimaryButton variant="contained" size="small">
            Register
          </PrimaryButton>
        </Box>
      </Box>
    </BaseBox>
  );
};

export default Header;
