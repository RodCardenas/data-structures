import React, { useState, useEffect, useRef } from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Code from "../components/code";
import Description from "../components/description";
import { LinkedList } from "../features/linkedList";
import FloatingNode from "../components/floatingNode";

const LinkedListView = () => {
  const [list, setList] = useState(new LinkedList());
  const [listSize, setListSize] = useState(list.size);
  const [error, setError] = useState(false);
  const [code, setCode] = useState("");
  const elementInput = useRef(null);

  const addNode = () => {
    const element = elementInput.current.value;
    if (element) {
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

  useEffect(() => {
    const fetchCode = async () => {
      fetch(process.env.PUBLIC_URL + "/js/linkedList.js")
        .then((result) => {
          return result.text();
        })
        .then((text) => {
          setCode(text);
        });
    };

    fetchCode();
  }, []);

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
        <Code code={code} />
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
