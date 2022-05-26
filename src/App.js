import { useLayoutEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
    <ul>
  <li className="li">
      <p className="string">Test 1</p> 
       <div className="button">
         <button className="btn" alt="Code desktop">Edit</button> 
        <button className="btn" alt="Code desktop">Delete</button> 
       </div>
  </li>
  <li className="li">
      <p className="string">Test 2</p>
      <div className="button">
         <button className="btn" >Edit</button> 
        <button className="btn" >Delete</button> 
       </div>
  </li>
</ul>
</div>
  ) 
  
}

export default App;