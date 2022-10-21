import { Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';
import { NextPage } from 'next';
import * as React from 'react';
import { useFormik } from 'formik';
import {
  BaseBox,
  GrayBody1Text,
  InputField,
  PrimaryButton,
  SubHeading1,
  SubHeading3,
} from '../components/styled';
import { bgColor } from '../util/theme';
import { useAppDispatch } from '../store/store';
import { addProperty } from '../store/productAPI';

type PropertyField =
  | 'cost'
  | 'beds'
  | 'rooms'
  | 'area'
  | 'owner'
  | 'address'
  | 'country'
  | 'pin'
  | 'id';

type PropertyDetail = {
  title: string;
  field: PropertyField;
};

const Sell: NextPage = () => {
  const dispatch = useAppDispatch();

  const FormEntry: React.FC<{
    title: string;
    field: string;
    value: string | number;
    handleChange: (
      event: React.ChangeEvent<HTMLInputElement>
    ) => void;
  }> = ({ title, value, handleChange, field }) => {
    return (
      <>
        <Grid item xs={3.5}>
          <GrayBody1Text color="primary">{title}</GrayBody1Text>
        </Grid>
        <Grid item xs={8.5}>
          <InputField
            value={value}
            onChange={handleChange}
            name={field}
            size="small"
          />
        </Grid>
      </>
    );
  };

  const fileUploadRef = React.useRef({} as HTMLInputElement);

  const name = (title: string) => title;

  const formik = useFormik({
    initialValues: {
      cost: 0,
      beds: 0,
      area: 0,
      owner: '',
      rooms: '',
      country: '',
      pin: '',
      id: '',
      address: '',
    },
    onSubmit: (values) => {
      console.log({ ...values });
      dispatch(addProperty.initiate(values));
    },
  });

  const propertyDetails: PropertyDetail[] = [
    { field: 'cost', title: 'Cost' },
    { field: 'beds', title: 'Beds' },
    { field: 'rooms', title: 'Rooms' },
    { field: 'area', title: 'Area' },
    { field: 'owner', title: 'Owner' },
    { field: 'address', title: 'Address' },
    { field: 'pin', title: 'Pin' },
  ];

  return (
    <BaseBox background={bgColor}>
      <SubHeading1>Sell Property</SubHeading1>
      <Grid container>
        <Grid item xs={11}>
          <Box
            bgcolor={grey[300]}
            minWidth={16 * 25}
            minHeight={9 * 25}
          >
            Upload Picture
          </Box>
        </Grid>
        <Grid item xs={1}>
          <PrimaryButton
            onClick={() => fileUploadRef.current.click()}
            variant="contained"
          >
            Upload Picture
          </PrimaryButton>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Box display="none">
              <input
                type="file"
                accept=".jpeg, .jpg, .png, .webp"
                style={{ display: 'none' }}
                ref={fileUploadRef}
              />
            </Box>
            <Grid container rowSpacing={2}>
              {propertyDetails.map((detail) => (
                <FormEntry
                  title={detail.title}
                  value={formik.values[detail.field]}
                  handleChange={formik.handleChange}
                  field={detail.field}
                />
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <PrimaryButton
            variant="contained"
            onClick={() => formik.handleSubmit()}
          >
            Submit Details
          </PrimaryButton>
        </Grid>
      </Grid>
    </BaseBox>
  );
};

export default Sell;
