// components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        backgroundColor: 'dark.main',
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Box sx={{ 
        width: '90%',
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
      }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant="h4" 
              component={MuiLink} 
              href="#" 
              sx={{ 
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                fontWeight: 700,
                color: 'white',
                mb: 3,
                display: 'inline-block',
                textDecoration: 'none',
                '& span': {
                  color: 'accent.main',
                }
              }}
            >
              Kamesh<span>R</span>
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
              Creating elegant digital experiences with modern technologies and creative solutions.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                position: 'relative',
                pb: 1,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '2px',
                  backgroundColor: 'primary.main',
                },
              }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <MuiLink
                    href={`#${item.toLowerCase()}`}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        color: 'white',
                        pl: '5px',
                      },
                    }}
                  >
                    <ChevronRightIcon fontSize="small" sx={{ color: 'primary.main', mr: 1, fontSize: '0.8rem' }} />
                    {item}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                position: 'relative',
                pb: 1,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '2px',
                  backgroundColor: 'primary.main',
                },
              }}
            >
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 1.5 }}>
              <LocationIcon fontSize="small" sx={{ color: 'primary.main', mt: '3px' }} />
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Chrompet, Chennai
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, gap: 1.5 }}>
              <EmailIcon fontSize="small" sx={{ color: 'primary.main', mt: '3px' }} />
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                rkameshraj7@gmail.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <PhoneIcon fontSize="small" sx={{ color: 'primary.main', mt: '3px' }} />
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                www.linkedin.com/in/kamesh-ramesh
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 4,
            mt: 4,
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <Typography variant="body2">
            &copy; 2025 Kamesh R. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;