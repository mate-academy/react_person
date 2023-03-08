import React from 'react';
import './Person.scss';
import {
  Card,
  CardContent,
  Typography,
  Paper,
} from '@mui/material';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  const partnerStatus = sex === 'm'
    ? 'wife'
    : 'husband';

  return (
    <Paper elevation={7}>
      <Card sx={{
        maxWidth: 275,
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'lightgray',
      }}
      >
        <CardContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {`My name is ${name}`}
          </Typography>

          <Typography sx={{ marginBottom: 2, color: 'green' }}>
            {age
              ? <strong>{`I am ${age}`}</strong>
              : <strong>Age is hidden</strong>
            }
          </Typography>

          <Typography>
            {isMarried
              ? `${partnerName} is my ${partnerStatus}`
              : 'I am not married'
            }
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};
