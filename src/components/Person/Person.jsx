import React from 'react';
import './Person.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Person = ({ person }) => {
  const partner = person.sex === 'f' ? 'husband' : 'wife';

  return (
    <section className="Person">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {`My name is ${person.name}`}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {
                person.age
                && (
                  <p className="Person__age">
                    {`I am ${person.age}`}
                  </p>
                )
              }
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {
                person.isMarried
                  ? `${person.partnerName} is my ${partner}`
                  : 'I am not married'
              }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
};
