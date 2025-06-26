import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const certificates = [
  {
    id: 1,
    title: "Cloud Computing and Memory Management",
    issuer: "Amazon Web Services",
    type: "Workshop",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
    date: "Jun 2023",
  },
  {
    id: 2,
    title: "Data Science and Machine Learning",
    issuer: "Google",
    type: "Workshop",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    date: "Mar 2023",
  },
  {
    id: 3,
    title: "Data Science",
    issuer: "NPTEL-IIT",
    type: "Online Course (4 weeks)",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    date: "Jan 2023",
  },
  {
    id: 4,
    title: "GEN AI",
    issuer: "Google",
    type: "Deploy and Workshop",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    date: "Nov 2022",
  },
  {
    id: 5,
    title: "Machine Learning",
    issuer: "GDG-MIT",
    type: "Deploy and Workshop",
    image: "https://images.pexels.com/photos/3747449/pexels-photo-3747449.jpeg",
    date: "Sep 2022",
  },
  {
    id: 6,
    title: "FULL STACK",
    issuer: "GDG-MIT",
    type: "Workshop",
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
    date: "Jul 2022",
  },
];

const Certificates = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const visibleCertificates = certificates.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box
      id="certificates"
      sx={{
        py: 8,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 1,
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              left: "50%",
              bottom: "-10px",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #4776E6, #8E54E9)",
              borderRadius: "3px",
            },
          }}
        >
          My Certificates
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 4,
            color: "#718096",
          }}
        >
          Professional qualifications and achievements
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            mb: 4,
          }}
        >
          {visibleCertificates.map((cert) => (
            <Card
              key={cert.id}
              sx={{
                flex: "0 0 calc(33.333% - 20px)",
                maxWidth: "calc(33.333% - 20px)",
                minWidth: "300px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                p: 2.5,
                transition: "all 0.3s ease",
                border: "1px solid rgba(0,0,0,0.05)",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  height: "180px",
                  width: "100%",
                  mb: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {cert.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4a5568", mb: 1 }}>
                  {cert.issuer}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#718096" }}>
                    {cert.date}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    href="https://drive.google.com/drive/u/0/folders/1KKqxGXmSA7RdG1UoNMzh12M5n-7UZNxI"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: "4px",
                      textTransform: "none",
                      fontWeight: 500,
                      px: 2,
                      py: 0.5,
                      borderColor: "#4776E6",
                      color: "#4776E6",
                      "&:hover": {
                        backgroundColor: "#4776E6",
                        color:"white"
                       
                      },
                    }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mt: 2,
          }}
        >
          <Button
            onClick={handlePrev}
            disabled={currentPage === 0}
            startIcon={<ArrowBackIosIcon sx={{ fontSize: "14px" }} />}
            sx={{
              textTransform: "none",
              color: currentPage === 0 ? "#CBD5E0" : "#4776E6",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "transparent",
                color: "#3b66c7",
              },
            }}
          >
            Previous
          </Button>

          <Box sx={{ display: "flex", gap: 1 }}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentPage(index)}
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    index === currentPage ? "#4776E6" : "#E2E8F0",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>

          <Button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: "14px" }} />}
            sx={{
              textTransform: "none",
              color: currentPage >= totalPages - 1 ? "#CBD5E0" : "#4776E6",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "transparent",
                color: "#3b66c7",
              },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Certificates;
