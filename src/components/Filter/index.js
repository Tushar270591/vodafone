import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTestAction, setFilters } from "../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

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
const Filter = (props) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.reducer);
  const [value, setValue] = useState(storeData.filters.Brand);

  useEffect(() => {
    
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setValue(storeData.filters.Brand);
    props.handleClose();
  };
  const handleApply = async () => {
    dispatch(setFilters({'Brand' : value}));
    // dispatch(setTestAction("test 2"))
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
        value={value}
        onChange={handleChange}
        id="controllable-states-demo"
        options={props['Brand']}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Brand" variant="standard" />}
      />
        {/* <Autocomplete
          multiple
          id="tags-standard"
          options={props['Brand']}
          getOptionLabel={(option) => option}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Brand"
              placeholder="Select Brand"
            />
          )}
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleApply} color="primary">
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Filter;
