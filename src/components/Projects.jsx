// components/Projects.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardMedia, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";

// Sample projects data - replace with your actual projects
const projects = [
    {
    id: 1,
    title: "Version Text AI - Add text Behind Image ",
    category: "ml",
    image: "https://vheer.com/_next/image?url=%2Fimages%2FlandingPages%2Ftext_behind_image%2Fmain_image_1.webp&w=3840&q=75",
    tags: ["HTML", "UI/UX", "Javascript", "Image Rendering"],
    githubLink: "https://github.com/kamesh952/Kalm_Holidays.git",
    liveLink: "https://visiontest-ai.onrender.com/",
  },
    {
      id: 2,
      title: "Erase X Background Remover",
      category: "ml",
      image: "erasex.jpg",
      tags: ["HTML", "UI/UX", "Javascript", "API Integration"],
      githubLink: "https://github.com/kamesh952/Erase-X.git",
      liveLink: "https://erase-x.onrender.com/",
    },
  {
    id: 3,
    title: "Hotel Database Management-DBMS Project",
    category: "web",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    tags: ["React", "Mongo DB", "Backend-Python"],
    githubLink: "https://github.com/kamesh952/AuraStays.git",
    liveLink: "https://aurastays.onrender.com/",
  },
  {
    id: 4,
    title: "KalmAura - A MERN Stack Shopping Project",
    category: "web",
    image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
    tags: ["MongoDB", "Node.js", "Express.js", "React (Vite)"],
    githubLink: "https://github.com/kamesh952/Kalm-Aura.git",
    liveLink: "https://kalmaura-pi.vercel.app/",
    featured: true,
  },
  {
    id: 5,
    title: "Kalm Photo Editor",
    category: "ml",
    image: "https://media.istockphoto.com/id/1405395631/photo/professional-retoucher-working-on-graphic-tablet-at-desk-in-office.jpg?s=612x612&w=is&k=20&c=Oox3Ep4fnW3RvHt2Wc5znu9UWJaDYouE4zDAIVkRnbo=",
    tags: ["Python-Flask", "Python-Streamlit", "Python-CV"],
    githubLink: "https://github.com/kamesh952/Kalm_Photo_Editor.git",
    liveLink: "https://kalmphotoeditor.streamlit.app/",
    
  },
  {
    id: 6,
    title: "Convert iQ - Image format Converter",
    category: "ml",
    image: "https://content-management-files.canva.com/35bbc1b1-dc94-48c0-883f-1f0ffcb4fd8e/tools-feature_image-converter_lead_01_2x.jpg",
    tags: ["HTML", "UI/UX", "Javascript"],
    githubLink: "https://github.com/kamesh952/Convert-IQ.git",
    liveLink: "https://convert-iq.onrender.com/",
  },
  {
    id: 7,
    title: "AI Chatbot",
    category: "ml",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    tags: ["Gemini API", "React/vite"],
    githubLink: "https://github.com/kamesh952/Kalm_ChatBot.git",
    liveLink: "https://kamesh952.github.io/Kalm_ChatBot/",
  },
  {
    id: 8,
    title: "Tourism E-commerce Website -  A Tourism Booking Project",
    category: "web",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
   tags: ["Front End", "UI/UX", "Vite/React"],
    githubLink: "https://github.com/kamesh952/Visiontest-AI.git",
    liveLink: "https://kalmholidays.onrender.com/",
    featured: true,
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", mb: 1 }}>
          My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "text.secondary", // Fixed: changed from "gray.main" to proper MUI color
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          Recent works I've done
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            mb: 4,
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <Button
            variant={filter === "all" ? "contained" : "outlined"}
            onClick={() => setFilter("all")}
            sx={{
              borderRadius: "30px",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              px: 2.5,
              py: 1,
            }}
          >
            All
          </Button>
          <Button
            variant={filter === "web" ? "contained" : "outlined"}
            onClick={() => setFilter("web")}
            sx={{
              borderRadius: "30px",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              px: 2.5,
              py: 1,
            }}
          >
            Website
          </Button>
          <Button
            variant={filter === "ml" ? "contained" : "outlined"}
            onClick={() => setFilter("ml")}
            sx={{
              borderRadius: "30px",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              px: 2.5,
              py: 1,
            }}
          >
            AI Application
          </Button>
        </Box>

        {filter === "web" || filter === "ml" ? (
          // Special layout for Website and AI projects
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr",
              },
              gap: 4,
            }}
          >
            {filteredProjects.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateY(0)" : "translateY(50px)",
                  transition: `opacity 0.6s ease ${
                    index * 0.1
                  }s, transform 0.6s ease ${index * 0.1}s`,
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    height: { xs: "auto", md: "300px" },
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    border: filter === "ml" ? "2px solid #9c27b0" : "none",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: filter === "ml" 
                        ? "0 15px 30px rgba(156, 39, 176, 0.2)" 
                        : "0 15px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: "40%" },
                      height: { xs: "200px", md: "100%" },
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                    {filter === "ml" && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          backgroundColor: "#9c27b0",
                          color: "white",
                          borderRadius: "20px",
                          px: 2,
                          py: 0.5,
                          fontSize: "12px",
                          fontWeight: 600,
                          zIndex: 2,
                        }}
                      >
                        AI PROJECT
                      </Box>
                    )}
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100%", md: "60%" },
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        {project.title}
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: filter === "ml" 
                                ? "rgba(156, 39, 176, 0.1)" 
                                : "rgba(25, 118, 210, 0.1)",
                              color: filter === "ml" ? "#9c27b0" : "primary.main",
                            }}
                          />
                        ))}
                      </Box>
                      {project.featured && (
                        <Chip
                          icon={<StarIcon />}
                          label="Featured"
                          color={filter === "ml" ? "secondary" : "primary"}
                          size="small"
                          sx={{ mt: 1 }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mt: 2,
                        flexWrap: "wrap",
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<LaunchIcon />}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: "10px",
                          textTransform: "none",
                          backgroundColor: filter === "ml" ? "#9c27b0" : undefined,
                          "&:hover": {
                            backgroundColor: filter === "ml" ? "#7b1fa2" : undefined,
                          },
                        }}
                      >
                        {filter === "ml" ? "Live Preview" : "Live Preview"}
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderRadius: "10px",
                          textTransform: "none",
                          borderColor: filter === "ml" ? "#9c27b0" : undefined,
                          color: filter === "ml" ? "#9c27b0" : undefined,
                          "&:hover": {
                            borderColor: filter === "ml" ? "#7b1fa2" : undefined,
                            backgroundColor: filter === "ml" ? "rgba(156, 39, 176, 0.04)" : undefined,
                          },
                        }}
                      >
                        View Code
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        ) : (
          // Default layout for other filters
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
            }}
          >
            {filteredProjects.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  opacity: animated ? 1 : 0,
                  transform: animated ? "translateY(0)" : "translateY(50px)",
                  transition: `opacity 0.6s ease ${
                    index * 0.1
                  }s, transform 0.6s ease ${index * 0.1}s`,
                  display: "flex",
                  gridColumn: project.featured
                    ? { xs: "1 / -1", sm: "1 / -1" }
                    : "auto",
                }}
              >
                <Card
                  sx={{
                    height: project.featured ? "350px" : "280px",
                    width: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: project.featured
                      ? "0 5px 20px rgba(0, 0, 0, 0.2)"
                      : "0 5px 15px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    border: project.featured ? "2px solid #1976d2" : "none",
                    "&:hover": {
                      transform: project.featured
                        ? "translateY(-15px)"
                        : "translateY(-10px)",
                      boxShadow: project.featured
                        ? "0 20px 40px rgba(0, 0, 0, 0.3)"
                        : "0 15px 30px rgba(0, 0, 0, 0.2)",
                      "& .project-img": {
                        transform: "scale(1.1)",
                      },
                      "& .project-name": {
                        opacity: 0,
                      },
                      "& .project-overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {project.featured && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "#1976d2",
                        color: "white",
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 4,
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      }}
                    >
                      <StarIcon />
                    </Box>
                  )}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      className="project-img"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <Box
                      className="project-name"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
                        color: "white",
                        p: 3,
                        fontSize: project.featured ? "1.6rem" : "1.4rem",
                        fontWeight: project.featured ? 600 : 500,
                        transition: "all 0.3s ease",
                        zIndex: 2,
                      }}
                    >
                      {project.title}
                    </Box>
                    <Box
                      className="project-overlay"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        p: 3,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        zIndex: 3,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "white",
                          mb: 1,
                          fontSize: project.featured ? "1.5rem" : "1.25rem",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                      >
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              color: "white",
                              fontSize: project.featured ? "13px" : "12px",
                              backdropFilter: "blur(5px)",
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            backgroundColor: "#1976d2",
                            color: "white",
                            borderRadius: "10px",
                            fontSize: project.featured ? "14px" : "12px",
                            px: project.featured ? 2 : 1.5,
                            py: project.featured ? 1 : 0.5,
                            "&:hover": {
                              backgroundColor: "#1565c0",
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
                            backgroundColor: "#333",
                            color: "white",
                            borderRadius: "10px",
                            fontSize: project.featured ? "14px" : "12px",
                            px: project.featured ? 2 : 1.5,
                            py: project.featured ? 1 : 0.5,
                            "&:hover": {
                              backgroundColor: "#747474",
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
        )}
      </Box>
    </Box>
  );
};

export default Projects;