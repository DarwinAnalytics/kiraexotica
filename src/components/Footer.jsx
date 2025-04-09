import React from 'react';
import { Grid, Typography, Box, Link } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box component="footer" py={4} bgcolor="black" color="white">
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Kira Exotica Hair & Beauty Salon.
          </Typography>
        </Grid>
        <Grid item>
          <Box display="flex" gap={2}>
            <Link href="#" color="inherit" onClick={() => handleNavigation('/facebook')}>
              <Facebook />
            </Link>
            <Link href="#" color="inherit" onClick={() => handleNavigation('/instagram')}>
              <Instagram />
            </Link>
            <Link href="#" color="inherit" onClick={() => handleNavigation('/youtube')}>
              <YouTube />
            </Link>
            <Link href="#" color="inherit" onClick={() => handleNavigation('/linkedin')}>
              <LinkedIn />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;