import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import Blog from './Blog'

const blog = {
  'title': 'Great developer experience',
  'author': 'Superuser',
  'url': 'https://jestjs.io/blog/2017/01/30/a-great-developer-experience',
  'likes': 21
}

test('default view, only render title and author', () => {
  const component = render(
    <Blog blog={blog} />
  )

  const blogTitle = component.container.querySelector('.blogAuthorTitle')
  expect(blogTitle).toBeDefined()
  expect(blogTitle).toBeDefined()
  expect(blogTitle).toHaveTextContent('Great developer experience')
  expect(blogTitle).toHaveTextContent('Superuser')
})

test('view button, and can see blog detail', () => {
  const component = render(
    <Blog blog={blog} mockHandler />
  )

  const button = component.getByText('view')
  fireEvent.click(button)


  const showAll = component.container.querySelector('.showAll')

  expect(showAll).toBeVisible()
  expect(showAll).toHaveTextContent('https://jestjs.io/blog/2017/01/30/a-great-developer-experience')
  expect(showAll).toHaveTextContent('21')
})