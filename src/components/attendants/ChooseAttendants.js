import React, { useState } from 'react'
import useMyContext from "@/context/my-context";
import { NumberInput } from '@mantine/core';


const ChooseAttendants = () => {


    const handleAntalChange = (e) => {
        setAntal(e.target.value)
    }
    const [antal, setAntal] = useState("")


    const contextValue = useMyContext();



    function handleChange(event) {
        contextValue.setAttendants(event.target.value);
    }


    return (
        <div className='attendants'>
            {/* <input type='number' placeholder='0' value={contextValue.attendants} onChange={handleChange}></input> */}

            <input
                type="number"
                placeholder="0"
                value={antal}
                onChange={handleAntalChange}
            />

        </div>
    )
}

export default ChooseAttendants