import React, { useState } from "react";
import Results from "../Results/Results";
import "./Dictionary.scss";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search(evt) {
    evt.preventDefault();
    const apiKey = process.env.REACT_APP_DICTIONARY_API_KEY;

    // docs: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(evt) {
    setKeyWord(evt.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
        <button type="submit">Search</button>
      </form>
      <Results results={results} />
    </div>
  );
}
