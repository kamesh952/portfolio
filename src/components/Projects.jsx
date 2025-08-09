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
    title: "Version Text AI - Add text Behind Image",
    category: "ml",
    image:
      "https://vheer.com/_next/image?url=%2Fimages%2FlandingPages%2Ftext_behind_image%2Fmain_image_1.webp&w=3840&q=75",
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
    image:
      "https://media.istockphoto.com/id/1405395631/photo/professional-retoucher-working-on-graphic-tablet-at-desk-in-office.jpg?s=612x612&w=is&k=20&c=Oox3Ep4fnW3RvHt2Wc5znu9UWJaDYouE4zDAIVkRnbo=",
    tags: ["Python-Flask", "Python-Streamlit", "Python-CV"],
    githubLink: "https://github.com/kamesh952/Kalm_Photo_Editor.git",
    liveLink: "https://kalmphotoeditor.streamlit.app/",
  },
  {
    id: 6,
    title: "Convert iQ - Image format Converter",
    category: "ml",
    image:
      "https://content-management-files.canva.com/35bbc1b1-dc94-48c0-883f-1f0ffcb4fd8e/tools-feature_image-converter_lead_01_2x.jpg",
    tags: ["HTML", "UI/UX", "Javascript"],
    githubLink: "https://github.com/kamesh952/Convert-IQ.git",
    liveLink: "https://convert-iq.onrender.com/",
  },
  {
    id: 7,
    title: "AI Chatbot",
    category: "ml",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    tags: ["Gemini API", "React/vite"],
    githubLink: "https://github.com/kamesh952/Kalm_ChatBot.git",
    liveLink: "https://kamesh952.github.io/Kalm_ChatBot/",
  },
  {
    id: 8,
    title: "FreshMart - An E commerce Website",
    category: "web", // Fixed: was "ML" instead of "ml"
    image: "organic-fru.jpg", // Changed to more relevant image
    tags: ["React", "Node js", "Express js", "MongoDB"],
    githubLink: "https://github.com/kamesh952/fmart.git",
    liveLink: "https://fmart-frontend.onrender.com",
    featured:true,// Fixed: was pointing to wrong link
  },
 
  {
    id: 9,
    title: "Skill Sync AI - A Resume Analyzer AI",
    category: "ml", // Fixed: was "ML" instead of "ml"
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg", // Changed to more relevant image
    tags: ["Node js", "Gemini API Integration", "HTML"],
    githubLink: "https://github.com/kamesh952/SkillSync-AI.git",
    liveLink: "https://skillsync-ai-3-mlru.onrender.com/"
  },
  {
    id: 10,
    title: "Event Hub - A Event Management System",
    category: "web", // Fixed: was "ML" instead of "ml"
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg", // Changed to more relevant image
    tags: ["React", "Node js", "Express js", "PostgreSQL"],
    githubLink: "https://github.com/kamesh952/Event_Management",
    liveLink: "https://event-db-client.onrender.com/" // Fixed: was pointing to wrong link
  },
   {
    id:11,
    title: "Tourism E-commerce Website - A Tourism Booking Project",
    category: "web",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    tags: ["Front End", "UI/UX", "Vite/React"],
    githubLink: "https://github.com/kamesh952/Kalm_Holidays.git", // Fixed: was pointing to wrong repo
    liveLink: "https://kalmholidays.onrender.com/",
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

  // Unified project card component for consistent styling
  const ProjectCard = ({ project, index, layout = "card" }) => {
    const isML = project.category === "ml";

    if (layout === "horizontal") {
      return (
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: "auto", md: "320px" },
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
            border: isML
              ? "2px solid #9c27b0"
              : project.featured
              ? "2px solid #1976d2"
              : "1px solid rgba(0,0,0,0.1)",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: isML
                ? "0 20px 40px rgba(156, 39, 176, 0.25)"
                : project.featured
                ? "0 20px 40px rgba(25, 118, 210, 0.25)"
                : "0 20px 40px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              height: { xs: "220px", md: "100%" },
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
            {/* Category badge */}
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor: isML ? "#9c27b0" : "#1976d2",
                color: "white",
                borderRadius: "20px",
                px: 2,
                py: 0.5,
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                zIndex: 2,
              }}
            >
              {isML ? "AI Project" : "Web Project"}
            </Box>
            {/* Featured badge */}
            {project.featured && (
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: "#ff9800",
                  color: "white",
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                }}
              >
                <StarIcon sx={{ fontSize: 20 }} />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: isML
                        ? "rgba(156, 39, 176, 0.1)"
                        : "rgba(25, 118, 210, 0.1)",
                      color: isML ? "#9c27b0" : "#1976d2",
                      fontWeight: 500,
                      fontSize: "11px",
                    }}
                  />
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: "auto",
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
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  backgroundColor: isML ? "#9c27b0" : "#1976d2",
                  "&:hover": {
                    backgroundColor: isML ? "#7b1fa2" : "#1565c0",
                  },
                }}
              >
                Live Preview
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
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderColor: isML ? "#9c27b0" : "#1976d2",
                  color: isML ? "#9c27b0" : "#1976d2",
                  "&:hover": {
                    borderColor: isML ? "#7b1fa2" : "#1565c0",
                    backgroundColor: isML
                      ? "rgba(156, 39, 176, 0.04)"
                      : "rgba(25, 118, 210, 0.04)",
                  },
                }}
              >
                View Code
              </Button>
            </Box>
          </Box>
        </Card>
      );
    }

    // Default card layout
    return (
      <Card
        sx={{
          height: project.featured ? "380px" : "320px",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          display: "flex",
          flexDirection: "column",
          border: project.featured
            ? "2px solid #1976d2"
            : isML
            ? "2px solid #9c27b0"
            : "1px solid rgba(0,0,0,0.1)",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: project.featured
              ? "0 25px 50px rgba(25, 118, 210, 0.3)"
              : isML
              ? "0 25px 50px rgba(156, 39, 176, 0.3)"
              : "0 25px 50px rgba(0, 0, 0, 0.2)",
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
        {/* Featured/Category badge */}
        {(project.featured || isML) && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: project.featured
                ? "#ff9800"
                : isML
                ? "#9c27b0"
                : "#1976d2",
              color: "white",
              borderRadius: project.featured ? "50%" : "20px",
              width: project.featured ? 40 : "auto",
              height: project.featured ? 40 : "auto",
              px: project.featured ? 0 : 2,
              py: project.featured ? 0 : 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 4,
              fontSize: project.featured ? "inherit" : "11px",
              fontWeight: 600,
              textTransform: project.featured ? "none" : "uppercase",
            }}
          >
            {project.featured ? <StarIcon /> : "AI Project"}
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

          {/* Project name overlay */}
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

          {/* Hover overlay */}
          <Box
            className="project-overlay"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))",
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
                mb: 2,
                fontSize: project.featured ? "1.5rem" : "1.25rem",
                fontWeight: 600,
              }}
            >
              {project.title}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    color: "white",
                    fontSize: project.featured ? "13px" : "12px",
                    backdropFilter: "blur(5px)",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="small"
                startIcon={<LaunchIcon />}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: isML ? "#9c27b0" : "#1976d2",
                  color: "white",
                  borderRadius: "10px",
                  fontSize: project.featured ? "14px" : "12px",
                  fontWeight: 600,
                  px: project.featured ? 2.5 : 2,
                  py: project.featured ? 1 : 0.75,
                  "&:hover": {
                    backgroundColor: isML ? "#7b1fa2" : "#1565c0",
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
                  fontWeight: 600,
                  px: project.featured ? 2.5 : 2,
                  py: project.featured ? 1 : 0.75,
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                View Code
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    );
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 6, md: 10 },
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
        {/* Header */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 700,
            background: "linear-gradient(45deg, #1976d2, #9c27b0)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "text.secondary",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Recent works I've done across web development and AI applications
        </Typography>

        {/* Filter buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 6,
            opacity: animated ? 1 : 0,
            transform: animated ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {[
            { key: "all", label: "All Projects" },
            { key: "web", label: "Web Development" },
            { key: "ml", label: "AI Applications" },
          ].map((filterOption) => (
            <Button
              key={filterOption.key}
              variant={filter === filterOption.key ? "contained" : "outlined"}
              onClick={() => setFilter(filterOption.key)}
              sx={{
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none",
                px: 3,
                py: 1.5,
                minWidth: "140px",
                transition: "all 0.3s ease",
                ...(filter === filterOption.key && {
                  background: "linear-gradient(45deg, #1976d2, #9c27b0)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                }),
              }}
            >
              {filterOption.label}
            </Button>
          ))}
        </Box>

        {/* Projects grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              filter === "web" || filter === "ml"
                ? "1fr" // Single column for horizontal layout
                : {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
            gap: 4,
            alignItems: "stretch",
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
                // Featured projects span full width in grid layout
                ...(filter === "all" &&
                  project.featured && {
                    gridColumn: { xs: "1 / -1", sm: "1 / -1" },
                  }),
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                layout={
                  filter === "web" || filter === "ml" ? "horizontal" : "card"
                }
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
