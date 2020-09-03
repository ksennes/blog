import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';

import "./header-layout.scss";
import { getPostSelector } from "../../../redux/modules/single-post/single-post.selectors";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [title, setTitle] = useState(headerDefaultValues.title);
  const [imageURL, setImageURL] = useState(headerDefaultValues.imageURL);

  const post = useSelector(getPostSelector);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname !== '/' && post) {
      setTitle(post.title);
      setImageURL(post.imageURL);
    } else {
      setTitle(headerDefaultValues.title);
      setImageURL(headerDefaultValues.imageURL);
    }
  }, [location.pathname, post]);

  return (
    <div className="header" style={{ backgroundImage: `url(${imageURL})` }}>
      <div className="container">
        <div className='header__overlay'></div>
        <div className='header__center'>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

const headerDefaultValues = {
  title: 'My blog',
  imageURL: 'https://images.unsplash.com/photo-1518388141449-351445eb5fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
}