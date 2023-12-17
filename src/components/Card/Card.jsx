// Importing React and the CSS file for styling
import React from "react";
import "./Card.css";

// Defining the Card component
function Card(props) {
  // Destructuring props to extract individual properties
  const { slok, transliteration, hindi_trans, english_trans } = props;

  // Rendering the Card component
  return (
    <div>
      <div className="card_cont">
        {/* Checkbox for flipping the card */}
        <input type="checkbox" name="flip" id="flip" />
        {/* Label associated with the checkbox */}
        <label htmlFor="flip">
          {/* Container for the front of the card (Sloka and Transliteration) */}
          <div className="cards slok">
            {/* Sanskrit Sloka */}
            <div className="sanskrit">
              <h2>Sloka:</h2>
              {/* Checking for undefined or null values before rendering */}
              {slok === undefined || slok === null
                ? ""
                : slok.replace(/\s+/g, " ").trim()}
            </div>
            {/* Transliteration of the Sloka */}
            <div className="transliteration">
              <h2>Transliteration:</h2>
              {/* Checking for undefined or null values before rendering */}
              {transliteration === undefined || transliteration === null
                ? ""
                : transliteration.replace(/\s+/g, " ").trim()}
            </div>
            {/* Flip button to see the translation */}
            <div className="flip seetrans">
              <p>See Translation</p>
            </div>
          </div>
        </label>
        {/* Label associated with the checkbox */}
        <label htmlFor="flip">
          {/* Container for the back of the card (Translation) */}
          <div className="cards translation">
            {/* Hindi Translation */}
            <div className="hindi">
              <h2>Hindi:</h2>
              {/* Checking for undefined or null values before rendering */}
              {hindi_trans === undefined || hindi_trans === null
                ? ""
                : hindi_trans.replace(/\s+/g, " ").trim()}
            </div>
            {/* English Translation */}
            <div className="english">
              <h2>English:</h2>
              {/* Checking for undefined or null values before rendering */}
              {english_trans === undefined || english_trans === null
                ? ""
                : english_trans.replace(/\s+/g, " ").trim()}
            </div>
            {/* Flip button to see the original Sloka */}
            <div className="flip seeslok">
              <p>See Sloka</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}

// Exporting the Card component as the default export
export default Card;
