import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Menu, 
  MenuItem, 
  Box, 
  Container, 
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const navigationItems = [
    {
      label: 'About Us',
      href: '/aboutus'
    },
    {
      label: 'Academy',
      key: 'academy',
      subItems: [
        { label: 'Hair Courses', href: '/academy/haircourses' },
        { label: 'Beauty Courses', href: '/academy/beautycourses' },
        { label: 'Make up', href: '/academy/makeup' },
        { label: 'Bridal', href: '/academy/bridal' },
        { label: 'Nail', href: '/academy/nail' },
      ]
    },
    {
      label: 'Hair Care',
      key: 'HairCare',
      subItems: [
        { label: 'Cuts', href: '/haircare/cuts' },
        { label: 'Styling', href: '/haircare/styling' },
        { label: 'Color', href: '/haircare/color' },
        { label: 'Spa', href: '/haircare/spa' },
        { label: 'Treatment', href: 'haircare/treatment' },
        { label: 'Kera Smooth', href: '/haircare/kerasmooth' },
        { label: 'Kera Rebond', href: '/haircare/kerabond' },
        { label: 'Botox', href: '/haircare/botox' },
        { label: 'Nano plastia Treatment', href: '/haircare/nanoplastiatreatment' },
        { label: 'Hair Patch', href: '/haircare/hairpatch' },
        { label: 'Hair Extention', href: '/haircare/hairextention' },
      ]
    },
    {
      label: 'Skin Care',
      key: 'skincare',
      subItems: [
        { label: 'Facial', href: '/skincare/facial' },
        { label: 'Hydrating Facial', href: '/skincare/hydratingfacial' },
        { label: 'De tan', href: '/skincare/detan' },
        { label: 'Facial Spa', href: '/skincare/Spa' },
        { label: 'Anti Aging', href: '/skincare/antiaging' },
        { label: 'Skin Tightening', href: '/skincare/SkinTightning' },
        { label: 'Skin Pigmentation', href: 'skincare/pigmentation' },
        { label: 'Skin Brightening', href: '/skincare/brightening' },
      ]
    },
    {
      label: 'Slimming',
      key: 'slimming',
      subItems: [
        { label: 'Body Contouring', href: '/slimming/bodycontouring' },
        { label: 'Fat Reduction', href: '/slimming/fatreduction' },
        { label: 'Cellulite Treatment', href: '/slimming/cellulitetreatment' },
        { label: 'Weight loss Program', href: '/slimming/weightlossprogram' },
        { label: 'Body Wraps', href: '/slimming/bodywraps' },
        { label: 'Skin Tightening', href: '/slimming/skintightening' },
        { label: 'Slimming Consultation', href: '/slimming/slimmingconsultation' },
      ]
    },
    {
      label: 'Medical Treatments',
      key: 'medicaltreatment',
      subItems: [
        { label: 'Chemical peels', href: '/medicaltreatment/chemicalpeels' },
        { label: 'Acne Treatment', href: '/medicaltreatment/acne' },
        { label: 'Anti Aging Treatment', href: '/medicaltreatment/antiage' },
        { label: 'Pigmentation', href: '/medicaltreatment/pigmentation' },
        { label: 'Hyper Pigmentation', href: '/medicaltreatment/hyperpigmentation' },
        { label: 'Medicated Facial', href: '/medicaltreatment/medicatedfacial' },
        { label: 'Carbon Treatment', href: '/medicaltreatment/carbontretment' },
        { label: 'Skin Rejuvenation Treatment', href: '/medicaltreatment/skinrejuvenation' },
        { label: 'Vaginal Tightening', href: '/medicaltreatment/vaginaltightening' },
      ]
    },
    {
      label: 'Laser Treatments',
      key: 'laser',
      subItems: [
        { label: 'Laser Hair removal', href: '/laser/laserhairremoval' },
        { label: 'Laser Skin rejuvenation', href: '/laser/laserskinrejuvenation' },
        { label: 'Laser Pigmentation Treatment', href: '/laser/laserpigmentation' },
        { label: 'Laser Scar Removal', href: '/laser/laserscaremoval' },
        { label: 'Laser Tatto Removal', href: '/laser/lasertattoremoval' },
        { label: 'Fractionl CO2 Laser', href: '/laser/fractionalco2laser' },
      ]
    },
    {
      label: 'Franchise',
      href: '/franchise'
    }
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  };

  const handleNavigation = (href) => {
    navigate(href);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 600,
    textTransform: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    }
  }));

  const LogoImage = styled('img')({
    height: 50,
    cursor: 'pointer'
  });

  const renderDesktopNavigation = () => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {navigationItems.map((item) => (
        <Box key={item.key || item.label} position="relative">
          <NavButton 
            onClick={() => {
              if (item.subItems) {
                toggleDropdown(item.key);
              } else if (item.href) {
                handleNavigation(item.href);
              }
            }}
            endIcon={item.subItems && (
              activeDropdown === item.key ? 
              <KeyboardArrowUpIcon /> : 
              <KeyboardArrowDownIcon />
            )}
          >
            {item.label}
          </NavButton>
          {item.subItems && activeDropdown === item.key && (
            <Box 
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 1000,
                minWidth: 200,
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: 'background.paper',
                mt: 1
              }}
            >
              {item.subItems.map((subItem) => (
                <MenuItem 
                  key={subItem.label} 
                  onClick={() => handleNavigation(subItem.href)}
                >
                  {subItem.label}
                </MenuItem>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderMobileNavigation = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '80%',
          maxWidth: 300
        }
      }}
    >
      <Box 
        sx={{ 
          width: '100%', 
          p: 2, 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 2 
          }}
        >
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        {navigationItems.map((item) => (
          <Box key={item.key || item.label} sx={{ mb: 1 }}>
            {item.subItems ? (
              <Box>
                <Button 
                  fullWidth 
                  variant={activeDropdown === item.key ? 'contained' : 'text'}
                  onClick={() => toggleDropdown(item.key)}
                  endIcon={
                    activeDropdown === item.key ? 
                    <KeyboardArrowUpIcon /> : 
                    <KeyboardArrowDownIcon />
                  }
                >
                  {item.label}
                </Button>
                {activeDropdown === item.key && (
                  <Box sx={{ pl: 2, mt: 1 }}>
                    {item.subItems.map((subItem) => (
                      <Button 
                        key={subItem.label} 
                        fullWidth 
                        sx={{ justifyContent: 'flex-start' }}
                        onClick={() => handleNavigation(subItem.href)}
                      >
                        {subItem.label}
                      </Button>
                    ))}
                  </Box>
                )}
              </Box>
            ) : (
              <Button 
                fullWidth 
                onClick={() => handleNavigation(item.href)}
              >
                {item.label}
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0} 
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          backgroundColor: 'white'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}
          >
            {/* Logo Section */}
            <Link to="/">
              <LogoImage 
                src="/images/WhatsApp Image 2024-12-05 at 13.42.35_75a6c60f.jpg" 
                alt="Company Logo" 
              />
            </Link>

            {/* Navigation Section */}
            {isMobile ? (
              <IconButton 
                color="inherit" 
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              renderDesktopNavigation()
            )}

            {/* Mobile Menu Drawer */}
            {renderMobileNavigation()}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Content Padding to Avoid Overlap */}
      <Box component="main" sx={{ paddingTop: '64px' }}>
        {/* Page content goes here */}
      </Box>
    </>
  );
};

export default Header;