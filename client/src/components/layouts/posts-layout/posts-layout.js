import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Button } from 'react-bootstrap';

import "./posts-layout.scss";

import { SinglePost } from "./single-post/single-post";
import { getPostsSelector } from "../../../redux/modules/posts/posts.selector";
import { getPostsAction } from "../../../redux/modules/posts/posts.action";
import { AddForm } from "./add-form/add-form";
import { Loader } from "../../reusable/loader/loader";

export const PostsLayout = () => {
  const [showAddForm, setShowAddForm]= useState(false);
  const posts = useSelector(getPostsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = () => dispatch(getPostsAction());
    getPosts();
  }, [dispatch]);

  return (
    <Fragment>
    <div className="post-items">
      <Button variant="outline-dark" onClick={()=> setShowAddForm(true)} className='post-items__add-button'>Add post</Button>
      {posts ? (
        posts.map((post) => <SinglePost {...post} />)
      ) : (
        <Loader/>
      )}
    </div>
      {
        showAddForm ? <AddForm show={showAddForm}
        onHide={() => setShowAddForm(false)} /> : ''
      }
    </Fragment>
  );
};
