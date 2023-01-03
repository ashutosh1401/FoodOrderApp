import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    borderRadius: "5%",
    '&:hover': {
        transform: "scale(1.05)"
    }
  },
  media: {
    height: 140,
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
  },
  headingName: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.2,
    margin: "0.8rem 0 0.6rem",
    maxWidth: "80%",
    textOverflow: "ellipsis",
    cursor: "pointer"
  },
  ratings: {
    fontWeight: 500,
    lineHeight: 1.2,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0.8rem 0 0.6rem",
    maxWidth: "20%",
    textOverflow: "ellipsis",
    cursor: "pointer"
  },
  bottomHeading: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "1.4rem"
  },
  location: {
      fontSize: 14,
      fontWeight: 100,
      paddingBottom: "0.4rem",
      lineHeight: 1.5,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "56%",
      textAlign: "left",
      color: "rgb(125, 125, 125);"
  },
  averagePrice: {
      lineHeight: 1.5,
      textAlign: 'right',
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "rgb(105,105,105);",
      maxWidth: "30%",
      paddingBottom: "0.4rem",
  }
});

export default function RestaurantCard({image,resturantName,ratings,location,averagePrice,id}) {
  const classes = useStyles();
  let click_url = `/restaurant?id=${id}`
  return (
    <Card className={classes.root}>
      <CardActionArea href={click_url}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
            <div className={classes.heading}>
                <div className={classes.headingName}>
                    <h4>{resturantName}</h4>
                </div>
                <div className={classes.ratings}>
                    {ratings}
                </div>
            </div>
            <div className={classes.bottomHeading}>
                <div className={classes.location}>
                    {location}
                </div>
                <div className={classes.averagePrice}>
                &#8377; {averagePrice}
                </div>
            </div>
          {/* <Typography variant="h5" component="h3">
            Lizard
          </Typography>
          <Typography component="p" className={classes.location}>
            Lizard
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
