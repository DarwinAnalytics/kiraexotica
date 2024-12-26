import React, { useRef, useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Card, 
  CardContent,
  ThemeProvider,
  createTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';
import { 
  Spa as SpaIcon, 
  Brush as BrushIcon, 
  Favorite as HeartIcon 
} from '@mui/icons-material';

// Modern, minimalist theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#11111', // Vibrant teal
    },
    background: {
      default: '#000',
      paper: '#1E1E1E'
    }
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase'
    }
  }
});

// Styled components with modern, tech-inspired design
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}));

const VideoBackground = styled('video')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.3,
  zIndex: 1
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  background: 'rgba(30, 30, 30, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  border: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 0 15px ${theme.palette.primary.main}`
  }
}));

const SalonLandingPage = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <HeroSection>
        {/* Autoplay Video Background */}
        <VideoBackground
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src="/api/placeholder/1920/1080" 
            type="video/mp4" 
          />
        </VideoBackground>

        <Container maxWidth="lg">
          <ContentOverlay>
            {/* Text Content */}
            <Box sx={{ width: isMobile ? '100%' : '50%', pr: 4 }}>
            <img src='images/WhatsApp Image 2024-12-05 at 17.10.33_653cd70d.jpg'></img>
              
              {/* <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300
                }}
              >
                Aesthetic Salon and Beauty Clinic
              </Typography> */}
              
              {/* <Box sx={{ display: 'flex', gap: 2, marginTop:'10'}}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large" 
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 2
                  }}
                >
                  Book Appointment
                </Button>
              </Box> */}
            </Box>

            {/* Services Grid (if not mobile) */}
            {/* {!isMobile && (
              <Box sx={{ width: '40%' }}>
                <Grid container spacing={3}>
                  {[
                    { 
                      title: "Hair Artistry", 
                      description: "Precision cuts & color", 
                      icon: <BrushIcon color="primary" /> 
                    },
                    { 
                      title: "Wellness Spa", 
                      description: "Holistic beauty treatments", 
                      icon: <SpaIcon color="primary" /> 
                    },
                    { 
                      title: "Bridal Elegance", 
                      description: "Curated wedding beauty", 
                      icon: <HeartIcon color="primary" /> 
                    }
                  ].map((service, index) => (
                    <Grid item xs={6} key={index}>
                      <ServiceCard elevation={0}>
                        <CardContent sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center', 
                          textAlign: 'center',
                          p: 2 
                        }}>
                          {React.cloneElement(service.icon, { 
                            sx: { fontSize: 40, mb: 1 } 
                          })}
                          <Typography 
                            variant="subtitle1" 
                            color="primary"
                            sx={{ fontWeight: 'bold' }}
                          >
                            {service.title}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="textSecondary"
                          >
                            {service.description}
                          </Typography>
                        </CardContent>
                      </ServiceCard>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )} */}
          </ContentOverlay>
        </Container>
      </HeroSection>
    </ThemeProvider>
  );
};

export default SalonLandingPage;