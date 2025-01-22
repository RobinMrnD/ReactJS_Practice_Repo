import React, {useState} from 'react';

function MyComponent(){
   
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 2);
        setCount(c => c + 2);
    }

    const decrement = () => {
        setCount(c => c - 2);
        setCount(c => c - 3);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div>
           <p>Count: {count}</p>
           <button onClick={decrement}>Decrement</button>
           <button onClick={reset}>Reset</button>
           <button onClick={increment}>Increment</button>
        </div>
    )

}

export default MyComponent