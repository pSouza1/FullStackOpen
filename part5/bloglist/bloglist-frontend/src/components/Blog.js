import React, { useState } from 'react'
import blogService from '../services/blogs'
import '../App.css'

const Blog = ({ blog, handleDeleteButton }) => {

  const [blogVisible, setBlogVisible] = useState(false)
  const [blogObject, setBlogObject] = useState(blog)

  const handleLikeButton = () => {

    const updatedBlog = ({
      'title': blog.title,
      'author': blog.author,
      'url': blog.url,
      'likes': blogObject.likes + 1,
    })

    setBlogObject(updatedBlog)

    blogService.update(blog.id, updatedBlog)
  }

  if (blogVisible===(false)){
    return(
      <div className="blogBorder">
        <div className='blogAuthorTitle'>
          {blog.title} by {blog.author} <button onClick={() => setBlogVisible(true)}>view</button>
        </div>
      </div>
    )
  }else{
    return(
      <div className="blogBorder">

        {blog.title} <button onClick={() => setBlogVisible(false)}>hide</button> <br/>
        {blog.url} <br/>
        {blogObject.likes} <button onClick={handleLikeButton}>like</button><br/>
        {blog.author}<br/>
        <button onClick={() => handleDeleteButton(blog.id)}>delete</button>

      </div>
    )
  }
}

export default Blog