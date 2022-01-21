import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../../components/Navbar"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundColor: "#0d1117",
        color: "white",
        height: "100vh"
    },
    navBarHolder: {
        backgroundColor: "#161b22",
        paddingBottom: "1rem"
    }
}))

function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userSignin = useSelector(state=>state.userSignin);
    const {loading,userInfo,error} = userSignin;

  return ( 
  <div className={classes.root}>
      <div className={classes.navBarHolder}>
        <Navbar />
      </div>
      <div>
         <p>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispumLorem ispum</p>
      </div>
  </div>
  );
}

export default Dashboard;
