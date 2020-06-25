import React, { useState, useRef } from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

// import Code from "../components/code";
import Description from "../components/description";

const LinkedListView = () => {
  const [error, setError] = useState(false);
  const elementInput = useRef(null);

  const addNode = () => {
    if (elementInput.current.value) {
      console.log(elementInput.current.value);
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter Pressed");
    }
  };

  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item xs>
        <Description title="Binary Search Tree" good="?" bad="?" />
      </Grid>
      <Grid item xs>
        <Divider />
      </Grid>
      {/* <Grid item xs>
        <Code code={memoizedCode} />
      </Grid> */}
      <Grid item xs>
        <Divider />
      </Grid>
      <Grid item xs>
        <Typography variant="h6">Interactive Demo:</Typography>
      </Grid>
      <Grid item xs container justify="center">
        <TextField
          inputRef={elementInput}
          label="Value"
          variant="outlined"
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" color="secondary" onClick={addNode}>
          Add Node
        </Button>
      </Grid>
      <Grid item xs container justify="center"></Grid>
      {error ? (
        <Grid item xs>
          <Alert severity="error">Please input a value for the node.</Alert>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default LinkedListView;
