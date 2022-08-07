import ReactDOM from 'react-dom';
import App from './App'
import './index.css' 

ReactDOM.render(<App/>, document.querySelector("#root"));



// react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. 
// Use createRoot instead. 
// Until you switch to the new API, your app will behave as if it's running React 17. 
// Learn more: https://reactjs.org/link/switch-to-createroot

//  Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

//  After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// //import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

