import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Avatar, 
  ThemeProvider, 
  createTheme,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { styled } from '@mui/system';

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

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: theme.spacing(3),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
  }
}));

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Creative Director",
      image: "/api/placeholder/400/400",
      bio: "With over 15 years of experience, Elena is the visionary behind our salon's unique approach to beauty."
    },
    {
      name: "Michael Chen",
      role: "Senior Stylist",
      image: "/api/placeholder/400/400",
      bio: "A master of precision cutting and color, Michael brings international styling techniques to our team."
    },
    {
      name: "Sophia Kim",
      role: "Wellness Specialist",
      image: "/api/placeholder/400/400",
      bio: "Specializing in holistic beauty treatments that nurture both body and mind."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Our Story Section */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ mb: 3 }}
            >
              Our Story
            </Typography>
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{ lineHeight: 1.6 }}
            >
              Founded in 2010, our salon began with a simple mission: 
              to redefine beauty as a personal, transformative experience. 
              We believe that true beauty comes from confidence, 
              and our team is dedicated to helping each client 
              discover their unique aesthetic potential.

              Our approach combines cutting-edge techniques, 
              personalized care, and a holistic understanding 
              of individual beauty. We're not just a salon - 
              we're a creative studio where artistry meets personal expression.
            </Typography>
          </Grid>

          {/* Mission Statement */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ mb: 3 }}
            >
              Our Mission
            </Typography>
            <Typography 
              variant="body1" 
              color="textSecondary"
              sx={{ lineHeight: 1.6 }}
            >
              To empower individuals through transformative beauty experiences. 
              We aim to create more than just a new look - 
              we craft a journey of self-discovery and confidence. 
              Our commitment goes beyond aesthetics, focusing on 
              personalized care, innovative techniques, 
              and celebrating each client's unique beauty.
            </Typography>
          </Grid>

          {/* Team Section */}
          <Grid item xs={12}>
            <Typography 
              variant="h4" 
              align="center" 
              gutterBottom 
              sx={{ mb: 4 }}
            >
              Meet Our Team
            </Typography>
            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <TeamMemberCard elevation={3}>
                    <CardContent sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      p: 3 
                    }}>
                      <Avatar 
                        src={member.image} 
                        sx={{ 
                          width: 200, 
                          height: 200, 
                          mb: 2 
                        }} 
                      />
                      <Typography 
                        variant="h6" 
                        sx={{ fontWeight: 'bold' }}
                      >
                        {member.name}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        color="textSecondary"
                        sx={{ mb: 2 }}
                      >
                        {member.role}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        align="center"
                      >
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </TeamMemberCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default AboutPage;