import React, {useState, useEffect} from 'react'

function Clock(){

    const [time,setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(mins)}:${padZero(secs)}:${padZero(meridiem)}`;
    }

    function padZero(number){
        return (number < 10 ? "0": "") + number;
    }

    return(
        <div>
            <div className='clock-cntnr'>
                <div className='clock'>
                    <span>{formatTime()}</span>
                </div>
            </div>
        </div>
    );
}

export default Clock

