import React, { useState, useEffect } from "react";
import PhoneCard from "../../components/PhoneCard";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';


export default function DataLoader() {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const phonesPerPage = 9;
  const [totalPages, setTotalPages] = React.useState(0);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    fetch("./phones.json"
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setProducts(myJson.products)
        setTotalPages(Math.ceil(myJson.products.length/phonesPerPage));
      });
  },[]);

  return (
    <div>
        {products.map((elem) => (
          <PhoneCard key={elem.id} {...elem}/>
        ))
        }
        <Pagination count={totalPages} page={page} onChange={handleChange} />
    </div>
  );
}