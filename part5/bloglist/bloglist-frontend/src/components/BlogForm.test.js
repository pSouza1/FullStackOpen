import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import BlogForm from './BlogForm'

const handleTitleChange = jest.fn()
const handleAuthorChange = jest.fn()
const handleUrlChange = jest.fn()
const setCreateBlogVisible = jest.fn()
const addBlog = jest.fn()

const titleTest = 'Blog Title Test'
const authorTest = 'Blog Author Test'
const urlTest = 'Blog Url Test'

test('calls the event handler it received as props', () => {
  const { container } = render(
    <BlogForm
      handleTitleChange = {handleTitleChange}
      handleAuthorChange = {handleAuthorChange}
      handleUrlChange = {handleUrlChange}
      setCreateBlogVisible = {setCreateBlogVisible}
      addBlog = {addBlog}
    />
  )

  const form = container.querySelector('.formTest')
  const titleInput = container.querySelector('.titleTest')
  const authorInput = container.querySelector('.authorTest')
  const urlInput = container.querySelector('.urlTest')

  fireEvent.change(titleInput, {
    target: { value: titleTest },
  })
  fireEvent.change(authorInput, {
    target: { value: authorTest },
  })
  fireEvent.change(urlInput, {
    target: { value: urlTest },
  })

  fireEvent.submit(form)

  expect(handleTitleChange).toBeCalledTimes(1)
  expect(titleInput.value).toBe(titleTest)

  expect(handleAuthorChange).toBeCalledTimes(1)
  expect(authorInput.value).toBe(authorTest)

  expect(handleUrlChange).toBeCalledTimes(1)
  expect(urlInput.value).toBe(urlTest)

  expect(addBlog).toBeCalledTimes(1)
})
