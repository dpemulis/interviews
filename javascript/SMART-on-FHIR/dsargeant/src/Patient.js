import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default function(props) {
  return (
    <Card style={{marginTop: "5%"}}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Patient Data
        </Typography>
        <Typography>
          Name: <strong>{props.name}</strong>
        </Typography>
        <Typography>
          DOB: <strong>{props.dob}</strong>
        </Typography>
        <Typography>
          Gender: <strong>{props.gender}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
