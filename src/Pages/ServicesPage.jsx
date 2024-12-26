import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  ThemeProvider, 
  createTheme,
  Box,
  Button
} from '@mui/material';
import { styled } from '@mui/system';
import { 
  Spa as SpaIcon, 
  Brush as BrushIcon, 
  CameraAlt as CameraIcon,
  ColorLens as ColorIcon,
  Face as FaceIcon,
  Healing as HealingIcon
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00E5FF',
    },
    background: {
      default: '#F4F7F9'
    }
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif"
  }
});

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
  }
}));

const ServicesPage = () => {
  const services = [
    {
      title: "Hair Styling",
      icon: <BrushIcon color="primary" sx={{ fontSize: 64 }} />,
      description: "Personalized cutting, styling, and transformative hair treatments.",
      image: "/api/placeholder/800/600",
      details: [
        "Precision Cuts",
        "Color Treatments",
        "Highlights & Balayage",
        "Hair Repair Treatments"
      ]
    },
    {
      title: "Spa Wellness",
      icon: <SpaIcon color="primary" sx={{ fontSize: 64 }} />,
      description: "Holistic wellness treatments for complete mind-body rejuvenation.",
      image: "/api/placeholder/800/600",
      details: [
        "Massage Therapy",
        "Facial Treatments",
        "Body Treatments",
        "Aromatherapy"
      ]
    },
    {
      title: "Makeup & Bridal",
      icon: <CameraIcon color="primary" sx={{ fontSize: 64 }} />,
      description: "Professional makeup artistry for every occasion and life moment.",
      image: "/api/placeholder/800/600",
      details: [
        "Bridal Makeup",
        "Photoshoot Styling",
        "Evening Makeup",
        "Makeup Workshops"
      ]
    },
    {
      title: "Skin Care",
      icon: <FaceIcon color="primary" sx={{ fontSize: 64 }} />,
      description: "Advanced skincare treatments tailored to your unique skin needs.",
      image: "/api/placeholder/800/600",
      details: [
        "Facial Treatments",
        "Chemical Peels",
        "Microdermabrasion",
        "Skin Analysis"
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          sx={{ mb: 6 }}
        >
          Our Comprehensive Services
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ServiceCard elevation={3}>
                <CardMedia
                  component="img"
                  height="250"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography 
                      variant="h5" 
                      sx={{ ml: 2, fontWeight: 'bold' }}
                    >
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="body1" 
                    color="textSecondary" 
                    sx={{ mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {service.details.map((detail, idx) => (
                      <Button 
                        key={idx} 
                        variant="outlined" 
                        color="primary" 
                        size="small"
                        sx={{ 
                          borderRadius: 2, 
                          textTransform: 'none' 
                        }}
                      >
                        {detail}
                      </Button>
                    ))}
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ServicesPage;