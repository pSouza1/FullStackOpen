require('dotenv').config()
const express = require("express");
const app = express();
const morgan = require('morgan');
let persons = []


morgan.token('bodyContent', function (req, res) { return req.body })

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('build'))


const Person = require('./models/persons')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


app.get('/api/persons', (request, response, next)=>
{
  Person.find({}).then(persons => {
    response.json(persons) })
}, 

(request, response) => {
    response.json(persons)
  })

  app.get('/info', (request, response) => {

    var dt = new Date();
    response.send('<p>Phonebook has info for ' +persons.length+ ' people'+'<p>' +dt)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)
  
    response.status(204).end()
  })



const generateId = () => {
  const id = Math.floor(Math.random() * 100);
  return id
}


app.post('/api/persons', (request, response) => {
 
  const body = request.body

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })
  console.log(person)

  person.save().then(savedPerson => {
  response.json(savedPerson)
})
})