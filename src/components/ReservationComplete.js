import React, { useEffect, useState } from 'react';
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
import useMyContext from '@/context/my-context';
import { supabase } from '@/pages/lib/helper/supabaseClient';
import ClassRoomCard from './classroom/ClassRooms';
import ReservationBox from './time/ContactBox';
import { supabase2 } from '@/pages/lib/helper/supabaseClient2';







export function ReservationComplete() {

  const router = useRouter();

 const [fetchError, setFetchError] = useState(null);
 const [ClassRooms, setClassRooms] = useState(null);

 useEffect(() => {
   const fetchClassRooms = async () => {
     const { data, error } = await supabase2
       .from("classrooms")
       .select("*")
       .order('id', { ascending: false })
       .limit(1)

     if (error) {
       setFetchError("Could not fetch class rooms");
       setClassRooms(null);
       console.log(error);
     }
     if (data) {
       setClassRooms(data);
       setFetchError(null);

     }
   };

   fetchClassRooms();
 }, []);

  




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


          {fetchError && <p> {fetchError} </p>}
          {ClassRooms && (
            <div className="classroomgrid">
              {ClassRooms.map((ClassRooms) => (
                <ClassRoomCard
                  key={ClassRooms.id}
                  classroom={ClassRooms}
                />
              ))}
            </div>
          )}

          

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