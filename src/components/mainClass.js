import React from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";

class mainClass extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      fairings: []
    };
  }
  componentDidMount() {
    spaceX.latest().then((response) => {
      console.log("got spaceX", response.data);
      this.setState({ fairings: response.data.payloads });
    });
    user.getRandomUserNames().then((response) => {
      console.log("got names", response.data);
      this.setState({ data: response.data.results });
    });

    // cats.getRandomCat().then((response) => {
    //   console.log("got random cat: ", response);
    // });
    // countries.getCountries().then((response) => {
    //   console.log("got countries", response);
    // });
    // covid.getCurrentCovidStats().then((response) => {
    //   console.log("got covid", response);
    // });
    //add a comment
  }

  render() {
    return (
      <div className="App">
        {this.state.fairings.map((item, index) => {
          return <div key={index}>space: {item}</div>;
        })}
        {this.state.data.map((item, index) => {
          return <div key={index}>name: {item.name.first}</div>;
        })}
      </div>
    );
  }
}

export default mainClass;
