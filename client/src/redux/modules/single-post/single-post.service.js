import axios from 'axios';

export function getPostById(_id) {
    return axios.get(`/api/posts/${_id}`);
  }