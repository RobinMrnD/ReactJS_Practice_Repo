import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){ 

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor ="yellow";
        inputRef.current.style.width ="500px";
        inputRef2.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor ="red";
        inputRef2.current.style.height ="300px";
        inputRef.current.style.backgroundColor ="";
        inputRef3.current.style.backgroundColor ="";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor ="green";
        inputRef2.current.style.backgroundColor ="";
        inputRef.current.style.backgroundColor ="";
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click Here
            </button>
            <input ref = {inputRef}/>
            <button onClick={handleClick2}>
                Click Here
            </button>
            <input ref = {inputRef2}/>
            <button onClick={handleClick3}>
                Click Here
            </button>
            <input ref = {inputRef3}/>
        </div>
    )

}

export default MyComponent