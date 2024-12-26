import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

// Placeholder images - replace with actual images
const salonInteriorImage = '/images/interior.jpg';
const founderImage = '/images/founder.jpg';
const serviceImage1 = '/images/chemicalpeel.jpg';
const serviceImage2 = '/images/mesotreatment.jpg';
const serviceImage3 = '/images/collagen.jpg';
const serviceImage4 = '/images/antiagingservice.jpg';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  padding: theme.spacing(6, 0)
}));

const AboutUs = () => {
  return (
    <GradientBackground>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              fontWeight="bold"
              color="primary.main"
            >
              Kira Exotica
              <Typography variant="h5" color="text.secondary">
                Aesthetic Salon and Beauty Clinic
              </Typography>
            </Typography>
            <Typography variant="body1" paragraph>
              A Name Synonymous with Excellence and Innovation
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Established in November 2013, Kira Exotica has been redefining beauty standards 
              for over a decade in the vibrant city of Indore.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="400"
                image={salonInteriorImage}
                alt="Kira Exotica Salon Interior"
              />
            </Card>
          </Grid>
        </Grid>

        {/* Founder Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={5}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="500"
                image={founderImage}
                alt="Poonam Chauhan"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h4" gutterBottom>
              Meet Our Founder
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Poonam Chauhan
            </Typography>
            <Typography variant="body1" paragraph>
              A seasoned expert with over 17 years of professional experience, 
              Poonam Chauhan is the visionary behind Kira Exotica. Her journey spans across 
              major cities including Indore, Jaipur, Delhi, Kota, and Jodhpur, 
              working with some of the most renowned brands in the beauty industry.
            </Typography>
            <Typography variant="body1" paragraph>
              Her passion and commitment shine through in every service, 
              making Kira Exotica a trusted name in advanced aesthetics and personalized beauty care.
            </Typography>
          </Grid>
        </Grid>

        {/* Signature Services Section */}
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Our Signature Treatments
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="250"
                image={serviceImage1}
                alt="Chemical Peels"
              />
              <CardContent>
                <Typography variant="h6">Chemical Peels</Typography>
                <Typography variant="body2">
                  Transform your skin with customized treatments targeting pigmentation, 
                  acne scars, and dullness for a radiant complexion.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="250"
                image={serviceImage2}
                alt="Meso Treatments"
              />
              <CardContent>
                <Typography variant="h6">Meso Treatments</Typography>
                <Typography variant="body2">
                  Revitalize your skin at the cellular level, enhancing hydration, 
                  improving elasticity, and restoring a youthful glow.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="250"
                image={serviceImage3}
                alt="Collagen Treatments"
              />
              <CardContent>
                <Typography variant="h6">Collagen Treatments</Typography>
                <Typography variant="body2">
                  Boost your skin's natural collagen for improved firmness, 
                  texture, and radiant appearance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card elevation={6}>
              <CardMedia
                component="img"
                height="250"
                image={serviceImage4}
                alt="Anti-Aging Expertise"
              />
              <CardContent>
                <Typography variant="h6">Anti-Aging Expertise</Typography>
                <Typography variant="body2">
                  Tailored solutions addressing fine lines, wrinkles, and sagging skin, 
                  helping you look your best at any age.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Advanced Technologies Section */}
        <Box sx={{ mt: 6, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Advanced Skincare Technologies
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Hydra Facials" 
                secondary="Deep cleansing and hydration treatments"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="MNRF Therapy" 
                secondary="Micro Needling Radiofrequency for skin rejuvenation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Laser Treatments" 
                secondary="Precision treatments for various skin concerns"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Weight Management & Body Contouring" 
                secondary="Precise Weight Management & Body Contouring"
              />
            </ListItem>
          </List>
        </Box>

        {/* Mission Statement */}
        <Box textAlign="center" sx={{ mt: 6, p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Our Philosophy
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            At Kira Exotica, we believe that beauty is an art. Our mission is to bring out 
            your best by delivering a luxurious and results-driven experience that is 
            second to none. Step into a world where expertise meets elegance, 
            and let us redefine your beauty journey.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, fontStyle: 'italic' }}>
            Your beauty, our legacy.
          </Typography>
        </Box>
      </Container>
    </GradientBackground>
  );
};

export default AboutUs;