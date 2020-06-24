import React from "react";

import HomeView from "../views/homeView";
import LinkedListView from "../views/linkedListView";

import HomeIcon from "@material-ui/icons/Home";
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
    path: "/linkedList",
    name: "Linked List",
    component: LinkedListView,
    icon: <LinkedListIcon />,
    exact: true,
  },
];

export default routes;
