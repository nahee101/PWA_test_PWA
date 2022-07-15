import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');

  const onChange = (e) => {
    const { target: {value}} = e;
    setName(value);
  }

  return (
    <div className="App">
      <h1>Home</h1>
      <p>당신의 이름은 무엇입니까?</p>
      <input type='text' onChange={onChange}/>

      <h3>반갑습니다 {name} 님</h3>
    </div>
  );
}

export default App;
