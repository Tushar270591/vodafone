import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setPhonesJson, setSortBy } from "../../store/actions";
import PhoneCard from "../../components/PhoneCard";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FilterIcon from "@material-ui/icons/FilterList";
import PhonesData from "../../services/PhonesData";
import Filters from "../../services/Filters";
import Filter from "../../components/Filter";
import { SORT_OPTIONS } from "../../CONSTANTS";

const Gallery = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      fontSize: "1.5rem",
    },
    pagination: {
      fontSize: "1.5rem",
    },
  }));
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.reducer);
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [page, setPageNo] = React.useState(storeData.page);
  const [totalFiltersApplied, setTotalFiltersApplied] = React.useState(0);
  const [sortBy, setSortByIndex] = React.useState(storeData.sortBy);
  const phonesPerPage = 9;
  const [open, setOpen] = React.useState(false);

  const [totalPages, setTotalPages] = React.useState(0);
  const [uniqueValuesForFilters, setUniqueValuesForFilters] = useState({});
  const handleChange = (event, value) => {
    dispatch(setPage(value));
    setPageNo(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSortChange = (event) => {
    dispatch(setSortBy(event.target.value));
    setSortByIndex(event.target.value);
  };
  useEffect(() => {
    if (storeData.phonesJson.length === 0) {
      const getPhonesData = async () => {
        const response = await PhonesData.getData();
        const products = await response.json();
        await dispatch(setPhonesJson(products));
      };
      getPhonesData();
    }
  }, [dispatch, storeData.phonesJson]);

  useEffect(() => {
    const getPhonesData = async () => {
      if (storeData.phonesJson.length !== 0) {
        let { products } = storeData.phonesJson;
        if (Object.keys(storeData.filters).length > 0) {
          products = PhonesData.getFilteredData(products, storeData.filters);
        }
        products = PhonesData.getSortedData(products, storeData.sortBy);

        const totalPages = Math.ceil(products.length / phonesPerPage);
        setTotalPages(totalPages);
        if (totalPages === 1) {
          dispatch(setPage(1));
        }

        const paginatedData = PhonesData.getPaginatedData(
          products,
          storeData.page
        );
        setProducts(paginatedData);
      }
    };

    getPhonesData();
  }, [
    dispatch,
    storeData.filters,
    storeData.page,
    storeData.phonesJson,
    storeData.sortBy,
  ]);

  useEffect(() => {
    let totalFiltersApplied = 0;
    if (storeData.filters.Brand.length > 0) {
      totalFiltersApplied++;
    }
    if (storeData.filters["Operation System"].length > 0) {
      totalFiltersApplied++;
    }
    setTotalFiltersApplied(totalFiltersApplied);
  }, [storeData.filters]);

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
      <div className="gallery-top">
        <Badge badgeContent={totalFiltersApplied} color="primary">
          <Button
            variant="outlined"
            size="large"
            onClick={handleClickOpen}
            className={classes.button}
            startIcon={<FilterIcon />}
          >
            Filter
          </Button>
        </Badge>
        <TextField
          id="outlined-select-currency"
          select
          label="Sort By"
          value={sortBy}
          onChange={handleSortChange}
          variant="outlined"
        >
          {SORT_OPTIONS.map((option, i) => (
            <MenuItem key={i} value={i}>
              {option.display}
            </MenuItem>
          ))}
        </TextField>
      </div>
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
      <div className={classes.pagination}>
        <Pagination
          count={totalPages}
          color="primary"
          page={page}
          onChange={handleChange}
          size="large"
        />
      </div>
    </div>
  );
};

export default Gallery;
