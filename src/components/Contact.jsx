import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      subject: !formData.subject.trim(),
      message: !formData.message.trim()
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);

    try {
      await emailjs.send(
        'service_0k1cgc7',    // replace
        'template_7lf95ap',   // replace
        formData,
        'PeE-iFtBRlbe356_1'     // replace
      );

      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success"
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box id="contact" sx={{ backgroundColor: "white", py: { xs: 4, md: 8 } }}>
      <Box sx={{ width: "90%", maxWidth: "1200px", mx: "auto", px: { xs: 2, md: 4 } }}>
        <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>Contact Me</Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mb: 4, color: "gray.main", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: "600px", mx: "auto" }}>
          Let's work together
        </Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          {/* Contact Info */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 2, md: 1 } }}>
            {[
              { icon: <LocationIcon />, title: "Location", value: "Melpattampakkam, Cuddalore" },
              { icon: <EmailIcon />, title: "Email", value: "rkameshraj7@gmail.com", href: "mailto:rkameshraj7@gmail.com" },
              { icon: <PhoneIcon />, title: "Phone", value: "+91 86808 92898", href: "tel:+918680892898" }
            ].map(({ icon, title, value, href }, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", mb: 4, gap: 2, flexWrap: "wrap" }}>
                <Box sx={{ width: "60px", height: "60px", backgroundColor: "rgba(37, 99, 235, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "primary.main", flexShrink: 0 }}>
                  {icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ mb: 1 }}>{title}</Typography>
                  <Typography variant="body1" component={href ? "a" : "p"} href={href} sx={{ color: "#007bff", textDecoration: "none", "&:hover": { color: "#0056b3", textDecoration: "underline" } }}>
                    {value}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Socials */}
            <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
              {[
                { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/your-profile" },
                { icon: <GitHubIcon />, href: "https://github.com/your-profile" },
                { icon: <FacebookIcon />, href: "https://facebook.com/your-profile" }
              ].map(({ icon, href }, i) => (
                <IconButton key={i} href={href} target="_blank" rel="noopener noreferrer" sx={{
                  width: "50px", height: "50px", borderRadius: "50%", backgroundColor: "light.main", color: "primary.main", transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "primary.main", color: "white", transform: "translateY(-5px)", boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)" }
                }}>
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Contact Form */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, order: { xs: 1, md: 2 } }}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              {["name", "email", "subject", "message"].map((field) => (
                <TextField
                  key={field}
                  fullWidth
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  variant="outlined"
                  margin="normal"
                  required
                  type={field === "email" ? "email" : "text"}
                  multiline={field === "message"}
                  rows={field === "message" ? 6 : 1}
                  error={errors[field]}
                  helperText={errors[field] ? `${field.charAt(0).toUpperCase() + field.slice(1)} is required` : ""}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": { borderColor: "#e2e8f0" },
                      "&:hover fieldset": { borderColor: "primary.main" },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.main",
                        boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)"
                      }
                    }
                  }}
                />
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={submitting}
                sx={{
                  mt: 3,
                  borderRadius: "50px",
                  fontWeight: 600,
                  py: 2,
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    transform: "translateY(-3px)",
                    boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)"
                  }
                }}
              >
                {submitting ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
