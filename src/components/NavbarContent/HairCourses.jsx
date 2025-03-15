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
  height: 240, // Increased height to prevent overlapping
  position: 'relative'
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  height: 64,
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  marginBottom: theme.spacing(1.5) // Increased spacing
}));

const CourseDescription = styled(Typography)(({ theme }) => ({
  height: 72, // Increased height for description
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  marginBottom: theme.spacing(8) // Increased spacing for info section
}));

const CourseInfo = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  bottom: theme.spacing(3),
  left: 0,
  padding: theme.spacing(0, 3),
  borderTop: `1px solid ${theme.palette.divider}`,
  paddingTop: theme.spacing(2)
}));

const HairCourses = ({ hairCourses }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
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
                <CourseTitle variant="h5" component="div">
                  {course.title}
                </CourseTitle>
                <CourseDescription variant="body2" color="text.secondary">
                  {course.description}
                </CourseDescription>
                <CourseInfo>
                  <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'medium' }}>
                    Duration: {course.duration}
                  </Typography>
                  <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'medium' }}>
                    Fee: {course.fee}
                  </Typography>
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