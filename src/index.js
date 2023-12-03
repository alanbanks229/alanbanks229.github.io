import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './routes/Project';
import Blogs from './routes/Blogs';
import Resume from './routes/Resume';
import Home from './routes/Home.jsx';

import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Home/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
  

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
