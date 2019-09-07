import React, { useState } from "react";
import Array from "./project/array.json";

function createMarkup(html) {
  return { __html: html };
}

function App() {
  const [value, setValue] = useState(Array);
  let html = "";
  for (var key in value) {
    if (key !== "head") {
      const context = value[key][0];
      html += `<img src=${context.image}>${context.headline}${context.text}`;
    }
  }
  return <div dangerouslySetInnerHTML={createMarkup(html)} />;
}

export default App;
