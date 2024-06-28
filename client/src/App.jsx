import { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: false,
    numbers: true,
    symbols: true,
    excludeDuplicate: false,
    spaces: false,
  });

  const handleOptionChange = (e) => {
    const { id, checked } = e.target;
    setOptions({ ...options, [id]: checked });
  };

  const handleLengthChange = (e) => {
    const value = Number(e.target.value);
    if (value > 64) {
      setLength(64);
    } else if (value < 1) {
      setLength(1);
    } else {
      setLength(value);
    }
  };

  const generatePassword = () => {
    axios
      .post("http://localhost:8000/generate-password", {
        length: length,
        options: options,
      })
      .then((response) => {
        setPassword(response.data.password);
      });
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard");
  };

  return (
    <div className="container">
      <p>Password Generator</p>
      <div className="wrapper">
        <div className="input-box">
          <input id="password" type="text" value={password} readOnly />
          <span id="copy" onClick={copyPassword}>
            Copy
          </span>
        </div>
        <div className="pass-settings">
          <label className="title">Password Settings</label>
          <div className="length-setting">
            <label htmlFor="length">Password Length: </label>
            <input
              id="length"
              type="number"
              min="1"
              max="64"
              value={length}
              onChange={handleLengthChange}
            />
          </div>
          <ul className="options">
            <li className="option">
              <input
                checked={options.lowercase}
                id="lowercase"
                type="checkbox"
                onChange={handleOptionChange}
              />
              <label htmlFor="lowercase">Lowercase (a-z)</label>
            </li>
            <li className="option">
              <input
                checked={options.uppercase}
                id="uppercase"
                type="checkbox"
                onChange={handleOptionChange}
              />
              <label htmlFor="uppercase">Uppercase (A-Z)</label>
            </li>
            <li className="option">
              <input
                checked={options.numbers}
                id="numbers"
                type="checkbox"
                onChange={handleOptionChange}
              />
              <label htmlFor="numbers">Numbers (0-9)</label>
            </li>
            <li className="option">
              <input
                checked={options.symbols}
                id="symbols"
                type="checkbox"
                onChange={handleOptionChange}
              />
              <label htmlFor="symbols">Symbols (!-%^+)</label>
            </li>
            <li className="option">
              <input
                id="excludeDuplicate"
                type="checkbox"
                onChange={handleOptionChange}
              />
              <label htmlFor="excludeDuplicate">Exclude Duplicate</label>
            </li>
            <li className="option">
              <input
                id="spaces"
                type="checkbox"
                onChange={handleOptionChange}
              />
              <label htmlFor="spaces">Include Spaces</label>
            </li>
          </ul>
        </div>

        <button
          className="generate-btn"
          id="generate"
          onClick={generatePassword}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default App;
