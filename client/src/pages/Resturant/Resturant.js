import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../../components/Navbar"
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        backgroundColor: "white",
        color: "black",
        height: "100%"
    },
    navBarHolder: {
        backgroundColor: "#ffffff",
        paddingBottom: "1rem"
    },
    searchHolder: {
        margin: "0.5rem 2rem",
        padding: "0 2rem",
    },
    search: {
        backgroundColor: "#ffffff",
    },
    resturantHolder: {
        display: "grid",
        gap: "1rem 1rem",
        gridTemplateColumns: "auto auto auto",
        margin: "2rem 4rem",
        padding: "2rem",
    }
}))


function Resturant() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.navBarHolder}>
        <Navbar />
      </div>
      <div>
          <div className={classes.searchHolder}>
            <SearchBar className={classes.search} />
          </div>

         <div className={classes.resturantHolder}>
           
         </div>
      </div>
  </div>
  )
}

export default Resturant