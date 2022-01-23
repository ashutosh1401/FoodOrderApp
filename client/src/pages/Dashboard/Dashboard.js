import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../../components/Navbar"
import SearchBar from "material-ui-search-bar";

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
    },
    searchHolder: {
        margin: "0.5rem 2rem",
        padding: "0 2rem",
        color: "white !important",
    },
    search: {
        backgroundColor: "#21262d",
        color: "white !important",
    },

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
          <div className={classes.searchHolder}>
            <SearchBar className={classes.search} />
          </div>
         <p>Lorem ispum Lorem ispum Lorem ispum Lorem ispum Lorem ispumLorem ispum</p>
      </div>
  </div>
  );
}

export default Dashboard;
