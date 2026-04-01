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

const PrivacyPolicy = () => {
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
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="#999" mb={3}>
          Effective Date: April 2025 &nbsp;|&nbsp; Indore, Madhya Pradesh
        </Typography>
        <Divider sx={{ mb: 4 }} />

        {/* 1.1 */}
        <SectionHeading>1. Information We Collect</SectionHeading>
        <BodyText>
          Kira Exotica Saloon collects the following information when you visit our website or contact us:
        </BodyText>
        <BulletList items={[
          'Name and contact details (phone number, email address)',
          'General location (city/area) for service enquiries',
          'Any information you voluntarily share via contact forms or messages',
        ]} />

        {/* 1.2 */}
        <SectionHeading>2. How We Use Your Information</SectionHeading>
        <BodyText>Your information is used only for the following purposes:</BodyText>
        <BulletList items={[
          'To respond to your enquiries about our services',
          'To provide information about our saloon services and offers',
          'To improve our website and customer experience',
        ]} />

        {/* 1.3 */}
        <SectionHeading>3. Data Sharing</SectionHeading>
        <BodyText>
          We do not sell, trade, or share your personal information with any third parties.
          Your data is strictly used for internal communication purposes only.
        </BodyText>

        {/* 1.4 */}
        <SectionHeading>4. Cookies</SectionHeading>
        <BodyText>
          Our website may use basic cookies to improve browsing experience.
          You can disable cookies through your browser settings at any time.
        </BodyText>

        {/* 1.5 */}
        <SectionHeading>5. Data Security</SectionHeading>
        <BodyText>
          We take reasonable precautions to protect your information. However, no internet
          transmission is 100% secure. We encourage you to share only necessary information.
        </BodyText>

        {/* 1.6 */}
        <SectionHeading>6. Contact for Privacy Concerns</SectionHeading>
        <BodyText>
          If you have any questions regarding your personal data, please contact us directly
          at our saloon in Indore.
        </BodyText>

        <Divider sx={{ mt: 6, mb: 3 }} />
        <Typography variant="body2" color="#bbb" textAlign="center">
          © {new Date().getFullYear()} Kira Exotica Hair & Beauty Salon, Indore
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
