import React from "react"


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import maca from "./../../images/maca.png"
import "./style.scss"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const MediaCard = () => {
  const classes = useStyles();

  const arrayOfImages = [1, 2, 3, 4, 5, 6, 7, 8] // random vrednost


  return arrayOfImages && arrayOfImages.map((value, idx) => {
          return (
            <div className="cards" key={idx}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={maca}
                  title="Contemplative Reptile"
                />
                <i className="far fa-heart"></i>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Naziv
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Pol: Muzjak
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Starost: Junior
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Mesto: Beograd
                  </Typography>
                </CardContent>
              </CardActionArea>
              
            </Card>
            </div>
          )
      })
  
}


