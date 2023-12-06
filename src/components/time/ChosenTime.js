import React from 'react'
import useMyContext from "@/context/my-context";

const ChosenTime = () => {
    const { timeStart, timeEnd } = useMyContext();
    return <div>Time <br/> <span className='chosen-text'>{timeStart} - {timeEnd}</span></div>;
}

export default ChosenTime