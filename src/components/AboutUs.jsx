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
  background: 'white',
  minHeight: '100vh',
  padding: theme.spacing(6, 0)
}));

// Styled components for the symmetric cards
const SymmetricCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden'
}));

const SymmetricCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250, // Fixed height for all card images
  width: '100%', // Full width
  objectFit: 'cover'
}));

const SymmetricCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  height: 150 // Fixed height for card content
}));

// New styled component for justified text
const JustifiedTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify'
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
              color=""
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
            <SymmetricCard elevation={6}>
              <SymmetricCardMedia
                component="img"
                image={salonInteriorImage}
                alt="Kira Exotica Salon Interior"
              />
            </SymmetricCard>
          </Grid>
        </Grid>

        {/* Founder Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={5}>
            <SymmetricCard elevation={6}>
              <SymmetricCardMedia
                component="img"
                sx={{ height: 400 }} // Specific override for founder image
                image={founderImage}
                alt="Poonam Chauhan"
              />
            </SymmetricCard>
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
          {/* Service cards - now using justified text for descriptions */}
          {[
            { image: serviceImage1, title: "Chemical Peels", description: "Transform your skin with customized treatments targeting pigmentation, acne scars, and dullness for a radiant complexion." },
            { image: serviceImage2, title: "Meso Treatments", description: "Revitalize your skin at the cellular level, enhancing hydration, improving elasticity, and restoring a youthful glow." },
            { image: serviceImage3, title: "Collagen Treatments", description: "Boost your skin's natural collagen for improved firmness, texture, and radiant appearance." },
            { image: serviceImage4, title: "Anti-Aging Expertise", description: "Tailored solutions addressing fine lines, wrinkles, and sagging skin, helping you look your best at any age." }
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SymmetricCard elevation={6}>
                <SymmetricCardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                />
                <SymmetricCardContent>
                  <Typography variant="h6" gutterBottom>{service.title}</Typography>
                  <JustifiedTypography variant="body2">
                    {service.description}
                  </JustifiedTypography>
                </SymmetricCardContent>
              </SymmetricCard>
            </Grid>
          ))}
        </Grid>

        {/* Advanced Technologies Section */}
        <Typography variant="h4" align="center" sx={{ mt: 6, mb: 4 }}>
          Advanced Skincare Technologies
        </Typography>
        <Grid container spacing={4}>
          {/* Advanced technology cards - using justified text for descriptions */}
          {[
            { title: "Hydra Facials", description: "Deep cleansing and hydration treatments for immediate skin rejuvenation and lasting results.", image:'/images/hydrafacial adv.jpg' },
            { title: "MNRF Therapy", description: "Micro Needling Radiofrequency for skin rejuvenation, tightening, and scar reduction." , image:'/images/MNRF Therapy adv.jpg'},
            { title: "Laser Treatments", description: "Precision treatments for various skin concerns including pigmentation, hair removal, and texture refinement.", image:'/images/Laser Treatments adv.jpg' },
            { title: "Weight Management & Body Contouring", description: "Scientific approach to weight loss and body sculpting for a harmonious silhouette.", image:'/images/Weight Management & Body Contouring adv.jpg' }
          ].map((tech, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <SymmetricCard elevation={6}>
                <Box sx={{ 
                  height: 250, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                }}>
                  <img sx={{ fontSize: 80, color: 'white' }} src={tech.image} />
                </Box>
                <SymmetricCardContent>
                  <Typography variant="h6" gutterBottom>{tech.title}</Typography>
                  <JustifiedTypography variant="body2">
                    {tech.description}
                  </JustifiedTypography>
                </SymmetricCardContent>
              </SymmetricCard>
            </Grid>
          ))}
        </Grid>

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