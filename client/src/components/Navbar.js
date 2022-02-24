import React from "react";
import {
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
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
    zIndex: 1
  },
  logoLink: {
    textDecoration: "none",
    color: "black",
    "-webkit-text-stroke": "0.1px #8a8787"
  },
  logoItem: {
    listStyle: "none",
    fontSize: "2rem",
    marginTop: "1.4rem",
    marginLeft: "2rem",
  },
  imageNavabar: {
    display: "flex",
    position: "relative",
    zIndex: 1,
    justifyContent: "flex-end",
    lineHeight: 1.5,
  },
  links: {
    textDecoration: "none",
    color: "black",
    "-webkit-text-stroke": "0.1px #8a8787",
  }
}));

function Navbar() {
  const classes = useStyles();
  let user_detail = localStorage.getItem('user_details')
  console.log(user_detail)
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Link to="/" className={classes.logoLink}><p className={classes.logoItem}>Foodie</p></Link>
      </div>
      {!user_detail ?
        <ul className={classes.imageNavabar}>
          <Link to='#addres' className={classes.links}><li className={classes.navbarItem}>Add Resturant</li></Link>
          <Link to='/login' className={classes.links}><li className={classes.navbarItem}>Login</li></Link>
          <Link to='/signup' className={classes.links}><li className={classes.navbarItem}>Signup</li></Link>
        </ul> 
      :
        <ul className={classes.imageNavabar}>
          <Link to='#addres' className={classes.links}><li className={classes.navbarItem}>My Orders</li></Link>
          <Link to='/login' className={classes.links}><li className={classes.navbarItem}>Cart</li></Link>
          <Link to='/signup' className={classes.links}><li className={classes.navbarItem}>Profile</li></Link>
        </ul>  }
      
    </div>
  );
}
export default Navbar;