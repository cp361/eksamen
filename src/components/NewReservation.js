import React from 'react';
import { Flex, Container, Modal, Button, TextInput } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';


export function NewReservation() {
  const [value, setValue] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container fluid>
      
    
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, 0)"
      gap="xl"
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
    >
      
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />

<>
      <Modal opened={opened} onClose={close} title="Pick time">
        <TextInput label="Preffered Start" placeholder="--:--" />
        <TextInput
          data-autofocus
          label="Duration (in hours and min)"
          placeholder="-- hours -- min"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Pick time</Button>
    </>

      <p>3</p>
    </Flex>
    </Container>
  );
}