import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteIndex = (id) => {
    console.log("Vai eliminar!")
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log("Está eliminado!")
    return request.then((response) => response.data);
  };

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
  getAll: getAll,
  create: create,
  update: update,
  deleteIndex: deleteIndex
};
