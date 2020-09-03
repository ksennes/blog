import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { Modal, Form, Button } from "react-bootstrap";

import "./add-form.scss";

import {addPostAction} from '../../../../redux/modules/posts/posts.action';

export const AddForm = (props) => {
  const [title, setTitle] = useState();
  const [imageURL, setImageURL] = useState();
  const [description, setDescription] = useState();

  const dispatch = useDispatch();

  const addPost = (title, imageURL, description) => dispatch(addPostAction(title, imageURL, description));

  const handleAddPost = (newTitle, newImageURL, newDescription) => {
    addPost(newTitle, newImageURL, newDescription);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onSubmit={() => {
        handleAddPost(title, imageURL, description);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="add-form">
          <Form.Group controlId="formTitle" className="add-form__row">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title: " onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formImageURL" className="add-form__row">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Enter image URL: " onChange={(e) => setImageURL(e.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formDescription" className="add-form__row">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="8" placeholder="Enter text: " onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add post
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
