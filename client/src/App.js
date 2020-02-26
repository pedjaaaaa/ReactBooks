import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import axios from "axios";
import "./App.css";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyAmtvjY3E_Xw0cc20_vqTG4uuMy4RUFvMg");

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);

  }

  function handleSubmit(event) {

    event.preventDefault();

    console.log(book);

    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
    .then(data => {
      setResult(data.data.items)
      console.log(data.data.items)
    })

  }

  return (
    <div className="container">
      <h1>Book Search App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            onChange={handleSubmit}
            type="text"
            className="form-control mt-10"
            placeholder="Search for books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>
      {result.map(book => (
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
      ))}
    </div>
  );
}

export default App;
