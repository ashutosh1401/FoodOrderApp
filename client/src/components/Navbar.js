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
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <ul className='image-navbar'>
                <Link to='#addres'><li className={classes.navbarItem}>Add Resturant</li></Link>
                <Link to='/login'><li className={classes.navbarItem}>Login</li></Link>
                <Link to='/signup'><li className={classes.navbarItem}>Signup</li></Link>
            </ul>
    </div>
  );
}
export default Navbar;