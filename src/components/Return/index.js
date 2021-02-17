import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";

const Return = (props) => {
  const { history } = props;
  const handleReturn = async () => {
    history.push("/");
  };
  return (
    <>
      <Button
        color="primary"
        onClick={handleReturn}
        onKeyDown={handleReturn}
        tabIndex={0}
        startIcon={<KeyboardBackspaceIcon height={15} width={15} />}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>back</div>
      </Button>
    </>
  );
};
export default Return;
