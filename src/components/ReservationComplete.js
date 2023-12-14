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

  //! State-hooks til at håndtere fejl og data for klasseværelser
  const [fetchError, setFetchError] = useState(null);
  const [ClassRooms, setClassRooms] = useState(null);

  //! useEffect hook kaldes ved komponentmontering
  useEffect(() => {
    //! Funktion til at hente klasseværelser fra supabase
    const fetchClassRooms = async () => {
      const { data, error } = await supabase2
        .from("classrooms")
        .select("*")
        .order('id', { ascending: false })
        .limit(1);

      //! Håndtering af fejl under datahentning
      if (error) {
        setFetchError("Could not fetch class rooms");
        setClassRooms(null);
        console.error(error);
      }

      //! Opdatering af state med de hentede data
      if (data) {
        setClassRooms(data);
        setFetchError(null);
      }
    };

    //! Kald af fetchClassRooms funktion
    fetchClassRooms();
  }, []); //! Tomt afhængighedsarray sikrer kun kald ved komponentmontering

  //! JSX-rendering af komponenten
  return (
    <Container className='reservation-complete'>

      {/* Overskrift for reservationen */}
      <h1 className='rc-title'>Reservation Complete</h1>

      {/* Booking flow ikoner og tidslinje */}
      <div className='booking-flow-icons' span='auto'>
        <span className='booking-flow-timeline1'></span>
        <FaRegCalendarAlt fontSize={50} className='booking-icons absolute' />
        <span className='booking-flow-timeline2'></span>
        <FaEdit fontSize={50} className='booking-icons-middle absolute' />
        <span className='booking-flow-timeline2'></span>
        <FaReceipt fontSize={75} className='booking-icons absolute' />
        <span className='booking-flow-timeline1'></span>
      </div>

      {/* Papir-komponent til at indeholde reservationen */}
      <div className='rc-paper-div'>

        <Paper className='rc-paper' shadow="xs" p="xl">
          
          {/* Vis fejlbesked, hvis der er en fejl */}
          {fetchError && <p> {fetchError} </p>}
          
          {/* Vis klasseværelser, hvis der er data */}
          {ClassRooms && (
            <div className="reservation-complete-grid">
              {ClassRooms.map((ClassRoom) => (
                <ReservationCompleteCard
                  key={ClassRoom.id}
                  classroom={ClassRoom}
                />
              ))}
            </div>
          )}

          {/* Tekstinformation om kvittering */}
          <div>
            <Text className='rc-info-receipt'>
              You have received a receipt of your reservation on your mail
            </Text>
          </div>
        </Paper>
      </div>

      {/* Knappen til at navigere tilbage til hjemmesiden */}
      <div className='rc-button'>
        <Button onClick={() => router.push('/home')} size='xl' color='var(--cphYellow)' className='rc-button-style'>
          Home
        </Button>
      </div>
    </Container>
  );
};