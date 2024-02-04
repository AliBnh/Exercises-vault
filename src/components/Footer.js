import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';const Footer = () => (
  <Box 
    mt="80px" 
    bgcolor="#ffa726" 
    py="20px" 
    textAlign="center"
  >
    <Stack direction="column" alignItems="center" spacing={4}>
      <FitnessCenterIcon sx={{ width: '200px', height: '41px' }} />
      <Typography variant="h5" sx={{ fontSize: { lg: '24px', xs: '18px' }, fontStyle: 'italic' }}>
        "Don't expect different results if you keep doing the same thing!"
      </Typography>

      <Typography variant="h5" sx={{ fontSize: { lg: '24px', xs: '18px' } }}>
        Made by Ali Benhima
        <CopyrightOutlinedIcon/>
      </Typography>
    </Stack>
  </Box>
);

export default Footer;
