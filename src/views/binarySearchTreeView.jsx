import React, { useEffect, useState, useRef } from "react";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Code from "../components/code";
import Description from "../components/description";
import { BinarySearchTree } from "../features/binarySearchTree";

const LinkedListView = () => {
  const [tree, setTree] = useState(new BinarySearchTree());
  const [treeSize, setTreeSize] = useState(tree.size);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const elementInput = useRef(null);

  const addNode = () => {
    const value = elementInput.current.value;
    if (value) {
      tree.insert(parseFloat(value));
      setError(false);
      setTree(tree);
      setTreeSize(tree.size);
      elementInput.current.value = null;
    } else {
      setError(true);
    }
  };

  const getNodes = () => {
    return null;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addNode();
    }
  };

  useEffect(() => {
    const fetchCode = async () => {
      fetch(process.env.PUBLIC_URL + "/js/binarySearchTree.js")
        .then((result) => {
          return result.text();
        })
        .then((text) => {
          setCode(text);
        });
    };

    fetchCode();
  }, []);

  console.log(tree);

  return (
    <Grid container direction="column" justify="center" spacing={2}>
      <Grid item xs>
        <Description title="Binary Search Tree" good="?" bad="?" />
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
          type="number"
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" color="secondary" onClick={addNode}>
          Add Node
        </Button>
      </Grid>
      <Grid item xs container justify="center">
        {treeSize ? getNodes() : null}
      </Grid>{" "}
      {error ? (
        <Grid item xs>
          <Alert severity="error">Please input a value for the node.</Alert>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default LinkedListView;
