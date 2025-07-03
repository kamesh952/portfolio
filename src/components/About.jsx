// components/About.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-scroll';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'HTML/CSS', percent: 95 },
    { name: 'JavaScript', percent: 90 },
    { name: 'React', percent: 85 },
    { name: 'Node.js', percent: 80 },
    { name: 'UI/UX Design', percent: 75 },
  ];

  return (
    <Box 
      id="about"
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        py: { xs: 4, md: 8 },
      }}
    >
      <Box sx={{ 
        width: '90%',
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
      }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 2 }}>
          About Me
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            mb: 4,
            color: 'gray.main',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Get to know me better
        </Typography>
        
        {/* Main Content Container */}
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
            mt: 4,
          }}
        >
          {/* Image Section - Left on Desktop */}
          <Box
            sx={{
              flex: { xs: 'none', md: '0 0 auto' },
              order: { xs: 1, md: 1 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: animated ? 'fadeInLeft 1s ease forwards' : 'none',
            }}
          >
            <Box
              component="img"
              src="/kamesh.png"
              alt="Kamesh R"
              loading="lazy"
              sx={{
                width: { xs: 'clamp(200px, 60vw, 280px)', md: 'clamp(300px, 35vw, 450px)' },
                height: { xs: 'clamp(200px, 60vw, 280px)', md: 'clamp(300px, 35vw, 450px)' },
                objectFit: 'cover',
                borderRadius: '50%',
                border: '8px solid white',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
              }}
            />
          </Box>

          {/* Content Section - Right on Desktop */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 2 },
              textAlign: { xs: 'center', md: 'left' },
              animation: animated ? 'fadeInRight 1s ease forwards' : 'none',
              ml: { xs: 0, md: 4 },
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Hello! I'm Kamesh R, an enthusiastic IT student at MIT, Chennai, with a deep interest in web development and technology. I'm passionate about building sleek, functional websites and exploring the ever-evolving digital world.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              I enjoy combining logical thinking with creativity to solve real-world problems through code. Currently, I'm honing my skills in both front-end and back-end development, and always eager to learn new technologies to stay ahead in the tech game.
            </Typography>
            
            {/* Skills Section */}
            <Box sx={{ mt: 4 }}>
              {skills.map((skill, index) => (
                <Box 
                  key={skill.name} 
                  sx={{ 
                    mb: 3, 
                    animation: animated ? `fadeInUp 1s ease forwards ${index * 0.1}s` : 'none',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontWeight: 600, 
                        fontSize: '1rem',
                        color: '#333',
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 'primary.main', 
                        fontSize: '0.95rem',
                        fontWeight: 600,
                      }}
                    >
                      {skill.percent}%
                    </Typography>
                  </Box>
                  <Box 
                    sx={{ 
                      width: '100%', 
                      height: '8px', 
                      backgroundColor: '#e2e8f0', 
                      borderRadius: '10px', 
                      overflow: 'hidden',
                    }}
                  >
                    <Box 
                      sx={{ 
                        height: '100%', 
                        backgroundColor: 'primary.main', 
                        borderRadius: '10px', 
                        width: animated ? `${skill.percent}%` : '0',
                        transition: 'width 1.5s ease',
                      }} 
                    />
                  </Box>
                </Box>
              ))}
            </Box>
            
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              sx={{ 
                mt: 4,
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                animation: animated ? 'fadeInUp 1s ease forwards 0.6s' : 'none',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              Hire Me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;