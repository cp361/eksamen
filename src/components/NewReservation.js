import React, { useEffect } from 'react';
import { Container, Button, Title, Grid } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import 'dayjs/locale/en';
import { useRouter } from 'next/router';
import { supabase } from '@/pages/lib/helper/supabaseClient';
import { Reservation } from '@/entities/reservationss';
import ClassRoomCard from './classroom/ClassRooms';




export function NewReservation() {

  //? State-hooks til at gemme værdierne for dato, tid, antal deltagere og lokale.
  const [roomnumber, setRoomnumber] = useState("")
  const [dato, setDato] = useState("")
  const [tid, setTid] = useState("")
  const [antal, setAntal] = useState("")


  //? Event handlers til at opdatere tilstanden baseret på brugerinput.
  const handleDatoChange = (e) => {
    setDato(e.target.value)
  }

  const handleTidChange = (e) => {
    setTid(e.target.value)
  }
  const handleAntalChange = (e) => {
    setAntal(e.target.value)
  }
  const handleRoomnumberChange = (e) => {
    setRoomnumber(e.target.value)
  }

  //? Funktion til at håndtere tilføjelse af en ny reservation.
  const handleAddReservation = () => {
    const c = new Reservation(dato, tid, antal, roomnumber)
    newReservation(c)
  }

  //? Asynkron funktion til at sende en POST-anmodning til Supabase API for at oprette en ny reservation.
  const newReservation = async (reservation) => {
    const anonKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiaW1zZ3pneGFoaGx0cGJ2d2x1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzc3NTAsImV4cCI6MjAxNDg1Mzc1MH0.bR_zj_y7vzf7fvsW-N-6126mAyKquznFzvDur-m-_mw"
    fetch("https://wbimsgzgxahhltpbvwlu.supabase.co/rest/v1/contactlist", {
      method: "POST",
      body: JSON.stringify(reservation),
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        Prefer: "return=representation",
      },
    })
      .then((response) => response.json())
      .then((newReservation) => {

        //* Tømmer input felter
        setDato("")
        setTid("")
        setAntal("")
        setRoomnumber("")
      })

  }


  const router = useRouter();


  const [fetchError, setFetchError] = useState(null);
  const [ClassRooms, setClassRooms] = useState(null);

  useEffect(() => {
    const fetchClassRooms = async () => {
      const { data, error } = await supabase
        .from("classrooms")
        .select("")

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


  const completeReservation = () => {
    router.push('/complete');
  }

  return (
    <>
      <Container fluid className='cr-container'>
        <Title className='upcoming-reservations-title'>Create a new reservation</Title>
        <Grid gutter="lg" className='cr-grid'>

          {/* VÆLGER DATO, TID & ANTAL */}

          <Grid.Col className='nr-grid' span={4}>

            <div className='nr-modal-div'>
              <Title className='modal-title'>Date</Title>
              <input type="date" id='date' value={dato} onChange={handleDatoChange} required />

              <p>
                When do want to reserve a classroom?
              </p>

              <Title className='modal-title'>Time</Title>

              <div className='choose-time'>
                <select
                  id="tid"
                  name="tid"
                  value={tid}
                  onChange={handleTidChange}
                >
                  <option value={'08:00 - 10:00'}>08:00 - 10:00</option>
                  <option value={'10:00 - 12:00'}>10:00 - 12:00</option>
                  <option value={'12:00 - 14:00'}>12:00 - 14:00</option>
                  <option value={'14:00 - 16:00'}>14:00 - 16:00</option>
                  <option value={'16:00 - 18:00'}>16:00 - 18:00</option>
                  <option value={'18:00 - 20:00'}>18:00 - 20:00</option>
                  <option value={'20:00 - 22:00'}>20:00 - 22:00</option>
                  <option value={'22:00 - 00:00'}>22:00 - 00:00</option>
                </select>

                <p>
                  What time will you be needing the classroom?
                </p>

              </div>

              <Title className='modal-title'>Attendants</Title>
              <div className='choose-attendants'>

                <input
                  type="number"
                  id='number'
                  placeholder="0"
                  value={antal}
                  onChange={handleAntalChange}
                />

              </div>

              <p>
                How many will be attending?
              </p>

            </div>

          </Grid.Col>

          {/* VÆLGER TIDSPUNKT */}


          <Grid.Col className='nr-grid' span={4}>
            <div className=' nr-modal-div'>
              <Title className='numberinput-title'>Choose Classroom</Title>
              <div className='choose-classroom'>

                <select
                  id="roomnumbers"
                  name="roomnumber"
                  value={roomnumber}
                  onChange={handleRoomnumberChange}
                >
                  <option value={209}>209</option>
                  <option value={201}>201</option>
                  <option value={312}>312</option>
                  <option value={164}>164</option>
                  <option value={264}>264</option>
                </select>

                <p>
                  Which classroom do you want to reserve?
                </p>

              </div>


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

            </div>

          </Grid.Col>

          {/* VÆLGER DELTAGERE */}

          <Grid.Col className='nr-grid' span={4}>

              <div className='nr-button-div'>
                <Button
                  // onClick={handleAddReservation}
                  onClick={event => {
                    handleAddReservation();
                    completeReservation();
                  }}
                  size="xl"

                  color="var(--cphYellow)"
                >
                  Confirm reservation
                </Button>
              </div>

          </Grid.Col>
        </Grid>



      </Container>

    </>
  );
}