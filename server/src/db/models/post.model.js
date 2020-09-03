import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    title: String,
    text: String,
    imageURL: String,
  },
  {
    timestamps: true
  }
);

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;