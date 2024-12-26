import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Dialog, 
  DialogContent,
  ThemeProvider, 
  createTheme,
  Box,
  Button
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

const GalleryImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 300,
  objectFit: 'cover',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    cursor: 'pointer'
  }
}));

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    {
      title: "Hair Styling",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      title: "Bridal Looks",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      title: "Spa & Wellness",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          sx={{ mb: 6 }}
        >
          Our Gallery
        </Typography>

        {galleryCategories.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: 6 }}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ mb: 3 }}
            >
              {category.title}
            </Typography>
            <Grid container spacing={3}>
              {category.images.map((image, imageIndex) => (
                <Grid item xs={12} sm={4} key={imageIndex}>
                  <GalleryImage 
                    src={image} 
                    alt={`${category.title} ${imageIndex + 1}`}
                    onClick={() => setSelectedImage(image)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Fullscreen Image Dialog */}
        <Dialog 
          open={!!selectedImage} 
          onClose={() => setSelectedImage(null)}
          maxWidth="md"
          fullWidth
        >
          <DialogContent sx={{ p: 0 }}>
            <img 
              src={selectedImage} 
              alt="Full Screen Gallery" 
              style={{ 
                width: '100%', 
                maxHeight: '80vh', 
                objectFit: 'contain' 
              }} 
            />
          </DialogContent>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
};

export default GalleryPage;