// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <AppBar
      position="fixed"
      id="navbar"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&.scrolled': {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          py: 1,
        },
      }}
    >
      <Toolbar sx={{ maxWidth: '1200px', width: '90%', mx: 'auto', px: { xs: 0, md: 2 } }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box
            component="span"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontWeight: 700,
              color: 'primary.main',
              '& span': {
                color: 'accent.main',
              },
            }}
          >
            Kamesh<span>R</span>
          </Box>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                textDecoration: 'none',
                color: 'black',
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: 0,
                    height: '2px',
                    backgroundColor: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {item.name}
              </Box>
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' }, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)',
            color: 'black',
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.id}
              component={Link}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: 'center',
                '&:hover .MuiTypography-root': {
                  color: 'primary.main',
                  fontWeight: 600,
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: 'black',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
