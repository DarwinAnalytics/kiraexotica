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

const RefundPolicy = () => {
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
          Refund Policy
        </Typography>
        <Typography variant="body2" color="#999" mb={3}>
          Effective Date: April 2025 &nbsp;|&nbsp; Indore, Madhya Pradesh
        </Typography>
        <Divider sx={{ mb: 4 }} />

        {/* 2.1 */}
        <SectionHeading>1. Nature of Our Services</SectionHeading>
        <BodyText>
          Kira Exotica Saloon provides professional beauty and grooming services. All services
          are rendered in-person at our saloon in Indore on a walk-in basis.
        </BodyText>

        {/* 2.2 */}
        <SectionHeading>2. Refund Eligibility</SectionHeading>
        <BodyText>
          Since our services are performed in person and payment is collected at the saloon
          after service completion, refunds are handled as follows:
        </BodyText>
        <BulletList items={[
          'If you are dissatisfied with a service, please inform our staff immediately before leaving the saloon.',
          'We will do our best to rectify or redo the service at no additional charge.',
          'Refunds are considered on a case-by-case basis at the sole discretion of the saloon manager.',
        ]} />

        {/* 2.3 */}
        <SectionHeading>3. Non-Refundable Situations</SectionHeading>
        <BodyText>Refunds will not be provided in the following cases:</BodyText>
        <BulletList items={[
          'Service has been fully completed and the customer has left the premises without raising any concern',
          'Dissatisfaction due to personal preference after service completion',
          'Products purchased from the saloon (no returns on opened products)',
        ]} />

        {/* 2.4 */}
        <SectionHeading>4. Product Refunds</SectionHeading>
        <BodyText>
          Sealed, unopened products purchased at our saloon may be returned within 2 days
          of purchase with valid receipt, subject to inspection.
        </BodyText>

        <Divider sx={{ mt: 6, mb: 3 }} />
        <Typography variant="body2" color="#bbb" textAlign="center">
          © {new Date().getFullYear()} Kira Exotica Hair & Beauty Salon, Indore
        </Typography>
      </Container>
    </Box>
  );
};

export default RefundPolicy;
