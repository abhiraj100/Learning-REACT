import React, { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/memes.js";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // getAllMemes() function returns promise
    // getAllMemes().then((memes) => console.log(memes)
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="row">
      {data.map((el) => (
        <MemeCard img={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default HomePage;
