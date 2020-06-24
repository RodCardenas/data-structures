import React, { useState, useRef } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { ArcherContainer, ArcherElement } from "react-archer";

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

  const getNodes = () => {
    const nodes = list.traverse();
    const ids = [];
    const floatingNodes = nodes.map((element, idx) => {
      const id = `${element}-${idx}`;
      ids.push(id);
      return <FloatingNode key={id + "node"} element={element} />;
    });

    if (listSize > 1) {
      const arrowedNodes = [];
      for (let idx = 0; idx < listSize; idx++) {
        const source = ids[idx];
        const target = ids[idx + 1];
        if (idx < listSize - 1) {
          arrowedNodes.push(
            <ArcherElement
              id={source}
              key={source}
              relations={[
                {
                  targetId: { target },
                  targetAnchor: "left",
                  sourceAnchor: "right",
                },
              ]}>
              <div>{floatingNodes[idx]}</div>
            </ArcherElement>
          );
        } else {
          arrowedNodes.push(
            <ArcherElement id={source} key={source}>
              <div>{floatingNodes[idx]}</div>
            </ArcherElement>
          );
        }
      }
      console.log(arrowedNodes);

      return arrowedNodes;
    } else {
      return floatingNodes;
    }
  };

  return (
    <React.Fragment>
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
      </Grid>
      {listSize > 0 ? (
        <ArcherContainer strokeColor="red">{getNodes()}</ArcherContainer>
      ) : null}
    </React.Fragment>
  );
};

export default LinkedListView;
