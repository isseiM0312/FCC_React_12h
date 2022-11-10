import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './challenge_1/App';
import App2 from './challenge_2/App2';
import Airbnb from './airbnb/Airbnb';
import reportWebVitals from './reportWebVitals';
import Travel from './travel_journal/Travel_journal.jsx';
import Meme from './meme/Meme';
import Tenzies from './tenzies/Tenzies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tenzies />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
