import React from "react";
import "./PrintArticle.css"
import { validateText, validationUrl } from "../util";

export default function PrintArticle(props) {
  const currentTitle = validateText(props.title);
  const currentExcerpt = validateText(props.excerpt);
  const currentcategory = validateText(props.category).toUpperCase();
  const currentUrl = validationUrl(props.url);

  return (
    <div className="card">
      <img src={currentUrl} alt="imgCard"></img>
      <h3>
        <strong>{currentTitle}</strong>
      </h3>
      <p>{currentExcerpt}</p>
      <p> | {currentcategory}</p>
    </div>
  );
}
