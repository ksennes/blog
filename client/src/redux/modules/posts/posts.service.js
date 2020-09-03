import axios from "axios";

export function getPosts() {
  return axios.get("/api/posts/");
}

export function addPost(title, text, imageURL) {
  return axios.post('/api/posts/add', {title, text, imageURL});
}

export function editPost(_id, title, imageURL, text) {
  return axios.put(`/api/posts/update/${_id}`, {title, imageURL, text});
}

export function deletePost(_id) {
  return axios.delete(`/api/posts/delete/${_id}`);
}