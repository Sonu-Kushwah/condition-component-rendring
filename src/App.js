import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true);
  function Other(){
    return(
      <h4>other Component</h4>
    )
  }
  return (
    <>
    <h3>component condtional rendring</h3>
    {
       show? <Other/>:"no component"
    }
    </>
  );
}

export default App;
