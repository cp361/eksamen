import React from 'react';
import { Flex, Container, Modal, Button, TextInput, NumberInput, Title } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/da';





export function NewReservation() {
  const [value, setValue] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    
    <Container fluid className='nr-container'>
    <Title className='header-title'>Ny reservation</Title>
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
          label="Vælg dato"
          placeholder="Vælg dato"
          value={value}
          onChange={setValue}
          locale='da'
          excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
      </div>
      

<> 
    <div className='modal-div'>
    <Title className='modal-title'>Time</Title>
      <Modal className='nr-modal' opened={opened} onClose={close} title="Vælg tidsrum">
        <TextInput label="Ønskede starttidspunkt" placeholder="--:--"/>
        <TextInput
          data-autofocus
          label="Tidsrum (i timer og minutter)"
          placeholder="-- timer -- minutter"
          mt="md"
        />
        </Modal>

        <Button onClick={open}>Vælg tidsrum</Button>
      </div>
    </>

    <div className='numberinput-div'>
    <Title className='numberinput-title'>Deltagere</Title>
    <NumberInput className='nr-numberinput'
      label="Deltagere"
      placeholder="X"
      allowNegative={false}
    />
    
     </div>
     
    </Flex>
    <div className='nr-button-div'>
      <Button className='nr-button'>NÆSTE</Button>
    </div>
    
    </Container>
  );
}