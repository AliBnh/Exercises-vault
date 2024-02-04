import React from 'react';
import { Typography, Stack, Button, List, ListItem, ListItemText } from '@mui/material';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, secondaryMuscles, equipment, instructions } = exerciseDetail;
  console.log(exerciseDetail);

  return (
    <Stack gap="40px" sx={{ flexDirection: { lg: 'row' }, p: '10px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '48px', xs: '28px' }, fontWeight: 700, textTransform: 'capitalize' }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' }, color: "#4F4C4C", width: '50ch', textAlign: 'justify' }}>
          <List dense>
            <ListItem>
              <ListItemText>
                <Typography sx={{ fontSize: { lg: '22px', xs: '16px' }, color: "black", fontWeight: "700" }}>
                  Instructions:
                </Typography>
              </ListItemText>
            </ListItem>
            {instructions?.map((instruction, index) => (
              <ListItem key={index}>
                <ListItemText>
                  <Typography sx={{ fontSize: { lg: '20px', xs: '14px' } }}>
                    <span style={{ fontWeight: "700" }}>{index + 1}</span>: {instruction}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Typography>
        <Stack direction="row" gap="20px" alignItems="center">
          <Typography textTransform="capitalize" sx={{ fontSize: { lg: '24px', xs: '16px' } }}>
            <span style={{ fontWeight: "bold" }}>Targeted Muscle:</span> {bodyPart}
            <br />
            <span style={{ fontWeight: "bold" }}>Secondary Muscles:</span>{' '}
            {secondaryMuscles?.map((muscle, index) => (
              <span key={index}>
                {index > 0 && ', '}<span style={{}}>{muscle}</span>
              </span>
            ))}
            <br />
            <span style={{ fontWeight: "bold" }}>Equipment:</span> {equipment}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detail;
