import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../store/actions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const Filter = (props) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.reducer);
  const [brandValue, setBrandValue] = useState(storeData.filters.Brand);
  const [osValue, setOSValue] = useState(storeData.filters["Operation System"]);

  const handleBrandChange = (event, newValue) => {
    setBrandValue(newValue);
  };
  const handleOSChange = (event, newValue) => {
    setOSValue(newValue);
  };

  const handleClose = () => {
    setBrandValue(storeData.filters.Brand);
    setOSValue(storeData.filters["Operation System"]);
    props.handleClose();
  };
  const handleApply = async () => {
    dispatch(
      setFilters({
        Brand: brandValue,
        "Operation System": osValue,
      })
    );
    props.handleClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
    >
      <DialogTitle id="form-dialog-title">Select Filters</DialogTitle>
      <DialogContent>
        <Autocomplete
          multiple
          value={brandValue}
          onChange={handleBrandChange}
          options={props["Brand"]}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Brand" variant="standard" />
          )}
        />
        <Autocomplete
          multiple
          value={osValue}
          onChange={handleOSChange}
          id="controllable-states-demo"
          options={props["Operation System"]}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Operating System"
              variant="standard"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleApply} color="primary" variant="contained">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Filter;
