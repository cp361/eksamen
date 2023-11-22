import React from 'react';
import { Container, Modal, Button, TextInput, NumberInput, Title, Grid } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/en';





export function NewReservation() {

  const [value, setValue] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Container fluid className='ur-container'>
      <Title className='ur-title'>New reservations</Title>
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
            />
          </div>
          
          </Grid.Col>
            
        {/* VÆLGER TIDSPUNKT */}
      
        <Grid.Col className='nr-grid' span={4}>
            <div className='nr-modal-div'>
              <Title className='modal-title'>Time</Title>
              <Modal className='nr-modal' opened={opened} onClose={close} title="Choose time period">
                <TextInput label="Preferred start" placeholder="--:--"/>
                <TextInput
                data-autofocus
                label="Duration (in hours and minutes)"
                placeholder="-- hours -- minutes"
                mt="md"
              />
              </Modal>
              <Button onClick={open}>Choose time period</Button>
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
          <Button size='xl' fullWidth color='#FBB040' className='nr-button'>NEXT</Button>
          </div>
        </div>
        </Grid.Col>
        </Grid>
      </Container>

    </>
  );
}