import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../../components/Navbar"

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
    }
}))

function Profile() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.navBarHolder}>
        <Navbar />
      </div>
      <div>
        Profile Page
      </div>
    </div>
  )
}

export default Profile