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

      {isMarried ? (
        <Typography
          className="Person__partner"
          backgroundColor={theme.info.main}
          borderRadius={1}
        >
          {`${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}`}
        </Typography>
      ) : (
        <Typography
          className="Person__partner"
          backgroundColor={theme.error.main}
          borderRadius={1}
        >
          I am not married
        </Typography>
      )}
    </Box>
  );
};
