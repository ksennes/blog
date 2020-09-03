import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";

import "./edit-form.scss";

import {editPostAction} from '../../../../redux/modules/posts/posts.action';

export const EditForm = (props) => {
  const [newTitle, setNewTitle] = useState(props.title);
  const [newImageURL, setNewImageURL] = useState(props.imageURL);
  const [newDescription, setNewDescription] = useState(props.text);

  const dispatch = useDispatch();

  const editPost = (id, title, imageURL, description) => dispatch(editPostAction(id, title, imageURL, description));

  const handleEditPost = (id, newTitle, newImageURL, newDescription) => {
    editPost(id, newTitle, newImageURL, newDescription);
  }

  return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onSubmit={() => {
          handleEditPost(props._id, newTitle, newImageURL, newDescription);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="add-form" 
        onSubmit={()=> handleEditPost(newTitle, newImageURL, newDescription)}
        >
          <Form.Group controlId="formTitle" className="add-form__row">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title: "
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formImageURL" className="add-form__row">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL: "
              value={newImageURL}
              onChange={(e) => setNewImageURL(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="add-form__row">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="8"
              placeholder="Enter text: "
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save the changes
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
  );
};
