import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//esto es una prueba de git más que de react (dia 1)

const App = () => {
  const Course = 'Half Stack application development'
  const Part1 = 'Fundamentals of React'
  const Exercises1 = 10
  const Part2 = 'Using props to pass data'
  const Exercises2 = 7
  const Part3 = 'State of a component'
  const Exercises3 = 14

  return (
    <div>
      <h1>{Course}</h1>
      <p>
        {Part1} {Exercises1}
      </p>
      <p>
        {Part2} {Exercises2}
      </p>
      <p>
        {Part3} {Exercises3}
      </p>
      <p>Number of exercises {Exercises1 + Exercises2 + Exercises3}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
