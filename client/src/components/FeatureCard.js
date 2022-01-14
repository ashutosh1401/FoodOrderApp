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
      maxWidth: 345,
      borderRadius: "5%",
      '&:hover': {
          transform: "scale(1.05)"
      }
    },
    media: {
      height: 180,
    },
    heading: {
        textAlign: "center"
    }
  });
  

function FeatureCard({heading,image}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
            {heading}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
}

export default FeatureCard
