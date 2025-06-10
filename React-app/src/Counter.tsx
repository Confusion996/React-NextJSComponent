import React from 'react';
import './Counter.css'; 
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className='Counter'>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;