import "./App.css";
import React, { useRef, useState } from "react";
import Word from "./components/Word";
import Timer from "./components/Timer";

const cloudText =
  `As TypeScript and static typing increasingly becomes a best practice in web development API contracts present a major pain
   point We need better ways to statically type our API endpoints and share those types between our client and server or server to server
    We set out to build a simple library for building typesafe APIs that leverages the full power of modern TypeScript`.split(" ");
 

function App() {

  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([])
  const [startCounting, setStartCounting] = useState(false)

  const cloud = useRef(cloudText);

  // function to process user key inputs
  function processInput(value) {
    // TODO: Add validation for the end, word count,timer
   if(!startCounting) setStartCounting(true)

    if (value.endsWith(" ")) {
      // user has finished this word
      setActiveWordIndex((index) => index + 1);
      setUserInput("");

      //correct word
      setCorrectWordArray(data => {
        const word = value.trim()
        let newResult = [...data]
        newResult[activeWordIndex] = word ===cloud.current[activeWordIndex]
        return newResult
      })
    } else {
      setUserInput(value);
    }
  }

  return (
    <div className="App">
      <h1>Typing Test</h1>

      <Timer startCounting={startCounting}/>
      
      <p>
        {cloud.current.map((word, index) => (
          <Word
            key={index}
            text={word}
            active={index === activeWordIndex}
            correct={correctWordArray[index]}
          />
        ))}
      </p>

      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
}

export default App;
