import React from 'react';
import { Flex, Container, Modal, Button, TextInput, NumberInput, Title, Grid, } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/da';





export function UpcomingReservation() {
  return (
    <>
      <Container fluid className='ur-container'>

        <Grid className='ur-grid'>
        <Grid.Col className='this-week-grid' span={4}>
          <div className='ur-thisweek-dato'>
            <p>I morgen</p>
            <h1>10</h1>
            <p>November</p>
          </div>
          <div>
            <Title order={4} className='ur-thisweek-title'>CL-201</Title>
            <p>Kl. 12:00 - 16:30</p>
            <p>4 studerende</p>
            <Button className='ur-button'>Fortryd</Button>
          </div>

            
         
        </Grid.Col>
        <Grid.Col className='this-week-grid' span={4}>
        <div className='ur-thisweek-dato'>
            <p>Mandag</p>
            <h1>13</h1>
            <p>November</p>
          </div>
          <div>
            <Title order={4} className='ur-thisweek-title'>CL-164</Title>
            <p>Kl. 13:00 - 16:00</p>
            <p>3 studerende</p>
            <Button className='ur-button'>Fortryd</Button>
          </div>
        </Grid.Col>
        <Grid.Col className='this-week-grid' span={4}>
        <div className='ur-thisweek-dato'>
            <p>Onsdag</p>
            <h1>15</h1>
            <p>November</p>
          </div>
          <div>
            <Title order={4} className='ur-thisweek-title'>CL-201</Title>
            <p>Kl. 8:00 - 12:00</p>
            <p>2 studerende</p>
            <Button className='ur-button'>Fortryd</Button>
          </div>
        </Grid.Col>
        </Grid>
      </Container>

    </>
  );
}