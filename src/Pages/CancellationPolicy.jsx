import React from 'react';
import { Box, Container, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SectionHeading = ({ children }) => (
  <Typography variant="h6" fontWeight={700} mt={4} mb={1} color="#111">
    {children}
  </Typography>
);

const BodyText = ({ children }) => (
  <Typography variant="body2" color="#444" lineHeight={1.8} mb={1.5}>
    {children}
  </Typography>
);

const BulletList = ({ items }) => (
  <List dense disablePadding sx={{ pl: 2, mb: 1.5 }}>
    {items.map((item, i) => (
      <ListItem key={i} disableGutters sx={{ display: 'list-item', listStyleType: 'disc', pl: 0 }}>
        <ListItemText primary={<Typography variant="body2" color="#444">{item}</Typography>} />
      </ListItem>
    ))}
  </List>
);

const CancellationPolicy = () => {
  const navigate = useNavigate();

  return (
    <Box bgcolor="#fafafa" minHeight="100vh" py={6}>
      <Container maxWidth="md">

        {/* Back Button */}
        <Box
          display="flex" alignItems="center" gap={1} mb={4}
          sx={{ cursor: 'pointer', color: '#555', '&:hover': { color: '#000' }, width: 'fit-content' }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon fontSize="small" />
          <Typography variant="body2">Back</Typography>
        </Box>

        {/* Header */}
        <Typography variant="overline" color="#999" letterSpacing={3}>
          Kira Exotica Hair & Beauty Salon
        </Typography>
        <Typography variant="h4" fontWeight={800} mt={0.5} mb={1} color="#111">
          Cancellation Policy
        </Typography>
        <Typography variant="body2" color="#999" mb={3}>
          Effective Date: April 2025 &nbsp;|&nbsp; Indore, Madhya Pradesh
        </Typography>
        <Divider sx={{ mb: 4 }} />

        {/* 3.1 */}
        <SectionHeading>1. Walk-In Services</SectionHeading>
        <BodyText>
          Kira Exotica Saloon currently operates on a walk-in basis only. Since no advance
          bookings or appointments are required, there is no formal cancellation process.
        </BodyText>

        {/* 3.2 */}
        <SectionHeading>2. Future Appointment Bookings</SectionHeading>
        <BodyText>
          If appointment-based bookings are introduced in the future, the following
          cancellation terms will apply:
        </BodyText>
        <BulletList items={[
          'Cancellations made 24 hours or more in advance: Full credit or rescheduling at no charge',
          'Cancellations made less than 24 hours in advance: May be subject to a service fee',
          'No-shows without prior notice: May be charged a nominal fee',
        ]} />

        {/* 3.3 */}
        <SectionHeading>3. Saloon Right to Cancel</SectionHeading>
        <BodyText>
          Kira Exotica Saloon reserves the right to refuse or cancel service in the
          following situations:
        </BodyText>
        <BulletList items={[
          'Disrespectful or abusive behavior toward staff',
          'Health or safety concerns that may affect staff or other customers',
          'Circumstances beyond our control (power outage, emergency closure, etc.)',
        ]} />

        <Divider sx={{ mt: 6, mb: 3 }} />
        <Typography variant="body2" color="#bbb" textAlign="center">
          © {new Date().getFullYear()} Kira Exotica Hair & Beauty Salon, Indore
        </Typography>
      </Container>
    </Box>
  );
};

export default CancellationPolicy;
