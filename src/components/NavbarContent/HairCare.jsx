import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';
import { useLocation } from "react-router-dom";

const HairCare = ({hairCourses}) => {
  const location = useLocation();

  useEffect(() => {
    const scrollMapping = {
      '/skincare/hydratingfacial': 400,
      '/skincare/detan': 800,
      '/skincare/Spa': 1150,
      '/skincare/antiaging': 1550,
      '/skincare/SkinTightning': 1950,
      '/skincare/pigmentation': 2350,
      '/skincare/brightening': 2750,
      '/slimming/fatreduction': 400,
      '/slimming/cellulitetreatment': 800,
      '/slimming/weightlossprogram': 1200,
      '/slimming/bodywraps': 1600,
      '/slimming/skintightening': 2000,
      '/slimming/slimmingconsultation': 2400,
      '/medicaltreatment/acne': 400,
      '/medicaltreatment/antiage': 800,
      '/medicaltreatment/pigmentation': 1200,
      '/medicaltreatment/hyperpigmentation': 1600,
      '/medicaltreatment/medicatedfacial': 2000,
      '/medicaltreatment/carbontretment': 2400,
      '/medicaltreatment/skinrejuvenation': 2800,
      '/medicaltreatment/vaginaltightening': 3200,
      '/laser/laserskinrejuvenation': 400,
      '/laser/laserpigmentation': 800,
      '/laser/laserscaremoval': 1200,
      '/laser/lasertattoremoval': 1600,
      '/laser/fractionalco2laser': 2000,
    };
    const scrollPosition = scrollMapping[location.pathname];
    if (scrollPosition !== undefined) {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
    if (location.pathname === "/haircare/styling") {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }

    if (location.pathname === "/haircare/color") {
      window.scrollTo({ top: 800, behavior: "smooth" });
    }
    if (location.pathname === "/haircare/spa") {
      window.scrollTo({ top: 1150, behavior: "smooth" });
    }
    if (location.pathname === "/haircare/kerasmooth") {
      window.scrollTo({ top: 1550, behavior: "smooth" });
    }
    if (location.pathname === "/haircare/kerabond") {
      window.scrollTo({ top: 1950, behavior: "smooth" });
    }

    if (location.pathname === "/haircare/botox") {
      window.scrollTo({ top: 2350, behavior: "smooth" });
    }

    if (location.pathname === "/haircare/nanoplastiatreatment") {
      window.scrollTo({ top: 2750, behavior: "smooth" });
    }
    if (location.pathname === "/haircare/hairpatch") {
      window.scrollTo({ top: 3050, behavior: "smooth" });
    }
    if (location.pathname === "/haircare/hairextention") {
      window.scrollTo({ top: 3350, behavior: "smooth" });
    }
    // You can handle other paths if needed
  }, [location.pathname]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {hairCourses.map((course, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={course.imageUrl}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {course.description}
                </Typography>
                <Box mt={2}>
                
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HairCare;