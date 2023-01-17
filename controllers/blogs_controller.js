const express = require('express')
const router = express.Router()
const Blog = require('../models/blogs')
const User = require('../models/user')
//Index/Get Route
router.get('/', (req, res) => {
    console.log('WE SMACKED THE GET ROUTER /blogs !!!')
    Blog.find()
      .then(foundBlogs => {
        res.json(foundBlogs)    //res.render
      })
      .catch(err => {
        console.log(err)
        res.json('error404')
      })
  })
  
  router.get('/:id', (req, res) => {
    console.log('WE SMACKED THE GET ROUTER /blogs/:id', req.params)
    Blog.findById(req.params.id)
      .then(foundBlogs => {
        res.json(foundBlogs)
      })
      .catch(err => {
        console.log(err)
        res.render('error404')
      })
  })
  
  router.get("/:id/edit", (req, res) => {
    Blog.find()
      .then((foundBlogs) => {
        res.json(foundBlogs);
      })
      .catch((err) => {
        console.log(err);
        res.render("error404");
      });
  });
  
  //Put/Patch Route
  router.put("/:id", (req, res) => {
    console.log("are you working?", req.params.id, req.body)
    Blog.findByIdAndUpdate(req.params.id, req.body)
      .then((foundBlogs) => {
        console.log(foundBlogs)
        res.status(foundBlogs);
      })
      .catch((err) => {
        console.log(err);
        res.render("error404");
      });
  });
  
  //Post Route
  router.post('/', (req, res) => {
    console.log("are you working? New blog", req.params.id, req.body)
    Blog.create(req.body)
      .then((foundBlogs) => {
        res.json(foundBlogs)
      })
      .catch(err => {
        console.log(err)
        res.render('error404')
      })
  })
  
  
  //Delete Route
  router.delete("/:id", (req, res) => {
    console.log(' DELETE ROUTE!!!! WE SMACKED THE GET ROUTER /blogs:id !!!')
    Blog.findByIdAndDelete(req.params.id)
      .then(() => {
        res.send("Delete was successful");
      })
      .catch((err) => {
        console.log(err);
        res.render("error404");
      });
  });

  router.post('/', (req, res) => {
    console.log("are you working? New blog", req.params.id, req.body)
    User.create(req.body)
      .then((foundUser) => {
        res.json(foundUser)
      })
      .catch(err => {
        console.log(err)
        res.render('error404')
      })
  })

module.exports = router;