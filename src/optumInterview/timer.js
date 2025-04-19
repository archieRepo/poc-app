import React, { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [currentId, setCurrentId] = useState(null);
    const intervalId = useRef(null);

    const handleTimer = () => {
        setTimer((prev) => prev +1);
        console.log(timer);
    }

    const startTimer = () => {
        let idr = setInterval(handleTimer, 1000)
        setCurrentId(idr);
    }

    const pauseTimer = () => {
        clearInterval(currentId);
    }


    return (
        <div>
            <p>{timer}</p>
            <button onClick={startTimer}>{'start timer'}</button>
            <button onClick={pauseTimer}>{'pause timer'}</button>
        </div>
    )
}

export default Timer;