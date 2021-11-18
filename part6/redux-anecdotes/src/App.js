import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import Filter from "./components/Filter";

import { initialize } from "./reducers/anecdoteReducer";
import service from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    service.getAll().then((data) => dispatch(initialize(data)));
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>

      <Notification />

      <Filter />

      <AnecdoteList />

      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
