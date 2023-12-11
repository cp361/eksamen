import React, { useEffect } from 'react';
import { Container, Combobox, Button, InputBase, NumberInput, Title, Grid, Input, useCombobox } from '@mantine/core';
import '@mantine/dates/styles.css';
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import 'dayjs/locale/en';
import useMyContext from '@/context/my-context';
import { useRouter } from 'next/router';
import Date from './date/DatePicker';
import ChooseTime from './time/ChooseTime';
import ChooseAttendants from './attendants/ChooseAttendants';
import { supabase } from '@/pages/lib/helper/supabaseClient';
import { Reservation } from '@/entities/reservationss';




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

  return (
    <>
      <Container fluid className='cr-container'>
        <Title className='ur-title'>Create a new reservation</Title>
        <Grid gutter="lg" className='cr-grid'>

          {/* VÆLGER DATO */}

          <Grid.Col className='nr-grid' span={4}>

            <input type="date" value={dato} onChange={handleDatoChange} required />

          </Grid.Col>

          {/* VÆLGER TIDSPUNKT */}

          <Grid.Col className='nr-grid' span={4}>
            <div className='nr-modal-div'>
              <Title className='modal-title'>Time</Title>

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

            </div>

          </Grid.Col>

          {/* VÆLGER DELTAGERE */}

          <Grid.Col className='nr-grid' span={4}>

            <div className='nr-numberinput-div'>
              <Title className='numberinput-title'>Attendants</Title>
              <div className='choose-attendants'>

                <input
                  type="number"
                  placeholder="0"
                  value={antal}
                  onChange={handleAntalChange}
                />

              </div>

              <div>
                <label>Choose Classroom</label>
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
              </div>

              <div className='nr-button-div'>
                <Button
                  // onClick={handleAddReservation}
                  onClick={handleAddReservation}
                  size="md"
                  color="var(--cphYellow)"
                >
                  Confirm reservation
                </Button>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>

    </>
  );
}