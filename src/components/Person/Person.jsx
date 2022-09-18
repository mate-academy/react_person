import React from 'react';
import './Person.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Person = ({
  name,
  age,
  sex,
  isMarried,
  partnerName,
}) => {
  const partner = sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {`My name is ${name}`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                <p className="Person__age">
                  {age && `I am ${age}`}
                </p>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {
                isMarried
                  ? `${partnerName} is my ${partner}`
                  : 'I am not married'
              }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
};
