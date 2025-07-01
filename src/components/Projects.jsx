// components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    id: 1,
    title: "Tourism E-commerce Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tags: ["Front End", "UI/UX","Vite/React"],
    githubLink: "https://github.com/kamesh952/Kalm_Holidays.git",
    liveLink: "https://kalm-holidays.onrender.com/" // Add your live preview link
  },
  {
    id: 2,
    title: "Erase X Background Remover",
    category: "web",
    image: 'erasex.jpg',
    tags: ["React", "API Integration", "Python"],
    githubLink: "https://github.com/kamesh952/Erase_X.git",
    liveLink: "https://kamesh952.github.io/Erase_X/"
  },
  {
    id: 3,
    title: "AI Chatbot",
    category: "ml",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    tags: ["Gemini API", "Python-Streamlit", "NLP"],
    githubLink: "https://github.com/kamesh952/Kalm_ChatBot.git",
    liveLink: "https://kamesh952.github.io/Kalm_ChatBot/"
  },
  {
    id: 4,
    title: "KalmAura-An MERN Stack Shopping Project",
    category: "other",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    tags: ["Mongo DB", "Node JS ", "Express JS", "React/Vite"],
    githubLink: "https://github.com/kamesh952/Kalm-Aura.git",
    liveLink: "https://kalm-aura-v9j1.vercel.app/" // Add your live preview link
  },
  {
    id: 5,
    title: "Kalm Photo Editor",
    category: "ml",
    image: "https://images.pexels.com/photos/3584996/pexels-photo-3584996.jpeg",
    tags: ["Python-Flask", "Python-Streamlit ", "Python-CV"],
    githubLink: "https://github.com/kamesh952/Kalm_Photo_Editor.git",
    liveLink: "https://kalmphotoeditor.streamlit.app/"
  },
  {
    id: 6,
    title: "KALM AI RESUME ANALYSER",
    category: "ml",
    image: "https://images.pexels.com/photos/8293774/pexels-photo-8293774.jpeg",
    tags: ["Python-Streamlit", "Gemini-API-Integration"],
    githubLink: "https://github.com/kamesh952/Kalm_AI_Resume_Analyser.git",
    liveLink: "https://kalmairesumeanalyser.streamlit.app/"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setAnimated(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Box 
      id="projects"
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: '#f8f9fa',
      }}
    >
      <Box sx={{ 
        width: '90%',
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
      }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 1 }}>
          My Projects
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
          Recent works I've done
        </Typography>

        <Box 
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1,
            mb: 4,
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateY(0)' : 'translateY(50px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Button
            variant={filter === 'all' ? 'contained' : 'outlined'}
            onClick={() => setFilter('all')}
            sx={{
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'none',
              px: 2.5,
              py: 1,
            }}
          >
            All
          </Button>
          <Button
            variant={filter === 'web' ? 'contained' : 'outlined'}
            onClick={() => setFilter('web')}
            sx={{
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'none',
              px: 2.5,
              py: 1,
            }}
          >
            Web Design
          </Button>
          <Button
            variant={filter === 'ml' ? 'contained' : 'outlined'}
            onClick={() => setFilter('ml')}
            sx={{
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'none',
              px: 2.5,
              py: 1,
            }}
          >
            Machine Learning & AI
          </Button>
          <Button
            variant={filter === 'other' ? 'contained' : 'outlined'}
            onClick={() => setFilter('other')}
            sx={{
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 500,
              textTransform: 'none',
              px: 2.5,
              py: 1,
            }}
          >
            Others
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {filteredProjects.map((project, index) => (
            <Box
              key={project.id}
              sx={{
                opacity: animated ? 1 : 0,
                transform: animated ? 'translateY(0)' : 'translateY(50px)',
                transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  height: '280px',
                  width: '100%', // Ensure card takes full width of grid item
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex', // Make card a flex container
                  flexDirection: 'column', // Stack content vertically
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    '& .project-img': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-name': {
                      opacity: 0,
                    },
                    '& .project-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%', // Take full height of card
                    overflow: 'hidden',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    className="project-img"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // This ensures uniform cropping
                      objectPosition: 'center', // Center the image
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    className="project-name"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))',
                      color: 'white',
                      p: 3,
                      fontSize: '1.4rem',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      zIndex: 2,
                    }}
                  >
                    {project.title}
                  </Box>
                  <Box
                    className="project-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 3,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 3,
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {project.tags.map(tag => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            fontSize: '12px',
                            backdropFilter: 'blur(5px)',
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: '#1976d2',
                          color: 'white',
                          borderRadius: '10px',
                          fontSize: '12px',
                          px: 1.5,
                          py: 0.5,
                          '&:hover': {
                            backgroundColor: '#1565c0',
                          },
                        }}
                      >
                        Live Preview
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: '#333',
                          color: 'white',
                          borderRadius: '10px',
                          fontSize: '12px',
                          px: 1.5,
                          py: 0.5,
                          '&:hover': {
                            backgroundColor: '#747474',
                          },
                        }}
                      >
                        View Code
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;