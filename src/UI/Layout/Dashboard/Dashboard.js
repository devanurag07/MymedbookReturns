import { makeStyles } from "@mui/styles";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Routes, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0",
  },
  sidebar: {
    width: "20%",
    height: "100vh",
    // background: "white",
  },
  mainPage: {
    width: "80%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.mainPage}>
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
