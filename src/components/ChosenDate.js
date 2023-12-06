import React from 'react'
import useMyContext from "@/context/my-context";

const ChosenDate = () => {
    const { date } = useMyContext();
    return <div>Date <br/> <span className='chosen-text'>{date}</span></div>;
}

export default ChosenDate