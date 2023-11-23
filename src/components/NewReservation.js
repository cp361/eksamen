import React from 'react';
import { Container, Combobox, Button, InputBase, NumberInput, Title, Grid, Input, useCombobox } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/en';


const times = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const hours = ['1 hour', '2 hours', '3 hours', '4 hours']


export function NewReservation() {

  const [value, setValue] = useState(new Date());
  const [opened, { open, close }] = useDisclosure(false);

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

  return (
    <>
      <Container fluid className='ur-container'>
        <Title className='ur-title'>Create a new reservation</Title>
        <Grid gutter="lg" className='ur-grid'>

          {/* VÆLGER DATO */}

          <Grid.Col className='nr-grid' span={4}>
            <div className='nr-datepicker-div'>
              <Title className='date-title'>Date</Title>
              <DatePicker className='nr-datepicker'
                value={value}
                onChange={setValue}
                locale='en'
                excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
                hideOutsideDates
                minDate={new Date()}
              />
            </div>

          </Grid.Col>

          {/* VÆLGER TIDSPUNKT */}

          <Grid.Col className='nr-grid' span={4}>
            <div className='nr-modal-div'>
              <Title className='modal-title'>Time</Title>
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
          onClick={() => combobox.toggleDropdown()}
        >
          {timeValue || <Input.Placeholder>Pick value</Input.Placeholder>}
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
          {secondTimeValue || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{secondOptions}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
              
            </div>

          </Grid.Col>

          {/* VÆLGER DELTAGERE */}

          <Grid.Col className='nr-grid' span={4}>

            <div className='nr-numberinput-div'>
              <Title className='numberinput-title'>Attendants</Title>
              <NumberInput className='nr-numberinput'
                label="Attendants"
                placeholder="0"
                allowNegative={false}
              />
              <div className='nr-button-div'>
                <Button size='md' fullWidth color='var(--cphYellow)' className='nr-button'>Next</Button>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>

    </>
  );
}