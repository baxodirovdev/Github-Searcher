import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./Search.css";
export const Search = ({ setSearch,  }) => {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(text);
    setText("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="searchForm"
      noValidate
      autoComplete="off"
    >
      <div className="searchForm__container">
        <TextField
          required
          id="outlined-required"
          label="Search"
          variant="outlined"
          className="searchForm__text"
          value={text}
          onChange={changeHandler}
        />
        <Button type="submit" className="searchForm__btn" variant="contained">
          Search
        </Button>
      </div>
    </form>
  );
};
