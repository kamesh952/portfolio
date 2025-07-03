// components/Projects.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardMedia, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";

const projects = [
  {
    id: 1,
    title: "Tourism E-commerce Website",
    category: "web",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    tags: ["Front End", "UI/UX", "Vite/React"],
    githubLink: "https://github.com/kamesh952/Kalm_Holidays.git",
    liveLink: "https://kalmholidays.onrender.com/",
  },
  {
    id: 2,
    title: "Erase X Background Remover",
    category: "web",
    image: "erasex.jpg",
    tags: ["React", "API Integration", "Python"],
    githubLink: "https://github.com/kamesh952/Erase-X.git",
    liveLink: "https://kamesh952.github.io/Erase-X/",
  },
  {
    id: 3,
    title: "Hotel Database Management-DBMS Project",
    category: "web",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg", // Hotel reception with warm ambiance
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
    image:
      "https://media.istockphoto.com/id/1405395631/photo/professional-retoucher-working-on-graphic-tablet-at-desk-in-office.jpg?s=612x612&w=is&k=20&c=Oox3Ep4fnW3RvHt2Wc5znu9UWJaDYouE4zDAIVkRnbo=",
    tags: ["Python-Flask", "Python-Streamlit", "Python-CV"],
    githubLink: "https://github.com/kamesh952/Kalm_Photo_Editor.git",
    liveLink: "https://kalmphotoeditor.streamlit.app/",
  },
  {
    id: 6,
    title: "KALM AI RESUME ANALYSER",
    category: "ml",
    image: "https://images.pexels.com/photos/8293774/pexels-photo-8293774.jpeg",
    tags: ["Python-Streamlit", "Gemini-API-Integration"],
    githubLink: "https://github.com/kamesh952/Kalm_AI_Resume_Analyser.git",
    liveLink: "https://kalmairesumeanalyser.streamlit.app/",
  },
  {
    id: 7,
    title: "AI Chatbot",
    category: "ml",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    tags: ["Gemini API", "React/vite"],
    githubLink: "https://github.com/kamesh952/Kalm_ChatBot.git",
    liveLink: "https://kamesh952.github.io/Kalm_ChatBot/",
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
            color: "gray.main",
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
            Web Design
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
            Machine Learning & AI
          </Button>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
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
      </Box>
    </Box>
  );
};

export default Projects;
