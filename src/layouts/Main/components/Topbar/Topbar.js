import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box component={'img'} src="/proximarxpng.png" height={1} width={1} />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={'home'}
            sx={{ cursor: 'pointer' }}
          >
            <Button component={'a'} href="/" fullWidth>
              <Typography fontWeight={400} color="text.primary">
                Home
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box marginLeft={4}>
          {/* <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={'about'}
            sx={{ cursor: 'pointer' }}
          >
            <Button component={'a'} href="/about-side-cover" fullWidth>
              <Typography fontWeight={400} color="text.primary">
                About
              </Typography>
            </Button>
          </Box> */}
          {/* <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          /> */}
        </Box>
        <Box marginLeft={4}>
          <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={'faq'}
            sx={{ cursor: 'pointer' }}
          >
            <Button component={'a'} href="/faq" fullWidth>
              <Typography fontWeight={400} color="text.primary">
                Services
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box marginLeft={4}>
          <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={'contact-us'}
            sx={{ cursor: 'pointer' }}
          >
            <Button component={'a'} href="/contact-sidebar-map" fullWidth>
              <Typography fontWeight={400} color="text.primary">
                Contact Us
              </Typography>
            </Button>
          </Box>
          {/* <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          /> */}
        </Box>
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <Button
            variant="outlined"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            En Español
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
