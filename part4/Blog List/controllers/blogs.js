const blogsRouter = require('express').Router()
const Blog = require("../models/blog");
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}


blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs.map(blog => blog.toJSON()))
})


blogsRouter.post("/", async (request, response) => {

  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

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

try {
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  logger.info(`blog linked to user ${user.username}`)
  response.json(savedBlog.toJSON())
} catch(exception) {
  next(exception)}
});


blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
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
