describe('Blog app', function () {
  beforeEach(function () {

    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3000')

    const user = {
      'username': 'userTest',
      'password': 'passTest',
      'name': 'nameTest'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  it('Login form is shown', function () {
    cy.contains('log in to application')
    cy.contains('username')
    cy.contains('password')
    cy.contains('login')
  })
})


describe('Login', function () {
  it('succeeds with correct credentials', function () {
    cy.get('input:first').type('userTest')
    cy.get('input:last').type('passTest')
    cy.contains('login').click()

    cy.contains('logged in')
    cy.contains('logout').click()
  })

  it('fails with wrong credentials', function () {
    cy.get('input:first').type('user123')
    cy.get('input:last').type('pass123')
    cy.contains('login').click()
  })
})


describe('When logged in', function() {
  beforeEach(function() {

    cy.visit('http://localhost:3000')
    cy.get('input:first').type('userTest')
    cy.get('input:last').type('passTest')
    cy.contains('login').click()

  })

  it('A blog can be created', function() {
    cy.contains('create new blog').click()
    cy.get('#user').type('TesteT')
    cy.get('#pass').type('TesteA')
    cy.get('#url').type('www.testeurl.com')

    cy.get('#create').click()

    cy.contains('added')

  })
})
