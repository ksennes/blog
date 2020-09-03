import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Spinner } from "react-bootstrap";

import "./full-post-layout.scss";

import {EditForm} from './edit-form/edit-form';
import { getPostSelector } from "../../../redux/modules/single-post/single-post.selectors";
import { getPostByIdAction } from "../../../redux/modules/single-post/single-post.actions";
import {deletePostAction} from '../../../redux/modules/posts/posts.action';
import { Loader } from "../../reusable/loader/loader";

export const FullPostLayout = () => {
  const { id } = useParams();

  const post = useSelector(getPostSelector);

  const [showEditForm, setShowEditForm] = useState(false);

  const dispatch = useDispatch();
  const deletePost = (postId) => dispatch(deletePostAction(postId));

  let history = useHistory();

  useEffect(() => {
    console.log(id);
    const getPost = (postId) => dispatch(getPostByIdAction(postId));
    getPost(id);
  }, [id, dispatch]);

  const handleDeletePost = (postId) => {
    deletePost(postId);
    history.push('/');
  }

  return (
    <div className="full-post">
      {post ? (
        <div className='container'>
          <div className='full-post__top'>
            <div className="full-post__details">
              <i>Posted on {post.createdAt}</i>
            </div>
            <div className="full-post__options">
              <Link onClick={() => handleDeletePost(id)}>Remove</Link>
              <Link onClick={() => setShowEditForm(true)}>Edit</Link>
            </div>
          </div>
          <br />
          <p className="full-post__text">{post.text}</p>
        </div>
      ) : (
        <Loader/>
      )}
      <Link to="/">
        <Button variant="light" className='back-button'>Back</Button>
      </Link>
      {
        showEditForm ? <EditForm {...post}
        show={showEditForm}
        onHide={() => setShowEditForm(false)} /> : ''
      }
    </div>
  );
};
