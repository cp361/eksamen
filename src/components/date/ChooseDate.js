import React, { useRef, useState } from 'react'
import useMyContext from "@/context/my-context";
import { DatePicker } from '@mantine/dates';
import '@mantine/dates/styles.css';


const CurrentDate = () => {


    const [dato, setDato] = useState("")

    const handleDatoChange = (e) => {
        setDato(e.target.value)
    }

    const contextValue = useMyContext();
    // const { date } = useMyContext();

    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0, 10);

    function handleChange(event) {
        contextValue.setDate(event.target.value);
    }


    // const handleChangeDate = (date) => {
    //     contextValue.setDate(date)
    // };


    return (
        <div className='todayDate'>

            {/* <DatePicker
                allowDeselect
                hideOutsideDates
                weekendDays={[0, 6]}
                value={date}
                onChange={handleChangeDate}
                size={'sm'} /> */}


            {/* <input
                type="date"
                id="datePicker"
                name="datePicker"
                min={date}
                defaultValue={date}
                required
                value={contextValue.date}
                onChange={handleChange}
            /> */}
            <input
                type="date"
                id="datePicker"
                name="datePicker"
                min={date}
                defaultValue={date}
                value={dato}
                onChange={handleDatoChange}
                required
            />
        </div>
    )
}

export default CurrentDate