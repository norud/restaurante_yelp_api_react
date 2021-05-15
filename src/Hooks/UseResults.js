import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [erroMessage, setErroMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErroMessage("Something went wrong!");
    }
  };
  //call searchAp when component
  //is first rendered. BAD CODE!
  //searchApi('pasta')
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, erroMessage];
};
