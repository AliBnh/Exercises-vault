import { Box,Typography, Button } from '@mui/material'
import React from 'react'
import heroBannerImage from '../assets/brett-jordan-U2q73PfHFpM-unsplash.jpg'
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt:{lg:'212px',xs:'70px'},
        ml:{sm:'50px'}
      }}
      position="relative"
      p="20px"
    >
      <Typography 
        variant="h1" 
        color='primary'
        fontWeight="600"
        fontSize="26px"
        >
        EXERCISES VAULT
      </Typography>
      <Typography 
        fontWeight={700}
        sx={{
          fontSize:{lg:'44px',xs:'40px'}
            }}
        mb="23px"
        mt="30px"
        >
        Being weak is <br/>  <span style={{textShadow:"5px 5px #d3d3d3"}}>Dangerous</span>
      </Typography>
      <Typography 
        fontSize="22px"
        lineHeight="35px"
        mb={4}
        >
        Unleash the hidden potential within you
      </Typography>
      <Button 
        variant="contained" 
        color='primary'
        href='#exercises'
        sx={{
          backgroundColor:'primary',
          padding:'10px',
          color:'white'
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="primary"
        sx={{
          display:{lg:'block',xs:'none'},
          opacity:0.1,
          marginTop:'30px',
          marginBottom:'-30px'

        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={heroBannerImage} alt="banner" className='hero-banner-img'/>
    </Box>
    
  )
}

export default HeroBanner