require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
let persons = [];

morgan.token("bodyContent", function (req, res) {
  return req.body;
});

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("build"));

const Person = require("./models/persons");

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.get("/api/persons", (request, response, next) => {
  Person.find({})
  .then((persons) => {
    if(persons){
    response.json(persons);
    }else{
      response.status(404).end()
    }
  })
  .catch(error => {
    console.log(error)
    response.status(500).end()
  })
});


app.get("/info", (request, response) => {

  var dt = new Date();
  
  Person.find({}).then(persons => {
    persons.map(person => person.toJSON());
    response.send(
    "<p>Phonebook has info for " + persons.length + " people" + "<p>" + dt
    )}
  )
});


app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
      if (person) {
          response.json(person.toJSON())
        } else {
          response.status(404).end()
        }
  })
  .catch(error => next(error))
})


app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});



app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });
  console.log(person);

  person.save()
  .then((savedPerson) => savedPerson.toJSON())
  .then((savedPerson) => {response.json(savedPerson)
  })
  .catch(error => next(error))
});


app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }


  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})



const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
  }
    next(error)
}

app.use(errorHandler)
