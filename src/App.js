import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>FAQ</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion {...question} key={question.id} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
