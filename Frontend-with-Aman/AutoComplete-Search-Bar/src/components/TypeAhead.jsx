import React, { useEffect, useRef, useState } from "react";

const STATE = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

const TypeAhead = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]); // to map over it and render the ul
  //   console.log("result", result);
  const [status, setStatus] = useState(STATE.LOADING);

  // caching -> useRef()
  const cache = useRef({});
  console.log(cache);

  // api call using useEffect()
  useEffect(() => {
    // abort controller hel/ hello

    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setStatus(STATE.LOADING); // when we come for the first time

        // check in the cache
        if (cache.current[query]) {
          console.log("retrieved from cache");
          setResult(cache.current[query]);
          setStatus(STATE.SUCCESS); // to display the data in the UI
          return;
        }
        // api call
        console.log("API Call");
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=15`,
          { signal }
        );
        // console.log(res);
        const data = await res.json();
        // console.log(data);
        // return data;
        setStatus(STATE.SUCCESS);
        // store in the cache
        cache.current[query] = data.products;
        setResult(data.products);
      } catch (error) {
        console.log("error", error.name);
        // setStatus(STATE.ERROR);
        // console.log("error", error);
        if (error.name !== "AbortError") {
          setStatus(STATE.ERROR);
        }
      }
    };
    const timerId = setTimeout(fetchData, 1000);
    // fetchData();  // call the function to fetch the api

    // clean-up
    return () => {
      clearTimeout(timerId);
      abortController.abort();
    };
  }, [query]);

  return (
    <div>
      <div className="desc">
        <h1>Created By Abhiraj Yadav</h1>
        <div>
          <ul>
            <li>Create a React component to search products from an API.</li>
            <li>Use debouncing to limit API calls while typing.</li>
            <li>
              Implement caching to store and reuse results, reducing API calls.
            </li>
            <li>
              Utilize AbortController to cancel previous API requests if a new
              request is initiated before <br />the previous one completes.
            </li>
          </ul>
        </div>
      </div>
      <div className="main-div">
        <input
          className="input-field"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {status === STATE.LOADING && <div>...Loading</div>}
        {status === STATE.ERROR && <div>Error Occurred</div>}
        {status === STATE.SUCCESS && (
          <ul>
            {result.map((product) => {
              return <li key={product.id}>{product.title}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TypeAhead;
