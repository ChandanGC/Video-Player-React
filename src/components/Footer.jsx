import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ mt: "auto", p: "0.2rem", bgcolor: "#4b4b4b", zIndex: 1201 }}>
      <Typography sx={{ textAlign: "center", verticalAlign: "middle" }}>
        Made by{" "}
        <a
          style={{ textDecoration: "none", color: "#8ab4f8" }}
          target="_blank"
          href="https://github.com/ChandanGC"
        >
          Chandan GC
        </a>
      </Typography>
    </Box>
  );
}

export default Footer