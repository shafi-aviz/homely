import { East, West } from '@mui/icons-material';
import { Grid, Slider, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NextPage } from 'next';
import * as React from 'react';
import ProductCard from '../components/ProductCard';
import {
  BaseBox,
  InputField,
  SubHeading2,
  SubHeading3,
} from '../components/styled';
import screenWidthUtil from '../hooks/screenWidhtUtil';
import { mockProperties } from '../util/buy.mockData';
import { bgColor } from '../util/theme';

const Buy: NextPage = () => {
  // console.log('rendering buy page');
  const [priceRange, setPriceRange] = React.useState([0, 50000]);
  const handlePriceRangeChange =
    (index: number) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const priceRangeCopy = [...priceRange];
      priceRangeCopy[index] = +event.target.value;
      setPriceRange(priceRangeCopy);
    };

  return (
    <Box bgcolor={bgColor}>
      <BaseBox>
        <Grid container spacing={5}>
          <Grid item xs={2.5}>
            <SubHeading2>Filters</SubHeading2>
            <Box marginTop={3}>
              <SubHeading3>Price</SubHeading3>
              <Slider
                value={priceRange}
                onChange={(_, value) =>
                  setPriceRange(value as number[])
                }
                min={5000}
                max={50000}
                valueLabelDisplay={'auto'}
              />
              <Box display="flex" alignItems="center" gap={1.5}>
                <InputField
                  value={priceRange[0]}
                  onChange={handlePriceRangeChange(0)}
                  size="small"
                />
                <Box display="flex">
                  <West />
                  <East />
                </Box>
                <InputField
                  value={priceRange[1]}
                  onChange={handlePriceRangeChange(1)}
                  size="small"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9.5}>
            <Grid container spacing={3}>
              {mockProperties.map((property) => (
                <Grid item xs={4}>
                  <ProductCard property={property} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </BaseBox>
    </Box>
  );
};

export default Buy;
