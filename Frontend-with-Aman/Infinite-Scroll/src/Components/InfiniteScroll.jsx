import React from "react";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetch(
      "https://picsum.photos/v2/list?page=${pageNo}&limit=3"
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => setData((oldData) => [...oldData, ...arr]));
  }, [pageNo]);

  return (
    <>
      <Post data={data} setPageNo={setPageNo} />
    </>
  );
};

export default InfiniteScroll;
