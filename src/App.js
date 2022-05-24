import React from "react";
import "./App.css";
import PrintArticle from "./component/PrintArticle";
import { keyGenerator, createServer } from "./util";

function App() {
  let data = createServer();

  return (
    <div className="App">
      <div className="printAricle">
        {data.map((el) => {
          return (
            <PrintArticle
              key={keyGenerator(10)}
              url={el.url}
              title={el.title}
              category={el.category}
              excerpt={el.excerpt}
            ></PrintArticle>
          );
        })}
      </div>
    </div>
  );
}

export default App;
