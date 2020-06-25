import React, { useState, useRef } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import LinkedList from "../features/linkedList/linkedList";
import FloatingNode from "../components/floatingNode";

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

  const removeNode = (element) => {
    list.remove(element);
    setList(list);
    setListSize(list.size);
  };

  const getNodes = () => {
    const nodes = list.traverse();
    return nodes.map((element, idx) => {
      const id = `${element}-${idx}`;
      return (
        <Grid
          item
          xs
          key={id + "node"}
          onClick={(e) => {
            removeNode(e.target.innerHTML);
          }}>
          <FloatingNode element={element} />
        </Grid>
      );
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNode();
    }
  };

  return (
    <Grid container direction="column" justify="center">
      {error ? (
        <Grid item xs>
          <Alert severity="error">Please input a value for the node.</Alert>
        </Grid>
      ) : null}
      <Grid item xs>
        <Typography variant="h4">Linked List</Typography>
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
      <Grid item xs container justify="center">
        {listSize > 0 ? getNodes() : null}
      </Grid>
    </Grid>
  );
};

export default LinkedListView;
