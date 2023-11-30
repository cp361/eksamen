import React, { useState } from 'react'
import useMyContext from "@/context/my-context";


const CurrentDate = () => {




    const contextValue = useMyContext();

    var curr = new Date();
    curr.setDate(curr.getDate() + 3);
    var date = curr.toISOString().substring(0, 10);

    function handleChange(event) {
        contextValue.setDate(event.target.value);
    }


    return (
        <div className='todayDate'>
            <input
                type="date"
                id="datePicker"
                name="datePicker"
                min={date}
                defaultValue={date}
                required
                value={contextValue.date}
                onChange={handleChange}
            />
        </div>
    )
}

export default CurrentDate