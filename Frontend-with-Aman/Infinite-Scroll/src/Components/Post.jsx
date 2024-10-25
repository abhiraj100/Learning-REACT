import React from "react";
import "../App.css";
import { useEffect } from "react";

const Post = ({ data, setPageNo }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((param) => {
    //   console.log(param);
      if(param[0].isIntersecting){
        observer.unobserve(lastImage);
        // console.log("Inside Intersection", lastImage);
        setPageNo((pageNo) => pageNo + 1)
      }
    },
    {
        threshold: 0.5
    });

    const lastImage = document.querySelector(".image-post:last-child");
    console.log(lastImage);
    if (!lastImage) {
      return;
    }
    observer.observer(lastImage);

    // cleanup when component is unmount
    return () => {
        if(lastImage){
            observer.unobserve(lastImage);
        }
        observer.disconnect();
    }
  }, [data]);

  return (
    <div className="container">
      {data &&
        data.map((item, index) => {
          return (
            <img
              className="image-post"
              key={index}
              src={item.download_url}
              alt={item.author}
            />
          );
        })}
    </div>
  );
};

export default Post;
