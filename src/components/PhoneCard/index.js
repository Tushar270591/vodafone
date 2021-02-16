import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  actionArea: {
    display: "flex",
    padding: theme.spacing(2),
    height: "25rem",
    justifyContent: "space-between",
  },
  media: {
    height: 160,
    width: 135,
    backgroundSize: "135px 160px",
  },
}));
const PhoneCard = (props) => {
  const classes = useStyles();
  const { name, id, variants, initialPhonePrice, initialPlan } = props;
  const { value: phonePrice } = initialPhonePrice;
  const { planPrice, planName } = initialPlan;
  const [isOutOfStock, setIsOutOfStock] = useState(true);
  let history = useHistory();

  const handleClick = () => {
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
  }, [variants]);

  return (
    <div className="phone-card">
      <Card className={classes.root} onClick={handleClick} elevation={3}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={variants[0].phoneImages[0]}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {phonePrice}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {planPrice} {planName}
            </Typography>

            {`isOutOfStock ${isOutOfStock}`}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default PhoneCard;
