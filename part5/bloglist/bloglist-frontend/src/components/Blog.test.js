import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
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