import React from 'react'
import useMyContext from "@/context/my-context";

const ChosenAttendants = () => {
    const { attendants } = useMyContext();
    return <div>Attendants <br/> <span className='chosen-text'>{attendants}</span></div>;
}

export default ChosenAttendants