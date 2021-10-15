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


blogRouter.delete('/:id', async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

blogRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  if (!body.likes) {
      body.likes = 0
  }

  const blog = new Blog(body);

  try {
      const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
      logger.info(`blog ${blog.title} updated`)
      response.json(updatedBlog.toJSON())
  } catch (exception) {
      next(exception)
  }
})



module.exports = blogsRouter;
