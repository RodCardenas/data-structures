import React, { useMemo, useState, useRef } from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Code from "../components/code";
import Description from "../components/description";
import { LinkedList, LinkedListNode } from "../features/linkedList/linkedList";
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

  const memoizedCode = useMemo(
    () => LinkedListNode.toString() + "\n\n" + LinkedList.toString(),
    []
  );

  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item xs>
        <Description
          title="Linked List"
          good="Use when you have an unknown number of items to store. Remove nodes at
          either the head or tail of the list to maintain a constant run time"
          bad="Not very good for random insertion, accessing nodes by index, and
          searching."
        />
      </Grid>
      <Grid item xs>
        <Divider />
      </Grid>
      <Grid item xs>
        <Code code={memoizedCode} />
      </Grid>
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
      <Grid item xs container justify="center">
        {listSize > 0 ? getNodes() : null}
      </Grid>
      {error ? (
        <Grid item xs>
          <Alert severity="error">Please input a value for the node.</Alert>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default LinkedListView;
