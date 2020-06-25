import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Highlight from "react-highlight";
import "highlight.js/styles/school-book.css";

const Code = (props) => {
  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item xs>
        <Typography variant="h6">Implementation:</Typography>
      </Grid>
      <Grid item xs>
        <Highlight className="javascript">{props.code}</Highlight>
      </Grid>
    </Grid>
  );
};

export default Code;
