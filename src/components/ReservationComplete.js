import React from 'react';
import { Container, Paper, Title, Text, Button } from '@mantine/core';

import { FaEdit } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";







export function ReservationComplete() {

  

  return (

   <Container>
    <h1 className='rc-title'>Reservation Complete</h1>

    <div className='booking-flow-icons' span='auto'>

<span className='booking-flow-timeline1'></span>

<FaRegCalendarAlt fontSize={50} className='booking-icons absolute' />
<span className='booking-flow-timeline2'></span>
<FaEdit fontSize={50} className='booking-icons-middle absolute' />
<span className='booking-flow-timeline2'></span>
<FaReceipt fontSize={75} className='booking-icons absolute' />
<span className='booking-flow-timeline1'></span>

</div>
   
   <div className='rc-paper-div'>
    <Paper className='rc-paper' shadow="xs" p="xl">
      <div className='rc-info'>
        <div className='rc-info-list'>
          <Title className='rc-info-title'>Room</Title>
          <Text className='rc-info-text'>CL-201</Text>
          <Title className='rc-info-title'>Date</Title>
          <Text className='rc-info-text'>9. November 2023</Text>
          <Title className='rc-info-title'>Timeslot</Title>
          <Text className='rc-info-text'>12:00 - 16:30</Text>
          <Title className='rc-info-title'>Attendants</Title>
          <Text className='rc-info-text'>4</Text>
        </div>

        <div className='rc-info-img'>
          {/* Image */}
        </div>

      </div>
      <div className='rc-facilities'>
        <div className='rc-facilities-title'>
          <Title className='rc-info-title'>Room facilities</Title>
        </div>
        <div className='rc-facilities-elements'>
          <div className='rc-facilities-item'>
            <Text className='rc-facilities-text'>Smartboard</Text>
            {/* Icon */}
          </div>
          <div className='rc-facilities-item'>
            <Text className='rc-facilities-text'>Whiteboard</Text>
            {/* Icon */}
          </div>
          <div className='rc-facilities-item'>
            <Text className='rc-facilities-text'>Outlets and extension cords</Text>
            {/* Icon */}
          </div>
          <div className='rc-facilities-item'>
            <Text className='rc-facilities-text'>Can be locked</Text>
            {/* Icon */}
          </div>
        </div>
      </div>
      <Text className='rc-text-reciept'>You have recieved a reciept of your reservation on your mail</Text>
    </Paper>
    
   </div>

   <div className='rc-button'>
      <Button size='compact-xl' color='var(--cphYellow)' className='rc-button-style'>
      Home
      </Button>
    </div>
   
   
    </Container>
  );
};