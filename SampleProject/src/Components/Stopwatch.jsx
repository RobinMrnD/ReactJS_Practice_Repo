import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIDRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIDRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIDRef.current);
        }

    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let secs = Math.floor(elapsedTime / 1000 % 60);
        let ms = Math.floor((elapsedTime % 1000) / 10 );

        hours = String(hours).padStart(2,"0")
        mins = String(mins).padStart(2,"0")
        secs = String(secs).padStart(2,"0")
        ms = String(ms).padStart(2,"0")

        return `${hours}:${mins}:${secs}:${ms}`;
    }

    return(
        <div className="stopwatch">
            <div className='display'>
                {formatTime()}
                <div className='btns'>
                    <button onClick={stop} className='stop-btn'>Stop</button>
                    <button onClick={reset} className='reset-btn'>Reset</button>
                    <button onClick={start} className='start-btn'>Start</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch