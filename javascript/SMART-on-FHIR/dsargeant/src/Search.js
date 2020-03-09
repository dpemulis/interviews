import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function Search(props) {
  return (
    <form id="search" onSubmit={props.handleSubmit} style={{paddingLeft: "1%"}}>
      <TextField
        size="small"
        variant="outlined"
        inputProps={{"pattern": "\\d*", "maxLength": "7", "minLength": "7" }}
        value={props.value}
        onChange={props.handleChange}
        placeholder="Seven-digit patient ID"
      />
      <Button
        style={{margin: "1% 0 0 2%"}}
        size="medium"
        variant={props.loading ? "outlined" : "contained"}
        color="primary"
        type="submit"
        disabled={props.value.length !== 7}
      >
        {props.loading ? "Loading..." : "Search."}
      </Button>
    </form>
  );
}
