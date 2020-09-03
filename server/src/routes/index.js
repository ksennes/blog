import express from 'express';

import posts from './post.router';

const router = express.Router();

router.use('/posts', posts);

export default router;