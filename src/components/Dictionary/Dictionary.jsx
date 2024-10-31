import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");
  let [results, setResults] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search(evt) {
    evt.preventDefault();
    alert(`Searching for ${keyword}`);
    const apiKey = process.env.REACT_APP_DICTIONARY_API_KEY;

    // docs: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(evt) {
    setKeyWord(evt.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results />
    </div>
  );
}
