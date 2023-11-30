import React from 'react';
import { Container, Combobox, Button, InputBase, NumberInput, Title, Grid, Input, useCombobox } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/en';
import useMyContext from '@/context/my-context';
import { useRouter } from 'next/router';
import Date from './DatePicker';
import ChooseTime from './ChooseTime';
import ChooseAttendants from './ChooseAttendants';




export function NewReservation() {

  const router = useRouter();

  return (
    <>
      <Container fluid className='cr-container'>
        <Title className='ur-title'>Create a new reservation</Title>
        <Grid gutter="lg" className='cr-grid'>

          {/* VÆLGER DATO */}

          <Grid.Col className='nr-grid' span={4}>
            
            <Date />

          </Grid.Col>

          {/* VÆLGER TIDSPUNKT */}

          <Grid.Col className='nr-grid' span={4}>
            <div className='nr-modal-div'>
              <Title className='modal-title'>Time</Title>
              
              <ChooseTime />

            </div>

          </Grid.Col>

          {/* VÆLGER DELTAGERE */}

          <Grid.Col className='nr-grid' span={4}>

            <div className='nr-numberinput-div'>
              <Title className='numberinput-title'>Attendants</Title>
              <ChooseAttendants />
              <div className='nr-button-div'>
                <Button onClick={() => router.push("/available-times")} size='md' fullWidth color='var(--cphYellow)' className='nr-button'>Next</Button>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>

    </>
  );
}