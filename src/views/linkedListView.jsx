import React, { useState, useRef } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import LinkedList from "../features/linkedList/linkedList";

const LinkedListView = () => {
  const [list, setList] = useState(new LinkedList());
  const [listSize, setListSize] = useState(list.size);
  const [error, setError] = useState(false);
  const elementInput = useRef(null);

  const addNode = () => {
    if (elementInput.current.value) {
      const element = elementInput.current.value;
      list.add(element);
      setList(list);
      setListSize(list.size);
      elementInput.current.value = null;
      setError(false);
    } else {
      setError(true);
    }
  };

  const getNodes = () => {
    return list.traverse().map((element, idx) => {
      return <div key={`${element}-${idx}`}>{element}</div>;
    });
  };

  return (
    <Grid container direction="column" justify="center">
      {error ? (
        <Grid item xs>
          <Alert severity="error">Please input a value for the node.</Alert>
        </Grid>
      ) : null}
      <Grid item xs>
        LinkedListView
      </Grid>

      <Grid item xs container justify="center">
        <TextField inputRef={elementInput} label="Value" variant="outlined" />
        <Button variant="contained" color="secondary" onClick={addNode}>
          Add Node
        </Button>
      </Grid>
      <Grid item xs>
        {listSize > 0 ? getNodes() : null}
      </Grid>
    </Grid>
  );
};

export default LinkedListView;
