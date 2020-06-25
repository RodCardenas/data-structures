import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Description = (props) => {
  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item xs>
        <Typography variant="h4">{props.title}</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6">Good:</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">{props.good}</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="h6">Bad:</Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="body1">{props.bad}</Typography>
      </Grid>
    </Grid>
  );
};

export default Description;
