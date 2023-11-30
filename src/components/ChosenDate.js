import React from 'react'
import useMyContext from "@/context/my-context";

const ChosenDate = () => {
    const { date } = useMyContext();
    return <div>Date <br/> {date}</div>;
}

export default ChosenDate