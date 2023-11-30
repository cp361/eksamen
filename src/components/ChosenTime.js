import React from 'react'
import useMyContext from "@/context/my-context";

const ChosenTime = () => {
    const { time } = useMyContext();
    return <div>Time <br/> {time}</div>;
}

export default ChosenTime