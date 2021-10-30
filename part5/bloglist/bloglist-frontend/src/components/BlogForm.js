import React from "react";

const BlogForm = (props) => {
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={props.addBlog}>
        <div>
          title: <input onChange={props.handleTitleChange} value={props.title} />
        </div>
        <div>
          author: <input onChange={props.handleAuthorChange} value={props.author} />
        </div>
        <div>
          url: <input onChange={props.handleUrlChange} value={props.url} />
        </div>
        <button type="submit">create</button>
      </form>
      <button onClick={() => props.setCreateBlogVisible(false)}>cancel</button>
    </div>
  );
};

export default BlogForm;
