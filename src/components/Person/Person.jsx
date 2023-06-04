import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const theme = useTheme().palette;

  const partnerSex = sex === 'm' ? 'wife' : 'husband';
  const marriedInfoCollor = isMarried ? theme.info.main : theme.error.main;

  return (
    <Box
      className="Person"
      mb={1}
      maxWidth={400}
      backgroundColor={theme.primary.main}
      borderRadius={2}
      p={2}
      color={theme.primary.contrastText}
    >
      <Typography
        className="Person__name"
        variant="h3"
        mb={2}
      >
        {`My name is ${name}`}
      </Typography>

      {age && (
        <Typography mb={2} className="Person__age">{`I am ${age}`}</Typography>
      )}

      <Typography
        className="Person__partner"
        backgroundColor={marriedInfoCollor}
        borderRadius={1}
      >
        {isMarried
          ? `${partnerName} is my ${partnerSex}`
          : 'I am not married'}
      </Typography>
    </Box>
  );
};
