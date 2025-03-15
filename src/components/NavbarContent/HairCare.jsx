import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';

// Styled components for symmetric cards
const SymmetricCard = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'row', // Horizontal layout for full-width cards
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  boxShadow: theme.shadows[6],
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack on mobile
  }
}));

const SymmetricCardMedia = styled(Box)(({ theme }) => ({
  width: '40%', // Fixed width for card images in desktop view
  minHeight: 300, // Minimum height
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 200,
  }
}));

const SymmetricCardContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  width: '60%', // Fixed width for content in desktop view
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(3),
  }
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CourseDescription = styled(Typography)(({ theme }) => ({
  // No fixed height to allow content to flow naturally
}));

const HairCare = ({ hairCourses }) => {
  const location = useLocation();
  const cardRefs = useRef([]);

  // Create a proper mapping object
  const scrollMapping = {
    '/skincare/hydratingfacial': 0,
    '/skincare/detan': 1,
    '/skincare/Spa': 2,
    '/skincare/antiaging': 3,
    '/skincare/SkinTightning': 4,
    '/skincare/pigmentation': 5,
    '/skincare/brightening': 6,
    '/slimming/fatreduction': 0,
    '/slimming/cellulitetreatment': 1,
    '/slimming/weightlossprogram': 2,
    '/slimming/bodywraps': 3,
    '/slimming/skintightening': 4,
    '/slimming/slimmingconsultation': 5,
    '/medicaltreatment/acne': 0,
    '/medicaltreatment/antiage': 1,
    '/medicaltreatment/pigmentation': 2,
    '/medicaltreatment/hyperpigmentation': 3,
    '/medicaltreatment/medicatedfacial': 4,
    '/medicaltreatment/carbontretment': 5,
    '/medicaltreatment/skinrejuvenation': 6,
    '/medicaltreatment/vaginaltightening': 7,
    '/laser/laserskinrejuvenation': 0,
    '/laser/laserpigmentation': 1,
    '/laser/laserscaremoval': 2,
    '/laser/lasertattoremoval': 3,
    '/laser/fractionalco2laser': 4,
    '/haircare/styling': 0,
    '/haircare/color': 1,
    '/haircare/spa': 2,
    '/haircare/kerasmooth': 3,
    '/haircare/kerabond': 4,
    '/haircare/botox': 5,
    '/haircare/nanoplastiatreatment': 6,
    '/haircare/hairpatch': 7,
    '/haircare/hairextention': 8
  };

  useEffect(() => {
    // Get the index from the mapping
    const index = scrollMapping[location.pathname];
    
    // If we have a valid index and the ref exists, scroll to it
    if (index !== undefined && cardRefs.current[index]) {
      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => {
        cardRefs.current[index].scrollIntoView({ 
          behavior: 'smooth',
          block: 'center' // Center the element in the viewport
        });
      }, 300);
    }
  }, [location.pathname]);

  // Initialize the refs array when courses change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, hairCourses.length);
  }, [hairCourses]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {hairCourses.map((course, index) => (
          <Grid 
            item 
            xs={12} 
            key={index}
            ref={el => cardRefs.current[index] = el}
            id={`haircare-item-${index}`}
          >
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
                <CourseDescription variant="body1" color="text.secondary">
                  {course.description}
                </CourseDescription>
              </SymmetricCardContent>
            </SymmetricCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HairCare;