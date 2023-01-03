import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../../components/Navbar"
import SearchBar from "material-ui-search-bar";
import {useSearchParams} from "react-router-dom";

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


function Restaurant() {
    const classes = useStyles();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("id"))
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
           <p>Hello World</p>
         </div>
      </div>
  </div>
  )
}

export default Restaurant