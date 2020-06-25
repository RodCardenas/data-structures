import React from "react";

import HomeView from "../views/homeView";
import BinarySearchTreeView from "../views/binarySearchTreeView";
import LinkedListView from "../views/linkedListView";

import HomeIcon from "@material-ui/icons/Home";
import BinarySearchTreeIcon from "@material-ui/icons/Eco";
import LinkedListIcon from "@material-ui/icons/Dns";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    icon: <HomeIcon />,
    exact: true,
  },
  {
    path: "/binarySearchTree",
    name: "Binary Search Tree",
    component: BinarySearchTreeView,
    icon: <BinarySearchTreeIcon />,
  },
  {
    path: "/linkedList",
    name: "Linked List",
    component: LinkedListView,
    icon: <LinkedListIcon />,
  },
];

export default routes;
