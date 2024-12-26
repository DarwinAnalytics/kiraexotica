import React, { useState } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField, 
  Paper,
  AppBar,
  Toolbar
} from '@mui/material';
import { 
  Business as BusinessIcon,
  StarBorder as StarBorderIcon,
  EmojiObjects as EmojiObjectsIcon,
  Support as SupportIcon,
  AttachMoney as AttachMoneyIcon,
  LocalOffer as LocalOfferIcon
} from '@mui/icons-material';

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // Deep purple accent
    },
    secondary: {
      main: '#00000', // Pink accent
    },
    background: {
      default: '#F3E5F5', // Light purple background
    }
  },
 
});

// Franchise Inquiry Form Component
const FranchiseInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Franchise Inquiry Submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        mt: 4, 
        p: 3, 
        backgroundColor: 'white', 
        borderRadius: 2 
      }}
    >
      <Typography variant="h4" gutterBottom>
        Franchise Inquiry Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Expected Investment Range"
            name="investment"
            value={formData.investment}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ py: 1.5 }}
          >
            Submit Inquiry
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

// Main App Component
const SalonFranchiseApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Navigation */}
     

      {/* Hero Banner */}
      <Box 
        sx={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,1)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <Container>
          <Typography variant="h2" gutterBottom>
            Kira Exotica Salon Franchise
          </Typography>
          <Typography variant="h4">
            Your Gateway to a Profitable Beauty Business
          </Typography>
        </Container>
      </Box>

      {/* Industry Overview */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Beauty & Wellness Industry Opportunity
        </Typography>
        <Typography variant="body1" paragraph>
          Beauty and Wellness Industry in India is estimated to be 27,000 Crore in 2014 and is expected to grow 25% annually. 
          The organized Beauty segment is growing rapidly not only in Tier 1 Cities but Tier II and Tier III Cities as well, 
          making this a perfect time to invest in this lucrative and highly profitable business.
        </Typography>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ backgroundColor: 'white', py: 6 }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Why Choose Kira Exotica?
          </Typography>
          <Grid container spacing={4}>
            {[
              { 
                icon: <AttachMoneyIcon />, 
                title: 'Profitable Industry', 
                description: 'High margins and consistent revenue potential' 
              },
              { 
                icon: <StarBorderIcon />, 
                title: 'High Loyalty', 
                description: 'Strong customer retention and repeat business' 
              },
              { 
                icon: <SupportIcon />, 
                title: 'Complete Support', 
                description: 'Comprehensive guidance and training' 
              },
              { 
                icon: <LocalOfferIcon />, 
                title: 'Low Investment', 
                description: 'High returns with minimal initial capital' 
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    fontSize: 60, 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 2 
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Advantages of Partnership */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Advantages of Kira Exotica Franchise
        </Typography>
        <Grid container spacing={4}>
          {[
            "Guidance for locating the ideal area",
            "Complete guidance for interiors, layouts, color schemes",
            "Complete assistance in equipment and product purchase",
            "Legal guidance and licenses",
            "Software management and training",
            "Marketing through digital media",
            "Recruitment of salon manager",
            "Assistance in hiring trained staff",
            "Regular seminars and training programs",
            "Dedicated marketing support",
            "Sourcing products at subsidized rates",
            "In-house products with signature techniques"
          ].map((advantage, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}
              >
                <EmojiObjectsIcon 
                  color="primary" 
                  sx={{ mr: 2 }} 
                />
                <Typography variant="body1">
                  {advantage}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Franchise Inquiry Section */}
      <Box sx={{ 
        backgroundColor: 'primary.light', 
        py: 6 
      }}>
        <Container>
          <FranchiseInquiryForm />
        </Container>
      </Box>

    
    </ThemeProvider>
  );
};

export default SalonFranchiseApp;