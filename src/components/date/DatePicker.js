import React, { useState } from "react";
import CurrentDate from "./ChooseDate";
import { Title } from "@mantine/core";

export default function Date() {
    
    const [dato, setDato] = useState("")

    return (
        <div className="nr-date-div">
            <Title className='date-title'>Date</Title>
            <div>
                <CurrentDate />
            </div>
        </div>
    );
}