import React from 'react'
import useMyContext from "@/context/my-context";

const ChosenAttendants = () => {
    const { attendants } = useMyContext();
    return <div>Attendants <br/> {attendants}</div>;
}

export default ChosenAttendants