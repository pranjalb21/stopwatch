import React, { useState } from "react";

const StopWatch = () => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [miliSecond, setMiliSecond] = useState(0);
    const [value, setValue] = useState('Start');
    const [x, setX] = useState(0);

    if (second > 59) {
      setMinute((prevMin) => prevMin + 1);
      setSecond(0);
    }
    if (minute > 59) {
      setHour((prevHour) => prevHour + 1);
      setMinute(0);
    }
    if (miliSecond > 99) {
      setSecond((prevMiliSecond) => prevMiliSecond + 1);
      setMiliSecond(0);
    }
    let hr = hour < 10 ? ('0' + hour): hour;
    let mn = minute < 10 ? ('0' + minute): minute;
    let sc = second < 10 ? ('0' + second): second;
    let msc = miliSecond < 10 ? "0" + miliSecond : miliSecond;

    const timerIncrease = () => {
        if(value ==='Start' || value === 'Resume'){
            setValue('Pause');
            setX(setInterval(() => {setMiliSecond((prevValue) => prevValue + 1);}, 10));
        }else{
            clearInterval(x);
            setValue('Resume');
        }
    };

    const reset = () => {
        setValue('Start');
        setHour(0);
        setMinute(0);
        setSecond(0);
        setMiliSecond(0);
        clearInterval(x);
    }

    return (
        <React.Fragment>
           <h1>{hr}:{mn}:{sc}:{msc}</h1>
           <button className="btn" onClick={timerIncrease}>{value}</button> 
           <button className="btn" onClick={reset}>Reset</button> 
        </React.Fragment>
    );
};

export default StopWatch;
