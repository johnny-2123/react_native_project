import { useState, useEffect } from "react";
import { axios } from "axios";
const useFetch = (endpoint, query) => {
  const rapidApiKey = process.env.RAPID_API_KEY;
  const [data, setData] = useState([]);
  console.log("data", data);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // const url =
  //   `https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1`;

  const url = `https://jsearch.p.rapidapi.com/${endpoint}?${query}}`;
  console.log("url", url);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "93bc83b4d3msh88c8bd0cedbb820p150abcjsnb33a276c07f2",
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
  }, [endpoint, query]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
