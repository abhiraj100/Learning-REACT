import React from "react";

const PostCard = (props) => {
  return (
    <>
      <div className="post-card border-b-2 bg-gray-400 p-12 m-10">
        <div className="py-2">
            <h4 className="flex justify-center items-center font-bold text-red-600">UserId : {props.value.id}</h4>
            <hr/>
        </div>
        <h3>Title : {props.value.title}</h3>
        <p>Body : {props.value.body}</p>
      </div>
    </>
  );
};

export default PostCard;
