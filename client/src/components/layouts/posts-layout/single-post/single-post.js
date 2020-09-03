import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./single-post.scss";

export const SinglePost = ({ title, createdAt, _id }) => {
  return (
    <div className="post-item">
      {/* <div className='post-item__img'>
        <img src={imageUrl}></img>
      </div> */}
      <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        <i>Posted on {createdAt}</i>
      </p>
    </div>
  );
};
