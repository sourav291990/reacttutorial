import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let condition = true;
let source = ''
if(condition){
  source = 'www.google.com'
}
else{
  source = 'www.google.com'
}

const headRoot1 = document.querySelector('#customScript1');
ReactDOM.createRoot(headRoot1).render(
  <script src={source}></script>
)

const headRoot2 = document.querySelector('#customScript2');
ReactDOM.createRoot(headRoot2).render(
  <script src={source}></script>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
