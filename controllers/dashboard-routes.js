// Import necessary modules and models
const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");
const authenticateUser = require("./authenticateUser");

// Route for displaying all posts in the dashboard
router.get("/", withAuth, authenticateUser, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts-admin", {
        layout: "dashboard",
        posts
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

// Route for displaying the form to create a new post in the dashboard
router.get("/new", withAuth, authenticateUser, (req, res) => {
  res.render("new-post", {
    layout: "dashboard"
  });
});

// Route for displaying the form to edit a post in the dashboard
router.get("/edit/:id", withAuth, authenticateUser, (req, res) => {
  Post.findByPk(req.params.id)
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          layout: "dashboard",
          post
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
