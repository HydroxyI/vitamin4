import React from 'react';
import { useState, useEffect } from 'react';

const NotHome = () => {
  const [counter, setCounter] = useState(0);
  const [passed, setPassed] = useState(false);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }
  useEffect(() => {
    if (counter > 5) { setPassed(true); }
    if (counter < 0) { setCounter(0); }
  });
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      {passed && <h3>You passed 5!</h3>}
    </div>
  );
};

export default NotHome;