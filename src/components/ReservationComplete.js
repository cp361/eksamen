import React from 'react';
import { Container, Paper, Title, Text, Button, Flex } from '@mantine/core';

import { FaChalkboardTeacher, FaEdit, FaPlug } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt, FaTv } from "react-icons/fa";
import Image from 'next/image';
import classroomimg from '../assets/classroom-img.png'
import { useRouter } from 'next/router';
import ChosenDate from './date/ChosenDate';
import ChosenTime from './time/ChosenTime';
import ChosenAttendants from './attendants/ChosenAttendants';







export function ReservationComplete() {

  const router = useRouter();


  return (

    <Container className='reservation-complete'>
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

          <div class="angry-grid">
            <div id="item-0">
              <Title className='rc-info-title'>Room</Title>
              <Text className='rc-info-number item-0-text'>CL-209</Text>
              <Title className='rc-info-title item-0-text'><ChosenDate /></Title>
              <Title className='rc-info-title item-0-text'><ChosenTime /></Title>
              <Title className='rc-info-title item-0-text'><ChosenAttendants /></Title>
            </div>
            <div id="item-2">
              <Image
                src={classroomimg}
                className='rc-img'
              />
            </div>
          </div>
          <div className='rc-facilities'>
            <div className='rc-facilities-title'>
              <Title className='rc-info-title'>Room facilities</Title>
            </div>
            <div className='rc-facilities-elements'>
              <div className='rc-facilities-item'>
                <Text className='rc-info-text'>Smartboard</Text>
                <FaTv color='var(--cphYellow)' size={30} />
              </div>
              <div className='rc-facilities-item'>
                <Text className='rc-info-text'>Whiteboard</Text>
                <FaChalkboardTeacher color='var(--cphYellow)' size={30} />
              </div>
              <div className='rc-facilities-item'>
                <Text className='rc-info-text'>Outlets and extension cords</Text>
                <FaPlug color='var(--cphYellow)' size={30} />
              </div>
            </div>
          </div>

          <div>
            <Text className='rc-info-receipt'>
              You have recieved a reciept of your reservation on your mail
            </Text>
          </div>

        </Paper>

      </div>

      <div className='rc-button'>
        <Button onClick={() => router.push('/home')} size='xl' color='var(--cphYellow)' className='rc-button-style'>
          Home
        </Button>
      </div>


    </Container>
  );
};