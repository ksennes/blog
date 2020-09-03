import PostModel from "../db/models/post.model";

class PostService {
  async index() {
    const posts = await PostModel.find();
    if (!posts) return { not_found: true };
    return { success: true, posts };
  }

  async create({ title, text }) {
    const post = new PostModel({
      title: title,
      text: text,
    });

    const addedPost = await post.save();
    if (!addedPost) return { success: false };
    return { success: true };
  }

  async read(id) {
    const post = await PostModel.findOne({ _id: id });
    if (!post) return { not_found: true };
    return { success: true, post };
  }

  async update(id, data) {
    const upadtedPost = await PostModel.findByIdAndUpdate(id, { $set: data });
    if (!upadtedPost) return { success: false };
    return { success: true };
  }

  async delete(id) {
    const deletedPost = await PostModel.deleteOne({ _id: id });
    if (deletedPost.deletedCount) return { success: true };
    return { success: false };
  }
}

export const postService = new PostService();
