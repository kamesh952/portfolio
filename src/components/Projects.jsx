// components/Projects.jsx
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardMedia, Chip, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Version Text AI - Add text Behind Image",
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
    image: "logo.png",
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
    githubLink: "https://github.com/kamesh952/hotel_db_client.git",
    liveLink: "https://hotel-db-client.onrender.com/",
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
    image: "https://static.vecteezy.com/system/resources/previews/027/776/370/non_2x/abstract-chatbot-ai-artificial-intelligence-chatbot-ai-is-a-software-application-used-to-chat-with-humans-with-network-technology-on-a-blue-background-vector.jpg",
    tags: ["Gemini API", "React/vite"],
    githubLink: "https://github.com/kamesh952/Kalm_ChatBot.git",
    liveLink: "https://kamesh952.github.io/Kalm_ChatBot/",
  },
  {
    id: 8,
    title: "FreshMart - An E-commerce Website",
    category: "web",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
    tags: ["React", "Node js", "Express js", "MongoDB"],
    githubLink: "https://github.com/kamesh952/fmart.git",
    liveLink: "https://fmart-frontend.onrender.com",
    featured: true,
  },
  {
    id: 9,
    title: "Skill Sync AI - A Resume Analyzer AI",
    category: "ml",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
    tags: ["Node js", "Gemini API Integration", "HTML"],
    githubLink: "https://github.com/kamesh952/skillsync_ai_client.git",
    liveLink: "https://skillsync-ai-client.onrender.com/"
  },
  {
    id: 10,
    title: "Event Hub - An Event Management System",
    category: "web",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
    tags: ["React", "Node js", "Express js", "PostgreSQL"],
    githubLink: "https://github.com/kamesh952/Event_Management",
    liveLink: "https://event-db-client.onrender.com/"
  },
  {
    id: 11,
    title: "Tourism E-commerce Website - A Tourism Booking Project",
    category: "web",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
    tags: ["Front End", "UI/UX", "Vite/React"],
    githubLink: "https://github.com/kamesh952/Kalm_Holidays.git",
    liveLink: "https://kalmholidays.onrender.com/",
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
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

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project) => project.category === filter);

  const ProjectCard = ({ project, index }) => {
    const isML = project.category === "ml";
    const useHorizontalLayout = (filter === "web" || filter === "ml") && !isMobile;

    if (useHorizontalLayout) {
      return (
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: "auto", md: "300px" },
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
              height: { xs: "200px", md: "100%" },
              overflow: "hidden",
              position: "relative",
              minHeight: { xs: "200px", md: "auto" },
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
              p: { xs: 2, md: 3 },
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
                  fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.4rem" },
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
                  fontSize: { xs: "12px", sm: "14px" },
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
                  fontSize: { xs: "12px", sm: "14px" },
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
          height: { xs: "280px", sm: project.featured ? "350px" : "300px" },
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
              width: project.featured ? 36 : "auto",
              height: project.featured ? 36 : "auto",
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
            {project.featured ? <StarIcon sx={{ fontSize: 20 }} /> : "AI Project"}
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
              p: { xs: 2, sm: 3 },
              fontSize: { xs: "1.2rem", sm: project.featured ? "1.5rem" : "1.3rem" },
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
                "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              p: { xs: 2, sm: 3 },
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
                fontSize: { xs: "1.1rem", sm: project.featured ? "1.4rem" : "1.2rem" },
                fontWeight: 600,
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
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    color: "white",
                    fontSize: { xs: "10px", sm: project.featured ? "12px" : "11px" },
                    backdropFilter: "blur(5px)",
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, flexWrap: "wrap" }}>
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
                  borderRadius: "8px",
                  fontSize: { xs: "11px", sm: project.featured ? "13px" : "12px" },
                  fontWeight: 600,
                  px: { xs: 1.5, sm: project.featured ? 2 : 1.5 },
                  py: { xs: 0.5, sm: project.featured ? 0.75 : 0.5 },
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
                  borderRadius: "8px",
                  fontSize: { xs: "11px", sm: project.featured ? "13px" : "12px" },
                  fontWeight: 600,
                  px: { xs: 1.5, sm: project.featured ? 2 : 1.5 },
                  py: { xs: 0.5, sm: project.featured ? 0.75 : 0.5 },
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
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        backgroundColor: "#f8f9fa",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: { xs: 1, sm: 2 },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
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
            mb: { xs: 4, sm: 5, md: 6 },
            color: "text.secondary",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Recent works I've done across web development and AI applications
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 2 },
            mb: { xs: 4, sm: 5, md: 6 },
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
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                minWidth: { xs: "100px", sm: "140px" },
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: 
              filter === "web" || filter === "ml"
                ? "1fr"
                : {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
            gap: { xs: 3, sm: 4 },
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
                ...(filter === "all" &&
                  project.featured && {
                    gridColumn: { xs: "1 / -1", sm: "1 / -1" },
                  }),
              }}
            >
              <ProjectCard project={project} index={index} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;