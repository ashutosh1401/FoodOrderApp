import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../../components/Navbar"
import SearchBar from "material-ui-search-bar";
import RestaurantCard from '../../components/restaurantCard';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "98vw",
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

function Dashboard() {
    const classes = useStyles();

    const handleOnClick = (e) => {
    console.log(e)
    }
    
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
           <RestaurantCard image="https://images.unsplash.com/photo-1585238341267-1cfec2046a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVyZ2VyfHx8fHx8MTY0NTExOTY1NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" resturantName="Burger King" ratings={4.1} location="Mumbai" averagePrice={110} id={1} />
           <RestaurantCard image="https://images.unsplash.com/photo-1595801106239-faefa2cdcf75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjQ1MTE5NjU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" resturantName="Momo Hub" ratings={3.9} location="Mumbai" averagePrice={150} id={2} />
           <RestaurantCard image="https://images.unsplash.com/photo-1559329187-79d04171a646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bWlsa3NoYWtlfHx8fHx8MTY0NTExOTY1NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" resturantName="Milkshake center" ratings={4.5} location="Mumbai" averagePrice={80} id={3}/>
           <RestaurantCard image="https://images.unsplash.com/photo-1644364935906-792b2245a2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a2ViYWJzLWJpcnlhbml8fHx8fHwxNjQ1MTE5NjU1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" resturantName="Fish and More" ratings={4.8} location="Mumbai" averagePrice={250} id={4}/>
           <RestaurantCard image="https://images.unsplash.com/photo-1477505982272-ead89926a577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWNlLWNyZWFtfHx8fHx8MTY0NTExOTY1NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" resturantName="Ice Cream Bells" ratings={3.4} location="Mumbai" averagePrice={120} id={5} />
         </div>
      </div>
  </div>
  );
}

export default Dashboard;
