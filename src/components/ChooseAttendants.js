import React from 'react'
import useMyContext from "@/context/my-context";
import { NumberInput } from '@mantine/core';


const ChooseAttendants = () => {

    const contextValue = useMyContext();

    

    function handleChange(event) {
        contextValue.setAttendants(event.target.value);
    }
    
    
    return (
        <div>
            <input type='number' value={contextValue.attendants} onChange={handleChange}></input>
        </div>
    )
}

export default ChooseAttendants