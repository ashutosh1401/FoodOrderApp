import React from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbarItem: {
    zIndex: 1,
    listStyle: "none",
    fontSize: "1.2rem",
    marginTop: "2rem",
    marginLeft: "1rem",
    marginRight: "2rem",
  },
  logo: {
    float: "left",
    listStyle: "none",
    lineHeight: 1.5,
    zIndex: 1
  },
  logoLink: {
    textDecoration: "none",
    color: "antiquewhite",
    "-webkit-text-stroke": "0.1px #8a8787"
  },
  logoItem: {
    listStyle: "none",
    fontSize: "2rem",
    marginTop: "2rem",
    marginLeft: "2rem",
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.logo}>
        <Link to="/" className={classes.logoLink}><p className={classes.logoItem}>Foodie</p></Link>
      </div>
      <ul className='image-navbar'>
                <Link to='#addres'><li className={classes.navbarItem}>Add Resturant</li></Link>
                <Link to='/login'><li className={classes.navbarItem}>Login</li></Link>
                <Link to='/signup'><li className={classes.navbarItem}>Signup</li></Link>
            </ul>
    </div>
  );
}
export default Navbar;