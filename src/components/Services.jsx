import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import {
  Code as CodeIcon,
  PhoneAndroid as MobileIcon,
  Brush as DesignIcon,
  Storage as ServerIcon,
  Store as StoreIcon,
  TrendingUp as SeoIcon
} from '@mui/icons-material';

const services = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Web Development",
    description: "Custom websites built with clean, efficient code and optimized for performance and scalability."
  },
  {
    icon: <MobileIcon fontSize="large" />,
    title: "Responsive Design",
    description: "Mobile-first designs that work flawlessly across all devices and screen sizes."
  },
  {
    icon: <DesignIcon fontSize="large" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging interfaces and meaningful experiences."
  },
  {
    icon: <ServerIcon fontSize="large" />,
    title: "Backend Development",
    description: "Robust server-side solutions with secure APIs and efficient database management."
  },
  {
    icon: <StoreIcon fontSize="large" />,
    title: "E-Commerce Solutions",
    description: "Custom online stores with secure payment gateways and seamless user experience."
  },
  {
    icon: <SeoIcon fontSize="large" />,
    title: "SEO Optimization",
    description: "Improve your site's visibility and ranking with technical SEO best practices."
  }
];

const Services = () => {
  return (
    <Box 
      id="services"
      sx={{
        backgroundColor: '#f8fafc',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Box sx={{ 
        maxWidth: '1200px',
        mx: 'auto',
      }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
            color: '#1e293b',
            mb: 2
          }}>
            My Services
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#64748b',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' }
          }}>
            What I can do for you
          </Typography>
        </Box>
        
        {/* Services Grid - 3 cards per row */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 4,
        }}>
          {services.map((service) => (
            <Card
              key={service.title}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 4,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                   transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                    '& .service-icon': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                    },
                    '& .MuiTypography-root': {
                      color: 'white',
                    },
                    '&:before': {
                      opacity: 1,
                    },
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    zIndex: -1,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                }}
              
            >
              <CardContent sx={{ p: 0 }}>
                <Box
                  className="service-icon-container"
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: '#e0f2fe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    mx: 'auto',
                    color: '#0369a1',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {service.icon}
                </Box>
                
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    color: '#1e293b',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {service.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#64748b',
                    lineHeight: 1.6,
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;