import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  FormGroup, 
  FormControlLabel, 
  Checkbox, 
  Grid, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField,
  Radio,
  RadioGroup,
  Paper
} from '@mui/material';

// Price data for services
const servicesPricing = {
  threading: {
    female: {
      'Eyebrow': 50,
      'Upper Lip': 20,
      'Lower Lip': 20,
      'Chin': 30,
      'Cheeks': 50,
      'Neck': 50,
      'Side Lock': 50,
      'Nose': 20,
      'Forehead': 20,
      'Full Face': 150,
      'Full Face & Neck': 200
    },
    male: {
      'Eyebrow': 50,
      'Cheeks': 100,
      'Nose': 50,
      'Forehead': 50
    }
  },
  wax: {
    female: {
      'Eyebrow Wax': 150,
      'Upper Lip': 80,
      'Lower Lip': 80,
      'Chin': 80,
      'Cheeks': 150,
      'Neck': 150,
      'Side Lock': 150,
      'Nose': 80,
      'Forehead': 70,
      'Full Face': 450
    },
    male: {
      'Eyebrow Wax': 150,
      'Cheeks': 150,
      'Neck': 150,
      'Nose': 50,
      'Forehead': 70
    }
  },
  bleach: {
    female: {
      'Upper Lip': 50,
      'Lower Lip': 50,
      'Chin': 50,
      'Face Bleach with Neck': 450,
      'Neck': 250,
      'Full Back': 750,
      'Half Back': 450,
      'Full Front': 750,
      'Stomach': 450,
      'Underarms': 250,
      'Full Arms': 550,
      'Half Arms': 350,
      'Half Legs': 550,
      'Full Legs': 850,
      'Feet': 250,
      'Full Body': 1550
    },
    male: {
      'Face Bleach with Neck': 350,
      'Neck': 250,
      'Full Back': 850,
      'Half Back': 450,
      'Full Front': 850,
      'Stomach': 450,
      'Underarms': 250,
      'Full Arms': 650,
      'Half Arms': 450,
      'Half Legs': 650,
      'Full Legs': 950,
      'Feet': 250,
      'Full Body': 1750
    }
  }
};

const BeautyServicesBooking = () => {
  const [gender, setGender] = useState('female');
  const [selectedServices, setSelectedServices] = useState({
    threading: {},
    wax: {},
    bleach: {}
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Calculate total price
  const calculateTotal = () => {
    let total = 0;
    Object.keys(selectedServices).forEach(category => {
      Object.keys(selectedServices[category]).forEach(service => {
        if (selectedServices[category][service]) {
          total += servicesPricing[category][gender][service];
        }
      });
    });
    return total;
  };

  // Handle service selection
  const handleServiceToggle = (category, service) => {
    setSelectedServices(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [service]: !prev[category][service]
      }
    }));
  };

  // Render service checkboxes
  const renderServiceCheckboxes = (category) => {
    return Object.keys(servicesPricing[category][gender]).map(service => (
      <FormControlLabel
        key={service}
        control={
          <Checkbox
            checked={!!selectedServices[category][service]}
            onChange={() => handleServiceToggle(category, service)}
          />
        }
        label={`${service} - ₹${servicesPricing[category][gender][service]}/-`}
      />
    ));
  };

  // Handle proceed and edit
  const handleProceed = () => {
    setIsModalOpen(true);
  };

  const handleEdit = () => {
    setIsEditMode(true);
    setIsModalOpen(false);
  };

  const handlePay = () => {
    // Implement payment logic here
    alert('Payment Processing!');
  };

  const totalPrice = calculateTotal();
  const discountedPrice = totalPrice > 1000 
    ? Math.round(totalPrice * 0.9)  // 10% discount for total over 1000
    : totalPrice;

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Beauty Services Booking
        </Typography>

        {/* Gender Selection */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Select Gender</Typography>
          <RadioGroup 
            row 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel 
              value="female" 
              control={<Radio />} 
              label="Female" 
            />
            <FormControlLabel 
              value="male" 
              control={<Radio />} 
              label="Male" 
            />
          </RadioGroup>
        </Box>

        {/* Services Selection */}
        <Grid container spacing={2}>
          {/* Threading Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Threading</Typography>
            <FormGroup>
              {renderServiceCheckboxes('threading')}
            </FormGroup>
          </Grid>

          {/* Wax Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Wax</Typography>
            <FormGroup>
              {renderServiceCheckboxes('wax')}
            </FormGroup>
          </Grid>

          {/* Bleach Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Bleach</Typography>
            <FormGroup>
              {renderServiceCheckboxes('bleach')}
            </FormGroup>
          </Grid>
        </Grid>

        {/* Total and Proceed */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="h6">
            Total Price: ₹{totalPrice}/-
          </Typography>
          {totalPrice > 1000 && (
            <Typography variant="subtitle2" color="primary">
              10% Discount Applied: ₹{discountedPrice}/-
            </Typography>
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleProceed}
            disabled={totalPrice === 0}
            sx={{ mt: 2 }}
          >
            Proceed
          </Button>
        </Box>

        {/* Confirmation Modal */}
        <Dialog 
          open={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Booking Confirmation</DialogTitle>
          <DialogContent>
            <Typography variant="h6">Selected Services:</Typography>
            {Object.keys(selectedServices).map(category => (
              <Box key={category}>
                <Typography variant="subtitle1">{category.toUpperCase()}</Typography>
                {Object.keys(selectedServices[category])
                  .filter(service => selectedServices[category][service])
                  .map(service => (
                    <Typography key={service} variant="body2">
                      {service} - ₹{servicesPricing[category][gender][service]}/-
                    </Typography>
                  ))
                }
              </Box>
            ))}
            <Typography variant="h6" sx={{ mt: 2 }}>
              Total Price: ₹{totalPrice}/-
              {totalPrice > 1000 && ` (Discounted: ₹${discountedPrice}/-)` }
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEdit}>Edit Services</Button>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handlePay}
            >
              Proceed to Pay
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  );
};

export default BeautyServicesBooking;