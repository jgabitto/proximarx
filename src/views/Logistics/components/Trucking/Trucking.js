/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

const mock = [
  {
    title: 'Reliability',
    subtitle:
      'Compared to chain pharmacies, independents are less likely to make miscalculations, mix up prescriptions, or wrongly file patient information. Patients can be assured that they have access to closely monitored, thoroughly reviewed care',
    icon: <HandshakeIcon />,
  },
  {
    title: 'Individualized Care',
    subtitle:
      'Our relationship with each patient is a priority. Whereas only 14% of patients reported that pharmacists at chain drugstores know them by name, as members of our community, our team knows every patient’s name and unique health journey.',
    icon: <VolunteerActivismIcon />,
  },
  {
    title: 'Patient Education',
    subtitle:
      'Independents have the time and resources to teach patients how to properly use medications, help patients navigate their illness, and work with patients to create a plan to reach patient health goals.',
    icon: (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        height={24}
        width={24}
        viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M3823 4770 c-345 -62 -568 -401 -484 -732 20 -77 58 -163 92 -207
l19 -24 -63 -36 c-34 -19 -101 -74 -148 -121 -69 -69 -94 -103 -131 -176 -25
-50 -51 -114 -59 -142 l-13 -52 -318 0 c-175 0 -318 -1 -318 -2 0 -2 16 -127
35 -278 19 -151 35 -285 35 -297 l0 -23 -184 0 -184 0 -5 258 c-5 283 -11 319
-73 449 -64 134 -195 272 -316 334 l-37 19 29 44 c91 134 121 310 81 468 -70
275 -301 457 -579 458 -380 1 -667 -351 -588 -720 17 -77 46 -147 85 -206 l29
-42 -66 -39 c-217 -126 -362 -386 -362 -648 l0 -75 -150 0 -150 0 0 -1320 0
-1320 150 0 150 0 0 420 0 420 450 0 450 0 0 -420 0 -420 150 0 150 0 0 420 0
420 300 0 300 0 0 -420 0 -420 1510 0 1510 0 0 1170 0 1170 -149 0 -149 0 -4
288 c-5 326 -9 347 -85 502 -39 79 -60 109 -132 180 -47 47 -114 101 -148 121
l-63 36 19 24 c59 76 111 237 111 343 -1 259 -172 495 -414 572 -86 27 -207
37 -283 24z m224 -322 c60 -28 113 -81 144 -144 33 -68 34 -189 1 -251 -36
-68 -83 -114 -147 -145 -146 -69 -316 -10 -393 137 -37 70 -38 187 -3 259 41
84 115 144 206 167 47 13 140 1 192 -23z m-2722 -66 c64 -31 111 -77 147 -145
33 -61 32 -183 -1 -251 -32 -64 -82 -113 -150 -145 -145 -67 -319 -2 -392 145
-35 72 -34 189 3 259 77 147 247 206 393 137z m2845 -818 c124 -28 241 -117
296 -226 47 -93 54 -144 54 -410 l0 -248 -370 0 -370 0 -5 23 c-2 12 -18 137
-35 277 -17 140 -33 265 -35 278 -5 22 -7 22 -180 22 -96 0 -175 2 -175 5 0 3
12 29 26 57 53 104 187 204 304 227 81 16 413 13 490 -5z m-2691 -73 c113 -35
203 -107 264 -211 53 -90 57 -132 57 -532 l0 -368 300 0 300 0 0 -150 0 -150
-450 0 -450 0 0 450 0 450 -450 0 -450 0 0 68 c0 208 124 381 318 443 86 27
473 27 561 0z m1970 -598 c6 -49 14 -116 17 -150 l7 -63 -346 0 -347 0 -4 23
c-3 12 -10 63 -16 112 -6 50 -13 107 -16 128 l-6 37 350 0 349 0 12 -87z
m-2249 -813 l0 -600 -450 0 -450 0 0 600 0 600 450 0 450 0 0 -600z m3620
-570 l0 -870 -910 0 -910 0 0 360 0 360 150 0 150 0 0 -150 0 -150 150 0 150
0 0 150 0 150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 150 0 150 -150 0 -150
0 0 -150 0 -150 -149 0 -150 0 -11 53 c-27 132 -117 252 -232 312 l-58 30 0
163 0 162 1060 0 1060 0 0 -870z m-2194 244 c15 -11 37 -33 48 -48 20 -27 21
-40 24 -547 l3 -519 -151 0 -150 0 0 420 0 420 -450 0 -450 0 0 150 0 150 549
-2 c537 -3 550 -3 577 -24z"
          />
        </g>
      </svg>
    ),
  },
];

const Trucking = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <List disablePadding>
      {mock.map((item, index) => (
        <ListItem
          key={index}
          disableGutters
          data-aos="fade-up"
          data-aos-delay={index * 300}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <ListItemAvatar>
            <Box
              component={Avatar}
              variant={'rounded'}
              color={theme.palette.primary.dark}
              bgcolor={`${theme.palette.primary.light}22`}
            >
              {item.icon}
            </Box>
          </ListItemAvatar>
          <ListItemText primary={item.title} secondary={item.subtitle} />
        </ListItem>
      ))}
    </List>
  );

  const RightSide = () => (
    <Box width={1}>
      <Box
        sx={{
          position: 'relative',
          marginX: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box>
            <Box
              position={'relative'}
              zIndex={2}
              maxWidth={1}
              height={'auto'}
              sx={{ verticalAlign: 'middle' }}
            >
              <LaptopSkeletonIllustration />
            </Box>
            <Box
              position={'absolute'}
              top={'8.4%'}
              left={'12%'}
              width={'76%'}
              height={'83%'}
              border={`1px solid ${theme.palette.alternate.dark}`}
              zIndex={3}
            >
              <Box
                component={'img'}
                loading="lazy"
                src="https://assets.maccarianagency.com/screenshots/dashboard.png"
                alt="Image Description"
                width={1}
                height={1}
                sx={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography variant="h4" align={'center'} sx={{ fontWeight: 700 }}>
            Why does “independent” make a difference?
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <LeftSide />
          </Box>
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trucking;
