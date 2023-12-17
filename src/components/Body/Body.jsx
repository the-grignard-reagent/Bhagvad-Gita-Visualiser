// Importing necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './Body.css';
import { apiConfig } from './apiConfig'; // Importing the apiConfig module

// Defining the Body component
function Body() {
  // State variables using the useState hook
  const [chapter, setChapter] = useState(4);
  const [slokno, setSlokno] = useState(7);
  const [chpno, setChpno] = useState(0);
  const [content, setContent] = useState({
    text: '',
    transliteration: '',
    translations: [{ description: '' }],
  });

  // Arrays to store options for select elements
  const array = [];
  let slokarray = [];

  // Function to render options for select elements
  function renderOptions(name, n) {
    for (let j = 1; j < n + 1; j++) {
      name[j] = (
        <option key={j} value={j}>
          {j}
        </option>
      );
    }
  }

  // Rendering options for chapters and slokas based on the selected chapter
  renderOptions(array, 18);

  if (chapter === "1") {
    renderOptions(slokarray, 47);
  } else if (chapter === "2") {
    // ... (similar blocks for other chapters)
  } else if (chapter === "18") {
    renderOptions(slokarray, 78);
  }

  // Environment variables for the API host and key
  let host = process.env.REACT_APP_HOST;
  let api = process.env.REACT_APP_API_KEY;

  // Function to fetch content from the API based on selected chapter and sloka
  async function getContent() {
    const options = {
      method: 'GET',
      url: `https://${apiConfig.host}/v2/chapters/${chapter}/verses/${slokno}/`,
      headers: {
        'x-rapidapi-host': apiConfig.host,
        'x-rapidapi-key': apiConfig.apiKey,
      },
    };

    await axios
      .request(options)
      .then(function (res) {
        setContent(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // Event listener for window load to fetch content initially
  window.addEventListener("load", getContent);

  // Event handler for chapter selection
  const handleChapter = (e) => {
    setChapter(e.target.value);
    setChpno(e.target.value);
  };

  // Function to handle sloka selection
  function handleSlok() {
    getContent();
    document.getElementById("flip").checked = false;
  }

  // Async function to handle sloka input
  async function handleSlokInp(e) {
    setSlokno(e.target.value);
  }

  // Rendering the Body component
  return (
    <div>
      <div className="body_cont center">
        {/* Select elements for chapter and sloka */}
        <div className="select center">
          <select name="chapter" id="chapter" onChange={handleChapter}>
            <option value="0">Select Adhyay</option>
            {array}
          </select>
          <select
            name="slok"
            id="slok"
            onInput={handleSlokInp}
            onChange={handleSlok}
          >
            {chpno === 0 ? (
              <option value="0">Select Adhyay first</option>
            ) : (
              <option value="0">Select Sloka</option>
            )}
            {slokarray}
          </select>
        </div>

        {/* Card component to display content */}
        <Card
          slok={content?.text}
          transliteration={content?.transliteration}
          hindi_trans={content.translations[5]?.description}
          english_trans={content.translations[2]?.description}
        />
      </div>
    </div>
  );
}

// Exporting the Body component as the default export
export default Body;
