import React, { useEffect, useState } from 'react';
import { Container, Paper, Text, Button } from '@mantine/core';

import { FaEdit } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt} from "react-icons/fa";
import { useRouter } from 'next/router';
import { supabase2 } from '@/pages/lib/helper/supabaseClient2';
import ReservationCompleteCard from './classroom/ReservationCompleteCard';







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
            <div className="reservation-complete-grid">
              {ClassRooms.map((ClassRooms) => (
                <ReservationCompleteCard
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