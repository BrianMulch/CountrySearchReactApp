import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function MyComponent(props) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    countries.getCountries().then((response) => {
      setData(response.data);
    });

    countries.getCountries().then((response) => {
      console.log("got countries", response);
    });
  }, []);
  // const getDataFromAPI = () => {
  //   console.log("Options Fetched from API")

  //   fetch('').then((response) => {
  //     return response.json()
  //   }).then((res) => {
  //     console.log(res.data)
  //     for (var i = 0; i < res.data.length; i++) {
  //       myOptions.push(res.data[i].employee_name)
  //     }
  //     setMyOptions(myOptions)
  //   })
  // }
  const getData = () => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      search.push(data[i].name.common);
    }
    setSearch(search);
  };

  function inputHandler() {
    console.log("searching");
  }

  return (
    <div className="MyComponent">
      <div></div>
      <div className="main">
        <h1>Country Search</h1>
        {/* <div className="search">
          <input type="text" placeholder="search" onChange={inputHandler} />
        </div> */}
        <Autocomplete
          style={{ width: 500 }}
          freeSolo
          autoComplete
          autoHighlight
          options={search}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={getData}
              variant="outlined"
              label="Search Box"
            />
          )}
        />
      </div>

      <a
        href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
        target="_blank"
        rel="noreferrer"
      >
        <p />
        <button className="rickroll"> Secret Money Generator</button>
      </a>
    </div>
  );
}

export default MyComponent;
