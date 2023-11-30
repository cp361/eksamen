import React, { useState } from 'react'
import useMyContext from "@/context/my-context";

import { Combobox, InputBase, Input, useCombobox } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/dates/styles.css';


const times = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const hours = ['1 hour', '2 hours', '3 hours', '4 hours']

const ChooseTime = () => {


    const [timeValue, timeSetValue] = useState(null);
    const [secondTimeValue, secondTimeSetValue] = useState(null);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const secondCombobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = times.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    const secondOptions = hours.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    const contextValue = useMyContext();


    function handleChange(event) {
        contextValue.setTime(event.target.value);
    }


    return (
        <div className='todayDate'>
            {/* Combobox 1 */}
            <Combobox
                store={combobox}
                onOptionSubmit={(val) => {
                    timeSetValue(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <InputBase
                        component="button"
                        pointer
                        rightSection={<Combobox.Chevron />}
                        value={contextValue.time}
                        onChange={handleChange}
                        onClick={() => combobox.toggleDropdown()}
                    >
                        {timeValue || <Input.Placeholder>Choose start time</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>

            {/* Combobox 2 */}
            <Combobox
                store={secondCombobox}
                onOptionSubmit={(val) => {
                    secondTimeSetValue(val);
                    secondCombobox.closeDropdown();
                }}
            >
                <Combobox.Target className="combobox-start">
                    <InputBase
                        component="button"
                        pointer
                        rightSection={<Combobox.Chevron />}
                        
                        onClick={() => secondCombobox.toggleDropdown()}
                    >
                        {secondTimeValue || <Input.Placeholder>Choose time period</Input.Placeholder>}
                    </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                    <Combobox.Options>{secondOptions}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </div>
    )
}

export default ChooseTime