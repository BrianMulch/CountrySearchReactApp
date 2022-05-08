import React, { useState, useEffect } from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";
import MyComponent from "./myComponent";

function MainFunctional() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // user.getRandomUserNames().then((response) => {
    //   console.log(response);
    //   setData(response.data.results);
    // });

    // spaceX.latest().then((response) => {
    //   console.log("got spaceX", response.data);
    // });
    // cats.getRandomCat().then((response) => {
    //   console.log("got random cat: ", response);
    // });
    // countries.getCountries().then((response) => {
    //   console.log("got countries", response);
    // });
    console.log("anything");
    // covid.getCurrentCovidStats().then((response) => {
    //   console.log("got covid", response);
    // });
  }, []);

  return (
    <div className="App">
      {/* {data.map((item, index) => {
        return <div key={index}>name: {item.name.first}</div>;
      })} */}
      <MyComponent color="red" />
    </div>
  );
}

export default MainFunctional;
