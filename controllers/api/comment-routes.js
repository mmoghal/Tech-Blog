const commentRouter = require("express").Router();
const { Comment } = require("../../models/comment");
const withAuth = require("../../utils/auth");

commentRouter.post("/", withAuth, (req, res) => {
  Comment.create({ ...req.body, userId: req.session.userId })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = commentRouter;
