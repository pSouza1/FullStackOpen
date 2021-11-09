import React from 'react'

const BlogForm = (props) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={props.addBlog} className="formTest">
        <div>
          title: <input onChange={props.handleTitleChange} value={props.title} className="titleTest" id="user" />
        </div>
        <div>
          author: <input onChange={props.handleAuthorChange} value={props.author} className="authorTest" id="pass" />
        </div>
        <div>
          url: <input onChange={props.handleUrlChange} value={props.url} className="urlTest" id="url"/>
        </div>
        <button id="create" type="submit">create</button>
      </form>
      <button onClick={() => props.setCreateBlogVisible(false)}>cancel</button>
    </div>
  )
}

export default BlogForm
