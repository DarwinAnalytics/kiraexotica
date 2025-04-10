import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Card, 
  CardMedia,
  CardContent,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import { 
  Spa as SpaIcon, 
  Brush as BrushIcon, 
  Star as StarIcon,
  LocalOffer as OfferIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

// Hyper-modern, minimalist theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00E5FF', // Vibrant cyan
    },
    secondary: {
      main: '#1A1A2E', // Deep dark blue
    },
    background: {
      default: '#F4F7F9',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 1.1
    },
    body1: {
      lineHeight: 1.6
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600
        }
      }
    }
  }
});

const SalonHomePage = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const services = [
    { 
      title: "Hair Care", 
      description: "Personalized styling with cutting-edge techniques",
      icon: <BrushIcon sx={{ fontSize: 64, color: 'white' }} />,
      image: "/images/haircarehome copy.jpg"
    },
    { 
      title: "Skin Care", 
      description: "Holistic treatments for complete rejuvenation",
      icon: <SpaIcon sx={{ fontSize: 64, color: 'white' }} />,
      image: "/images/skin care home.jpg"
    },
    { 
      title: "Pamper Care", 
      description: "Curated looks for your most memorable moments",
      icon: <StarIcon sx={{ fontSize: 64, color: 'white' }} />,
      image: "/images/pamper care home.jpg"
    },
    { 
      title: "Makeup", 
      description: "Curated looks for your most memorable moments",
      icon: <StarIcon sx={{ fontSize: 64, color: 'white' }} />,
      image: "/images/makeup home.jpg"
    },
    { 
      title: "Medical Treatment", 
      description: "Curated looks for your most memorable moments",
      icon: <StarIcon sx={{ fontSize: 64, color: 'white' }} />,
      image: "/images/medicalhome.jpg"
    },
    { 
      title: "Laser Treatment", 
      description: "Curated looks for your most memorable moments",
      icon: <StarIcon sx={{ fontSize: 64, color: 'white' }} />,
      image: "/images/laserhome.jpg"
    }
  ];

  const testimonials = [
    {
      quote: "A transformative experience that redefined my entire approach to personal beauty.",
      name: "Elena Rodriguez",
      avatar: "/api/placeholder/100/100",
      profession: "Creative Director"
    },
    {
      quote: "Exceptional service that goes beyond just styling - it's a true art form.",
      name: "Michael Chen",
      avatar: "/api/placeholder/100/100",
      profession: "Tech Entrepreneur"
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ 
          background: 'black', 
          color: 'white', 
          position: 'relative', 
          overflow: 'hidden', 
          padding: theme.spacing(10, 0), 
          borderRadius: theme.spacing(4)
        }}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="h2" 
                  gutterBottom
                  sx={{ color: 'white', mb: 3 }}
                >
                  Redefine Your 
                  <br />
                  Beauty Narrative
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    mb: 4,
                    maxWidth: 500 
                  }}
                >
                  Where innovative design meets personalized care. 
                  Our approach transcends traditional beauty standards, 
                  creating unique expressions of your individual style.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    endIcon={<ArrowIcon />}
                    sx={{ 
                      px: 4, 
                      py: 1.5,
                      backgroundColor: 'white',
                      color: 'black',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)'
                      }
                    }}
                  >
                    Book Consultation
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  {services.map((service, index) => (
                    <Grid item xs={6} sm={4} key={index}>
                      <Card 
                        sx={{ 
                          height: '100%',
                          borderRadius: theme.spacing(3),
                          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                          }
                        }}
                      >
                        <Box sx={{ position: 'relative', height: 150 }}>
                          <CardMedia
                            component="img"
                            image={service.image}
                            alt={service.title}
                            sx={{ 
                              height: '100%',
                              width: '100%',
                              objectFit: 'cover'
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                              padding: theme.spacing(2, 1, 1, 1),
                            }}
                          >
                            <Typography 
                              variant="subtitle1" 
                              sx={{ 
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign: 'center'
                              }}
                            >
                              {service.title}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom
          sx={{ mb: 6 }}
        >
          Voices of Transformation
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: '100%', 
                  p: 4, 
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 4
                }}
              >
                <Typography 
                  variant="body1" 
                  color="textSecondary" 
                  sx={{ 
                    mb: 3, 
                    fontStyle: 'italic',
                    lineHeight: 1.6
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    src={testimonial.avatar} 
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ fontWeight: 'bold' }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="textSecondary"
                    >
                      {testimonial.profession}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default SalonHomePage;