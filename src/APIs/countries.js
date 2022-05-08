import axios from "axios";

//documentation @https://restcountries.eu/
//feel free to add more functions!

const countries = {
  getCountries: (cityName) => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://restcountries.com/v3.1/all")
        //from what i read the api didnt renew ssl certificate and this one does same thing
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  }
};

export default countries;
