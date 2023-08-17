import { useState, useEffect } from "react";
import { axios } from "axios";

const rapidApiKey = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  console.log("data", data);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url =
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "abc8c9758bmshd1c86a7081cb67dp13033ajsnf8a7f320b6b8",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log("result", result);
      setData(result);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("error", error);
      alert("there is an error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
