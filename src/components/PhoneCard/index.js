import React from 'react';
import { useHistory } from "react-router-dom";

const PhoneCard = (props) => {
    const {title, id} = props;
    let history = useHistory();

  function handleClick() {
    history.push(`/details/${id}`);
  }
    return (
    <p onClick={handleClick}>{title}</p>
    );
};

export default PhoneCard;