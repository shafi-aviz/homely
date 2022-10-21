import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../components/Logo';
import ProductCard, { Property } from '../components/ProductCard';
import sql from '../db/connection';
import {
  BaseBox,
  EndorserIconContainer,
  GrayBody1Text,
  HowItWorksIconsBox,
  PrimaryButton,
  SkyBlueLink,
  SubHeading1,
} from '../components/styled';
import {
  getRunningOperationPromises,
  getProperties,
  useGetPropertiesQuery,
} from '../store/productAPI';
import wrapper from '../store/store';
import Wrapper from '../store/store';
import {
  endorserIcons,
  featuredProperties,
  footerItems,
  howItWorksIcons,
  tabs,
} from '../util/index.mockData';
import { bgColor, skyBlueColor } from '../util/theme';
import { TextAndLink } from '../util/util';

const Home: NextPage = (props) => {
  //

  console.log({ props });
  // const { isLoading, error, data } = useGetUsersQuery({});

  // if (!isLoading) console.log(data);

  const BoldTextWithSubHeading: React.FC<{
    title: string;
    subtitle: string;
  }> = ({ title, subtitle }) => {
    return (
      <Box>
        <Typography fontSize="66px" fontWeight={700}>
          {title}
        </Typography>
        <GrayBody1Text marginTop={-1} fontWeight={500}>
          {subtitle}
        </GrayBody1Text>
      </Box>
    );
  };

  const FooterElement: React.FC<{
    heading: string;
    items: TextAndLink[];
  }> = ({ heading, items }) => {
    return (
      <Box>
        <Typography marginBottom={3} variant="h6" fontWeight={700}>
          {heading}
        </Typography>
        <Box display="flex" flexDirection="column" gap={1.5}>
          {items.map((item) => (
            <Typography variant="body1" fontWeight={500}>
              {item.text}
            </Typography>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box bgcolor={bgColor} minHeight="100vh">
        <BaseBox>
          <Box
            display="flex"
            height="450px"
            alignItems="stretch"
            justifyContent="space-between"
            // paddingTop={3}
          >
            <Box
              width="60%"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              gap={3}
            >
              <GrayBody1Text marginBottom={-3.5}>
                Welcome to Homely Agency
              </GrayBody1Text>
              <Typography
                variant="h2"
                fontSize="78px"
                fontWeight={700}
              >
                Discover a Place <br />
                you'll love to live
              </Typography>
              <GrayBody1Text>
                Get the best real-estate deals first, before they hit
                the mass market hot foreclosure deals with one simple
                search
              </GrayBody1Text>
              <PrimaryButton
                variant="contained"
                sx={{ alignSelf: 'start' }}
              >
                More About Us
              </PrimaryButton>
            </Box>
            <Box width="40%" height="100%">
              <img src="/LandImage.svg" width="auto" height="100%" />
            </Box>
          </Box>
        </BaseBox>
      </Box>
      <Box>
        <BaseBox marginTop={12}>
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" flexDirection="column">
                <Logo />
                <GrayBody1Text>
                  More than 50,000 Companies trust Homely
                </GrayBody1Text>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="end"
              >
                <Rating value={5} max={5} />
                <GrayBody1Text>
                  5 star ratings (2k + reviews)
                </GrayBody1Text>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop={5}
            sx={{ opacity: 0.6 }}
          >
            {endorserIcons.map((icon) => (
              <EndorserIconContainer>
                <img src={icon} width="120px" />
              </EndorserIconContainer>
            ))}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginTop={6}
          >
            <Typography
              marginBottom={-2.75}
              variant="h2"
              fontWeight={700}
            >
              —
            </Typography>
            <SubHeading1>How it works?</SubHeading1>
            <GrayBody1Text>
              Everything you need to know when you're looking to buy,
            </GrayBody1Text>
            <GrayBody1Text>
              rent, or sell - all in one place
            </GrayBody1Text>
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <HowItWorksIconsBox>
              {howItWorksIcons.map((icon) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <img src={icon.icon} />
                  <Typography
                    variant="h5"
                    fontSize={'24px'}
                    fontWeight={700}
                    letterSpacing={1.2}
                    color={grey[800]}
                  >
                    {icon.heading1}
                  </Typography>
                  <Typography
                    variant="h6"
                    color={skyBlueColor}
                    fontSize="18px"
                    textAlign="center"
                  >
                    {icon.heading2} →
                  </Typography>
                </Box>
              ))}
            </HowItWorksIconsBox>
            <PrimaryButton
              sx={{ alignSelf: 'center' }}
              variant="contained"
            >
              See Full Guidelines
            </PrimaryButton>
          </Box>
        </BaseBox>
      </Box>
      <Box
        marginTop={12}
        paddingTop={12}
        component="section"
        // height="500px"
        bgcolor={bgColor}
        paddingBottom={12}
      >
        <BaseBox>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="end"
            marginBottom={6}
          >
            <Box>
              <SubHeading1>Featured Properties</SubHeading1>
              <GrayBody1Text>
                Everything you need to know when you are looking
              </GrayBody1Text>
            </Box>
            <SkyBlueLink>View All Properties →</SkyBlueLink>
          </Box>
          <Grid container spacing={3}>
            {featuredProperties.map((property) => (
              <Grid item xs={4}>
                <ProductCard property={property} />
              </Grid>
            ))}
          </Grid>
          <Box
            display="flex"
            justifyContent={'space-between'}
            marginTop={10}
            paddingX={8}
          >
            <BoldTextWithSubHeading
              title="2,500+"
              subtitle="Homes for sale"
            />
            <BoldTextWithSubHeading
              title="5,000+"
              subtitle="Homes Sold so far"
            />
            <BoldTextWithSubHeading
              title="170+"
              subtitle="Prices reduced"
            />
          </Box>
        </BaseBox>
      </Box>
      <Box bgcolor={grey[300]} paddingY={3}>
        <BaseBox
          display="flex"
          justifyContent="space-between"
          gap={15}
          color={grey[700]}
        >
          {footerItems.map((item) => (
            <FooterElement heading={item.header} items={item.items} />
          ))}

          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
              color="primary"
              marginBottom={3}
            >
              Developed By
            </Typography>
            {[
              'Mohammed Shafiuddin',
              'mohammedshafiuddin54@gmail.com',
              '+91 9676651496',
            ].map((item) => (
              <Typography
                marginBottom={1.5}
                variant="body1"
                fontWeight={700}
                color="primary"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </BaseBox>
      </Box>
    </>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    store.dispatch(getProperties.initiate(null));

    await Promise.all(getRunningOperationPromises());
    return { props: { data: 'From SSR' } };
  }
);
