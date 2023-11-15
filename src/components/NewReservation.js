import React from 'react';
import { Flex, Container, Modal, Button, TextInput } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/da';



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
      label="Vælg dato"
      placeholder="Vælg dato"
      value={value}
      onChange={setValue}
      locale='da'
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />

<>
      <Modal opened={opened} onClose={close} title="Vælg tidsrum">
        <TextInput label="Ønskede starttidspunkt" placeholder="--:--"/>
        <TextInput
          data-autofocus
          label="Tidsrum (i timer og minutter)"
          placeholder="-- timer -- minutter"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Vælg tidsrum</Button>
    </>

      <p>3</p>
    </Flex>
    </Container>
  );
}