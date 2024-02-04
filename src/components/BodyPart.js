import React from 'react';
import { Stack, Typography } from '@mui/material';
import all from '../assets/all.png';
import back from '../assets/back2.png';
import calves from '../assets/calves.png';
import delts from '../assets/delts.png';
import legs from '../assets/legs.png';
import waist from '../assets/waist.png';
import forearm from '../assets/forearm.png';
import chest from '../assets/chest.png';
import neck from '../assets/neck.png';
import cardio from '../assets/cardio.png';
import arm from '../assets/arm.png';


const getIconForBodyPart = (bodyPart) => {
  switch (bodyPart) {
    case 'all':
      return all;
    case 'back':
      return back;
    case 'chest':
      return chest;
    case 'cardio':
      return cardio;
    case 'lower arms':
      return forearm;
    case 'lower legs':
      return calves;
    case 'neck':
      return neck;
    case 'shoulders':
      return delts ;
    case 'upper arms':
      return arm;
    case 'upper legs':
      return legs;
    case 'waist':
      return waist ;
    default:
      return all; 
  }
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => 
{
  const iconSrc = getIconForBodyPart(item);

  return (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? 
      {
        borderTop: '4px solid #ffa726',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px', 
        height: '282px',
        cursor: 'pointer',
         gap: '47px' 
      } : {
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px' 
      }
    }
    onClick={() => {
      console.log(item);
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={iconSrc} alt="bodyPart" style={{ width: '60px', height: '60px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#ff9100" textTransform="capitalize"> {item}</Typography>
  </Stack>
);}

export default BodyPart;