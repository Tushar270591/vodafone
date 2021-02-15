import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PhoneCard from "../../components/PhoneCard";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FilterIcon from "@material-ui/icons/FilterList";
import PhonesData from "../../services/PhonesData";
import Filters from "../../services/Filters";
import Filter from "../../components/Filter";
import "./Gallery.scss";

const Gallery = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const storeData = useSelector((state) => state.reducer);
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [page, setPage] = React.useState(1);
  const phonesPerPage = 9;
  const [totalPages, setTotalPages] = React.useState(0);
  const [uniqueValuesForFilters, setUniqueValuesForFilters] = useState({});
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(storeData.testAction)
  }, [storeData.testAction]);

  useEffect(() => {
    const getPhonesData = async () => {
      const response = await PhonesData.getData();
      let { products } = await response.json();
      if (Object.keys(storeData.filters).length > 0) {
        products = PhonesData.getFilteredData(products, storeData.filters);
      }
      setTotalPages(Math.ceil(products.length / phonesPerPage));

      const paginatedData = PhonesData.getPaginatedData(products, page);
      setProducts(paginatedData);
    };

    getPhonesData();
  }, [storeData.filters,storeData.filters.Brand, page]);

  useEffect(() => {
    const getUniqueValuesForFilters = async () => {
      const response = await PhonesData.getData();
      let { products } = await response.json();
      setUniqueValuesForFilters({
        Brand: Filters.getUniqueValuesbyFilterType(products, "Brand"),
        "Operation System": Filters.getUniqueValuesbyFilterType(
          products,
          "Operation System"
        ),
      });
    };

    getUniqueValuesForFilters();
  }, []);

  return (
    <div className="gallery">
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={classes.button}
        startIcon={<FilterIcon />}
      >
        Filter
      </Button>
      <Filter
        open={open}
        handleClose={handleClose}
        {...uniqueValuesForFilters}
      ></Filter>
      <div className="gallery-grid">
        {products.map((elem) => (
          <PhoneCard key={elem.id} {...elem} />
        ))}
      </div>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </div>
  );
}

export default Gallery;