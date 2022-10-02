import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { color } from '@mui/system';
import { skyBlueColor } from '../util/theme';

export const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
}));

export const BaseBox = styled(Box)<{ background?: string }>(
  ({ background, theme }) => ({
    padding: `0 ${theme.spacing(7)}`,

    ...(background && { backgroundColor: background }),
  })
);

export const NavLink = styled('a')<{ isActive?: boolean }>(
  ({ isActive = false, theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    color: grey[800],
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
    borderRadius: '9px',

    ...(isActive && {
      backgroundColor: theme.palette.primary.main,
      ['& p']: { color: '#fff' },
    }),
  })
);

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2.75)}`,
  borderRadius: '7px',
  textTransform: 'none',
}));

export const GrayBody1Text = styled(Typography)<{
  fontSize?: string;
  color?: string;
}>(({ color = grey[600], fontSize, theme }) => ({
  color: color,
  fontSize: '18px',
  fontWeight: 500,
}));

export const EndorserIconContainer = styled(Box)(({ theme }) => ({
  ['& img']: {
    filter: 'grayscale(70)',
  },
}));

export const HowItWorksIconsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: theme.spacing(8.5),
  alignItems: 'end',
  padding: `0 ${theme.spacing(20)}`,
  justifyContent: 'space-between',
  ['& img']: {
    width: '120px',
  },
}));

export const SubHeading1 = styled(Heading)(({ theme }) => ({
  marginBottom: 3,
  // fontWeight: 700,
  // color: theme.palette.text.primary,
  fontSize: '42px',
}));

export const SubHeading2 = styled(Heading)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 500,
}));

export const SubHeading3 = styled(Heading)(({ theme }) => ({
  fontSize: '20px',
}));

export const SkyBlueLink = styled(Typography)(({ theme }) => ({
  color: skyBlueColor,
  fontSize: '20px',
  fontWeight: 700,
}));

export const InputField = styled(TextField)(({ theme }) => ({
  '& input': {
    fontSize: '14px',
  },
}));
