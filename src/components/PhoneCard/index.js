import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
    width: 135,
    backgroundSize: "135px 160px",
  },
});
const PhoneCard = (props) => {
  const classes = useStyles();
  const { name, id, variants, initialPhonePrice, initialPlan } = props;
  // const { } = props;
  const { value: phonePrice } = initialPhonePrice;
  const { planPrice, planName } = initialPlan;
  // const {pricingOptions} = variants;
  const [isOutOfStock, setIsOutOfStock] = useState(true);
  let history = useHistory();

  const handleClick = () => {
    history.push(`/details/${id}`);
  };

  const handleVariantClick = (event) => {
    history.push(`/details/${id}`);
  };

  useEffect(() => {
    const checkOutOfStock = () => {
      loop1: for (var variant of variants) {
        loop2: for (var pricingOption of variant.pricingOptions) {
          if (!pricingOption.outOfStock) {
            setIsOutOfStock(false);
            break loop1;
          }
        }
      }
    };
    checkOutOfStock();
  }, []);

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={variants[0].phoneImages[0]}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {phonePrice}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {planPrice} {planName}
          </Typography>
          
          {`isOutOfStock ${isOutOfStock}`}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default PhoneCard;
