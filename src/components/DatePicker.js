import React, { useState } from "react";
import useMyContext from "@/context/my-context";
import Link from "next/link";
import { DatePicker } from "@mantine/dates";
import CurrentDate from "./todayDate";
import { Title } from "@mantine/core";

export default function Date() {
    

    return (
        <div className="nr-date-div">
            <Title className='date-title'>Date</Title>
            <div>
                <CurrentDate />
            </div>
        </div>
    );
}