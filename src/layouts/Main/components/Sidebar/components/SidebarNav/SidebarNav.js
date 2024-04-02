import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SidebarNav = () => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box component={'img'} src="/proximarxpng.png" height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={1}>
        <Box aria-describedby={'home'} sx={{ cursor: 'pointer' }}>
          <Button component={'a'} href="/" fullWidth>
            <Typography fontWeight={400} color="text.primary">
              Home
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* <Box paddingX={2} paddingY={1}>
        <Box aria-describedby={'about'} sx={{ cursor: 'pointer' }}>
          <Button component={'a'} href="/about-side-cover" fullWidth>
            <Typography fontWeight={400} color="text.primary">
              About
            </Typography>
          </Button>
        </Box>
      </Box> */}
      <Box paddingX={2} paddingY={1}>
        <Box aria-describedby={'faq'} sx={{ cursor: 'pointer' }}>
          <Button component={'a'} href="/faq" fullWidth>
            <Typography fontWeight={400} color="text.primary">
              Services
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box paddingX={2} paddingY={1}>
        <Box aria-describedby={'contact-us'} sx={{ cursor: 'pointer' }}>
          <Button component={'a'} href="/contact-sidebar-map" fullWidth>
            <Typography fontWeight={400} color="text.primary">
              Contact Us
            </Typography>
          </Button>
        </Box>
      </Box>
      {/* <Box marginTop={2}>
        <Button
          size={'large'}
          variant="outlined"
          fullWidth
          component="a"
          href="https://thefront.maccarianagency.com/docs/introduction"
          target={'blank'}
        >
          En Español
        </Button>
      </Box> */}
      {/* <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box>
        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="https://thefront.maccarianagency.com/docs/introduction"
            target={'blank'}
          >
            En Español
          </Button>
        </Box>
      </Box> */}
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
