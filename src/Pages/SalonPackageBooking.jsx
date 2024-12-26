import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  TextField, 
  Card, 
  CardContent, 
  Grid, 
  Chip, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions 
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const SalonPackageBooking = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    upiId: ''
  });

  // Salon packages
  const packages = [
    {
      id: 1,
      name: 'Luxury Spa Day',
      description: 'Full body massage, facial, and hair treatment',
      duration: '3 hours',
      services: ['Full Body Massage', 'Facial', 'Hair Treatment'],
      price: 250,
      tokenAmount: 50
    },
    {
      id: 2,
      name: 'Bridal Glow Package',
      description: 'Comprehensive bridal beauty preparation',
      duration: '4 hours',
      services: ['Makeup Trial', 'Hair Styling', 'Skin Prep', 'Consultation'],
      price: 350,
      tokenAmount: 75
    },
    {
      id: 3,
      name: 'Quick Refresh',
      description: 'Express facial and hair styling',
      duration: '1.5 hours',
      services: ['Express Facial', 'Blow Dry', 'Quick Consultation'],
      price: 150,
      tokenAmount: 30
    }
  ];

  // Razorpay payment handler
  const initiateRazorpayPayment = async () => {
    try {
      // This is a mock implementation. In a real scenario, you'd call your backend to create an order
      const response = await fetch('/api/create-razorpay-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: selectedPackage.tokenAmount * 100, // amount in paise
          currency: 'INR',
          receipt: `booking_${Date.now()}`,
          notes: {
            package: selectedPackage.name,
            phone: phoneNumber,
            email: email
          }
        })
      });

      const orderData = await response.json();

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your actual Razorpay Key ID
        amount: selectedPackage.tokenAmount * 100, // amount in paise
        currency: 'INR',
        name: 'Salon Booking',
        description: selectedPackage.name,
        image: 'https://your-salon-logo.com/logo.png',
        order_id: orderData.id,
        handler: async (response) => {
          // Verify payment on your backend
          try {
            const verifyResponse = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            const verificationResult = await verifyResponse.json();

            if (verificationResult.success) {
              // Payment successful
              setStep(5);
            } else {
              // Payment verification failed
              alert('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: paymentDetails.name,
          email: email,
          contact: phoneNumber
        },
        notes: {
          package: selectedPackage.name
        },
        theme: {
          color: '#3399cc'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initiation error', error);
      alert('Failed to initiate payment');
    }
  };

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setStep(2);
  };

  const handleContactInfoSubmit = () => {
    if (phoneNumber.length === 10 && email.includes('@')) {
      setStep(3);
    }
  };

  const handlePaymentDetailsSubmit = () => {
    if (paymentDetails.name.trim() && 
        (paymentDetails.upiId.includes('@') || paymentDetails.upiId.length > 0)) {
      setStep(4);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedPackage(null);
    setPhoneNumber('');
    setEmail('');
    setPaymentDetails({
      name: '',
      upiId: ''
    });
  };

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container maxWidth="sm">
      {/* Package Selection Step */}
      {step === 1 && (
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Choose Your Salon Package
          </Typography>
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              onClick={() => handlePackageSelect(pkg)}
              sx={{ 
                mb: 2, 
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'action.hover'
                }
              }}
            >
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item xs={8}>
                    <Typography variant="h6">{pkg.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pkg.description}
                    </Typography>
                    <Box mt={1}>
                      <Chip 
                        label={pkg.duration} 
                        size="small" 
                        color="primary" 
                        sx={{ mr: 1 }}
                      />
                      {pkg.services.map(service => (
                        <Chip 
                          key={service} 
                          label={service} 
                          size="small" 
                          color="success" 
                          sx={{ mr: 1 }}
                        />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item xs={4} textAlign="right">
                    <Typography color="success.main" fontWeight="bold">
                      Token: ₹{pkg.tokenAmount}
                    </Typography>
                    <Typography 
                      color="text.secondary" 
                      // sx={{ textDecoration: 'line-through' }}
                    >
                      Package Price: ₹{pkg.price}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Contact Information Step */}
      {step === 2 && (
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Your Contact Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                placeholder="10 digit phone number"
                InputProps={{
                  startAdornment: <PhoneIcon color="action" />
                }}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                InputProps={{
                  startAdornment: <EmailIcon color="action" />
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleContactInfoSubmit}
                disabled={phoneNumber.length !== 10 || !email.includes('@')}
              >
                Continue to Payment Details
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Payment Details Step */}
      {step === 3 && (
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Payment Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                value={paymentDetails.name}
                onChange={(e) => setPaymentDetails(prev => ({
                  ...prev, 
                  name: e.target.value
                }))}
                placeholder="Enter your full name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="UPI ID (Optional)"
                variant="outlined"
                value={paymentDetails.upiId}
                onChange={(e) => setPaymentDetails(prev => ({
                  ...prev, 
                  upiId: e.target.value
                }))}
                placeholder="your-upi@bank"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handlePaymentDetailsSubmit}
                disabled={!paymentDetails.name.trim()}
              >
                Proceed to Payment
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Payment Confirmation Step */}
      {step === 4 && (
        <Box>
          <Typography variant="h4" align="center" gutterBottom>
            Confirm Booking
          </Typography>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>Package:</Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography>{selectedPackage.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Token Amount:</Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography>₹{selectedPackage.tokenAmount}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Phone:</Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography>{phoneNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Email:</Typography>
                </Grid>
                <Grid item xs={6} textAlign="right">
                  <Typography>{email}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box mt={2}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              onClick={initiateRazorpayPayment}
              startIcon={<CreditCardIcon />}
            >
              Pay Now
            </Button>
          </Box>
        </Box>
      )}

      {/* Booking Confirmation Step */}
      {step === 5 && (
        <Dialog open={true} onClose={resetBooking}>
          <DialogTitle>
            <Box display="flex" alignItems="center" justifyContent="center">
              <CheckCircleOutlineIcon 
                color="success" 
                sx={{ fontSize: 64, mr: 2 }} 
              />
              Booking Confirmed!
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="h6" align="center">
                {selectedPackage.name}
              </Typography>
              <Typography align="center">
                Confirmation sent to: {phoneNumber} | {email}
              </Typography>
              <Typography align="center" mt={2}>
                Token Amount Paid: ₹{selectedPackage.tokenAmount}
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              onClick={resetBooking}
            >
              Book Another Package
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default SalonPackageBooking;