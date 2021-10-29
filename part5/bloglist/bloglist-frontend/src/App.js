import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login' 
import Notification from './components/Notification'
import LoginForm from './components/Login'


const App = () => {
  const [blogs, setBlogs] = useState([])

  const [notificationMessage, setNotificationMessage] = useState(null)

  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  const [user, setUser] = useState(null)

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setUrl] = useState("")

  const [createBlogVisible, setCreateBlogVisible] = useState(false)
  

  const addBlog = async (event) => {
    event.preventDefault()

    const blogObject = {
      "title": title,
      "author": author,
      "url": url
    }

    try{
      blogService.create(blogObject).then(returnedBlog =>
        setBlogs(blogs.concat(returnedBlog))
      )
      setNotificationMessage(`a new blog ${blogObject.title} by ${blogObject.author} added`)
      setCreateBlogVisible(false)
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000)
    }catch(exception){
      setNotificationMessage(null)
    }
  }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      ) 

      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setNotificationMessage('Wrong Username or Password')
      setTimeout(() => {
        setNotificationMessage(null)
      }, 3000)
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBloglistUser')
    setUser(null)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const hideWhenVisible = { display: createBlogVisible ? 'none' : '' }
  const showWhenVisible = { display: createBlogVisible ? '' : 'none' }

  
  const blogList = () => (
    <div>
      <h2>blogs</h2>

      <p>{user.name} logged in</p>
      <button onClick={handleLogout} type="submit">logout</button>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}

    <div style={showWhenVisible}>
      <h2>create new</h2>
      <form onSubmit={addBlog}>
        <div>title: <input onChange={handleTitleChange} value={title}/></div>
        <div>author: <input onChange={handleAuthorChange} value={author}/></div>
        <div>url: <input onChange={handleUrlChange} value={url}/></div>
        <button type="submit">create</button>
      </form>
      <button onClick={() => setCreateBlogVisible(false)}>cancel</button>
    </div>

    <div style={hideWhenVisible}>
    <button onClick={() => setCreateBlogVisible(true)}>create new blog</button>
    </div>

      
    </div>

    
  )

  return (
    <div>
      <p><Notification message={notificationMessage}/></p>
      {user === null && <LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
      {user !== null && blogList()}
    </div>
  )
}

export default App