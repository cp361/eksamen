import React from 'react';
import { Flex, Container, Modal, Button, TextInput, NumberInput, Title } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/en';





export function NewReservation() {
  const [value, setValue] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    
    <Container fluid className='nr-container'>
    <Title className='header-title'>New Reservation</Title>
    <Flex className='nr-flex'
      mih={50}
      bg="rgba(0, 0, 0, 0)"
      gap="xl"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <div className='date-div'>
        <Title className='date-title'>Date</Title>
        <DatePickerInput className='nr-datepicker'
          label="Choose a date"
          placeholder="Choose a date"
          value={value}
          onChange={setValue}
          locale='en'
          excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
      </div>
      

<> 
    <div className='modal-div'>
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
    </>

    <div className='numberinput-div'>
    <Title className='numberinput-title'>Attendants</Title>
    <NumberInput className='nr-numberinput'
      label="Attendants"
      placeholder="0"
      allowNegative={false}
    />
    
     </div>
     
    </Flex>
    <div className='nr-button-div'>
      <Button className='nr-button'>NEXT</Button>
    </div>
    
    </Container>
  );
}