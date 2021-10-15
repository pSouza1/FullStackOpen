const blogsRouter = require('express').Router()
const Blog = require("../models/blog");


blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});


blogsRouter.post("/", (request, response) => {

  const body = request.body

  if (!body.likes) {
    body.likes = 0
}

if ((!body.title) || (!body.url)) {
  response.status(400).end()
}else{


    const blog = new Blog(body);

  blog.save().then((result) => {
    response.status(201).json(result);
  })
}
});


module.exports = blogsRouter;
