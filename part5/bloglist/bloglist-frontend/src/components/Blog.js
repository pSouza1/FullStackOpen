import React, {useState} from 'react'
import '../App.css'

const Blog = ({blog}) => {

  const [blogVisible, setBlogVisible] = useState(false)

if (blogVisible===(false)){
  return(
  <div className="blogBorder">
    {blog.title} by {blog.author} <button onClick={() => setBlogVisible(true)}>view</button>
  </div> 
  )
}else{
  return(
    <div className="blogBorder">
      <p> {blog.title} <button onClick={() => setBlogVisible(false)}>hide</button> <br/>
      {blog.url} <br/>
      {blog.likes} <button>like</button><br/>
      {blog.author} </p>
    </div>
  )
}
}

export default Blog