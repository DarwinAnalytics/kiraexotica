import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for symmetric cards
const SymmetricCard = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[6],
  backgroundColor: theme.palette.background.paper
}));

const SymmetricCardMedia = styled(Box)(({ theme }) => ({
  height: 200, // Fixed height for all card images
  width: '100%', // Full width
  overflow: 'hidden'
}));

const SymmetricCardContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  minHeight: 280, // Increased minimum height to accommodate content
  position: 'relative'
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  minHeight: 60,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  marginBottom: theme.spacing(2) // Increased spacing
}));

// Improved CourseDescription with better visibility and justified text
const CourseDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(10), // Increased spacing for info section
  overflow: 'visible', // Show all content by default
  lineHeight: 1.6, // Improved line height for readability
  color: theme.palette.text.primary, // Darker text for better visibility
  textAlign: 'justify', // MS Word-like justified text
  '& p': {
    margin: 0, // Remove default paragraph margins
  }
}));

const CourseInfo = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  bottom: theme.spacing(3),
  left: 0,
  padding: theme.spacing(0, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(2),
  backgroundColor: theme.palette.background.paper, // Ensure background color matches the card
}));

const HairCourses = ({ hairCourses }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Hair Styling Courses
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
        Explore our professional hair styling courses designed to elevate your skills
      </Typography>
      
      <Grid container spacing={4}>
        {hairCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SymmetricCard>
              <SymmetricCardMedia>
                <img 
                  src={course.imageUrl} 
                  alt={course.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </SymmetricCardMedia>
              <SymmetricCardContent>
                <CourseTitle variant="h5" component="h2">
                  {course.title}
                </CourseTitle>
                <CourseDescription variant="body1">
                  {course.description}
                </CourseDescription>
                <CourseInfo>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Duration
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {course.duration}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body2" color="text.secondary">
                        Fee
                      </Typography>
                      <Typography variant="body1" fontWeight="medium">
                        {course.fee}
                      </Typography>
                    </Grid>
                  </Grid>
                </CourseInfo>
              </SymmetricCardContent>
            </SymmetricCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HairCourses;