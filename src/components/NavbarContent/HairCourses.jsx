import React from 'react';
import { Box, Typography, Container, Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';

const HairCourses = ({hairCourses}) => {
 

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {hairCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
                  <Typography variant="body1" color="text.primary">
                    Duration: {course.duration}
                  </Typography>
                  <Typography variant="body1" color="text.primary">
                    Fee: {course.fee}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HairCourses;