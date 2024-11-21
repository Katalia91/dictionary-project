import React, { useState } from "react";
import Results from "../Results/Results";
import Photos from "../Photos/Photos";
import "./Dictionary.scss";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search(evt) {
    evt.preventDefault();
    const apiKey = process.env.REACT_APP_DICTIONARY_API_KEY;

    // docs: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const photosApiKey = process.env.REACT_APP_IMAGES_API_KEY;
    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;
    axios.get(photosApiUrl).then(handlePexelsResponse);
  }

  function handleKeywordChange(evt) {
    setKeyWord(evt.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <label htmlFor="search">What word do you want to look up?</label>
        <div className="input-wrapper">
          <input id="search" type="search" onChange={handleKeywordChange} />
          <button type="submit">Search</button>
        </div>
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
