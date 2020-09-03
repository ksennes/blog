import { Router } from "express";
import { postService } from "../services/post.service";

const router = Router();

/* --- GET ALL POSTS --- */
router.get("/", async (req, res) => {
  const result = await postService.index();

  if ("success" in result && result.success) {
    res.status(200).send(result.posts);
  } else if ("not_found" in result && result.not_found) {
    res.status(404).send({ error_message: "Posts not found" });
  } else {
    throw new Error("Unexpected case");
  }
});

/* --- GET POST BY ID --- */
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await postService.read(id);
  
    if ("success" in result && result.success) {
      res.status(200).send(result.post);
    } else if ("not_found" in result && result.not_found) {
      res.status(404).send({ error_message: "Post not found" });
    } else {
      throw new Error("Unexpected case");
    }
  });

/* --- ADD NEW POST --- */
router.post("/add", async (req, res) => {
  const data = req.body;

  const result = await postService.create(data);

  if ("success" in result && result.success) {
    res.status(200);
  } else if ("success" in result && !result.success) {
    res.status(409).send({ error_message: "Post wasnt added"});
  } else {
    throw new Error("Unexpected case");
  }
});

/* --- UPDATE POST --- */
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await postService.update(id, data);
  if ("success" in result && result.success) {
    res.status(200);
  } else if ("success" in result && !result.success) {
    res.status(409).send({error_message: "Post wasnt updated"});
  } else {
    throw new Error("Unexpected case");
  }
});

/* --- DELETE POST BY ID --- */
router.delete("/delete/:id", async (req, res) => {
  const {id} = req.params;

  console.log(id);

  const result = await postService.delete(id);
  if ("success" in result && result.success) {
    res.status(200);
  } else if ("success" in result && !result.success) {
    res.status(409).send({error_message: "Post wasnt deleted"});
  } else {
    throw new Error("Unexpected case");
  }
});

export default router;
