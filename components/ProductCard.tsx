import { Box, Icon, SvgIconTypeMap, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useEffect } from 'react';
import { GrayBody1Text } from './styled';
import {
  CropFreeOutlined,
  BedOutlined,
  FamilyRestroom,
} from '@mui/icons-material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { skyBlueColor } from '../util/theme';
import { trimString } from '../util/util';
import screenWidthUtil from '../hooks/screenWidhtUtil';

export type Property = {
  image: string;
  cost: number;
  address: string;
  beds: number;
  rooms: number;
  area: number;
};

const ProductCard: React.FC<{
  property: Property;
}> = ({ property: { image, cost, address, beds, rooms, area } }) => {
  //
  //

  const IconAndMetric: React.FC<{
    Icon: OverridableComponent<SvgIconTypeMap>;
    text: string;
  }> = ({ Icon, text }) => (
    <Box
      color={skyBlueColor}
      display="flex"
      gap={0.75}
      alignItems="center"
    >
      <Icon color={'inherit'} />
      <Typography variant="body2" color={grey[600]} fontWeight={500}>
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box width="100%" bgcolor="#fff" borderRadius="9px">
      <Box width="100%">
        <img
          width="100%"
          src={image}
          style={{
            borderTopLeftRadius: '9px',
            borderTopRightRadius: '9px',
          }}
        />
      </Box>
      <Box paddingX={2.5} paddingY={1.5}>
        <Typography fontSize={24} fontWeight={700} color="primary">
          ₹{cost}
        </Typography>
        <Typography
          variant="body2"
          fontWeight={500}
          color={grey[500]}
        >
          {trimString(address, 35)}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          marginTop={2}
        >
          <IconAndMetric Icon={BedOutlined} text={`${beds} beds`} />
          <IconAndMetric
            Icon={FamilyRestroom}
            text={`${rooms} rooms`}
          />
          <IconAndMetric
            Icon={CropFreeOutlined}
            text={`${area} sq.ft`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
