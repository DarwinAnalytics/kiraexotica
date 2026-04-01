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
      <Grid container justifyContent="space-between" alignItems="center" px={3}>
        {/* Left: Copyright */}
        <Grid item>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Kira Exotica Hair & Beauty Salon.
          </Typography>
        </Grid>

        {/* Center: Policy Links */}
        <Grid item>
          <Box display="flex" gap={3}>
            <Link
              component="button"
              variant="body2"
              color="inherit"
              underline="hover"
              onClick={() => handleNavigation('/privacy-policy')}
              sx={{ cursor: 'pointer', fontSize: '0.75rem', color: '#aaa', '&:hover': { color: '#fff' } }}
            >
              Privacy Policy
            </Link>
            <Link
              component="button"
              variant="body2"
              color="inherit"
              underline="hover"
              onClick={() => handleNavigation('/refund-policy')}
              sx={{ cursor: 'pointer', fontSize: '0.75rem', color: '#aaa', '&:hover': { color: '#fff' } }}
            >
              Refund Policy
            </Link>
            <Link
              component="button"
              variant="body2"
              color="inherit"
              underline="hover"
              onClick={() => handleNavigation('/cancellation-policy')}
              sx={{ cursor: 'pointer', fontSize: '0.75rem', color: '#aaa', '&:hover': { color: '#fff' } }}
            >
              Cancellation Policy
            </Link>
          </Box>
        </Grid>

        {/* Right: Social Icons */}
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
