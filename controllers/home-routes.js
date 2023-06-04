const homeRouter = require("express").Router();
const { PostModel, CommentModel, UserModel } = require("../models");

homeRouter.get("/", (req, res) => {
  PostModel.findAll({
    include: [UserModel],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

homeRouter.get("/post/:id", (req, res) => {
  PostModel.findByPk(req.params.id, {
    include: [
      UserModel,
      {
        model: CommentModel,
        include: [UserModel],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

homeRouter.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

homeRouter.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = homeRouter;
