<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Grid, GridCol } from '@mantine/core'
import Image from 'next/image'
import sideImg from '../../assets/sidebar-background.png'
=======
import React, { useEffect } from "react";
import { Grid, GridCol } from "@mantine/core";
import Image from "next/image";
import sideImg from "../../assets/sidebar-background.png";
>>>>>>> 8574405a81a77958b375f6b3d03b40359c7b8c1b

// Icons
import { FaEdit } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { supabase } from '../lib/helper/supabaseClient';

const availableTimes = () => {
<<<<<<< HEAD
  const [fetchError, setFetchError] = useState(null);
  const [ClassRooms, setClassRooms] = useState(null);

  useEffect(() => {
=======
  // const getClassRooms = async () => {
  //   const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocG1keGhudnltZ2h3eGpucWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MTA2MzYsImV4cCI6MjAxNjA4NjYzNn0.iSvURo8-6F-ns9QmFtEnuBE0pvQdHw6vf2VaMUAVQz0'
  //   const data = await fetch('https://thpmdxhnvymghwxjnqko.supabase.co/rest/v1/classrooms', {
  //     headers: {
  //       apikey: anonKey,
  //       Authorization:  `Bearer ${anonKey}`,
  //     }
  //   }).then(response => response.json())
>>>>>>> 8574405a81a77958b375f6b3d03b40359c7b8c1b

    const fetchClassRooms = async () => {
      const { data, error } = await supabase
        .from('classrooms')
        .select()

      if (error) {
        setFetchError('Could not fetch class rooms')
        setClassRooms(null)
        console.log(error)
      }
      if (data) {
        setClassRooms(data)
        setFetchError(null)
      }
    }

    fetchClassRooms()

  }, [])

<<<<<<< HEAD
  return (

=======
  // const createReservation = async (reservation) => {

  // }

  return (
>>>>>>> 8574405a81a77958b375f6b3d03b40359c7b8c1b
    <div className="booking div-text">
      {/* Sidebar */}
<<<<<<< HEAD
      <div className='sidebar'>

      </div>

      {/* Booking Flow */}
      <Grid span='auto' className='booking-flow'>
        <Grid>

          {/* Site Title */}
          <div>

            <h1>Ny Booking</h1>





            {/* Booking Flow */}
            <div className='booking-flow-icons' span='auto'>

              <span className='booking-flow-timeline1'></span>

              <FaRegCalendarAlt fontSize={50} className='booking-icons absolute' />
              <span className='booking-flow-timeline2'></span>
              <FaEdit fontSize={75} className='booking-icons-middle absolute' />
              <span className='booking-flow-timeline2'></span>
              <FaReceipt fontSize={50} className='booking-icons absolute' />
              <span className='booking-flow-timeline1'></span>

            </div>

            {/* Main Content */}
            <div className='booking-main'>

              {/* Your booking */}
              <div className='main-col1'>

                <h3>Søgekriterier</h3>

                <div className='labels'>
                  <label for="attendants">Antal personer</label>
                  <input type="number" id='attendants' name='attendants' placeholder='0'></input>
                </div>

                <div className='labels'>
                  <label for="time">Tidspunkt</label>
                  <input type="datetime-local" id='time' name='time' placeholder='0'></input>
                </div>

                <div className='labels'>
                  <label for="attendants">Antal personer</label>
                  <input type="date" id='date' name='date' placeholder=''></input>
                </div>

              </div>

              {/* Available Times */}
              <div className='main-col2'>

                <h3>Ledige tider <span>'valgte tid'</span></h3>

                <div className='class-rooms'>

                  {fetchError && (<p> {fetchError} </p>)}
                  {ClassRooms && (
                    <div className='classrooms'>
                      {ClassRooms.map(ClassRooms => (
                        <p> {ClassRooms.roomnumber} </p>
                      ))}
                    </div>
                  )}

                </div>

              </div>

              {/* Booking Info */}
              <div className='main-col3'>

                <h3>'valgte lokale'</h3>

                <div>
                  <h4>Inkluderet i lokalet</h4>
                  <p>'1'</p>
                  <p>'2'</p>
                  <p>'3'</p>
                </div>

                <div>

                  <h4>Dato</h4>
                  <p>'valgte dato'</p>

                </div>

                <div>

                  <h4>Tidspunkt</h4>
                  <p>'valgte tidspunkt'</p>

                </div>

                <div>

                  <h4>Antal personer</h4>
                  <p>'antal personer'</p>

                </div>

              </div>

            </div>
          </div>

        </Grid>

      </Grid>

    </div>

  )
}
=======
      <div className="sidebar"></div>

      {/* Booking Flow */}
      <Grid span="auto" className="booking-flow">
        <Grid>
          {/* Site Title */}
          <div>
            <h1>Ny Booking</h1>

            {/* Booking Flow */}
            <div className="booking-flow-icons" span="auto">
              <span className="booking-flow-timeline1"></span>

              <FaRegCalendarAlt
                fontSize={50}
                className="booking-icons absolute"
              />
              <span className="booking-flow-timeline2"></span>
              <FaEdit fontSize={75} className="booking-icons-middle absolute" />
              <span className="booking-flow-timeline2"></span>
              <FaReceipt fontSize={50} className="booking-icons absolute" />
              <span className="booking-flow-timeline1"></span>
            </div>

            {/* Main Content */}
            <div className="booking-main">
              {/* Your booking */}
              <div className="main-col1">
                <h3>Søgekriterier</h3>

                <div className="labels">
                  <label for="attendants">Antal personer</label>
                  <input
                    type="number"
                    id="attendants"
                    name="attendants"
                    placeholder="0"
                  ></input>
                </div>

                <div className="labels">
                  <label for="time">Tidspunkt</label>
                  <input
                    type="datetime-local"
                    id="time"
                    name="time"
                    placeholder="0"
                  ></input>
                </div>

                <div className="labels">
                  <label for="attendants">Antal personer</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder=""
                  ></input>
                </div>
              </div>

              {/* Available Times */}
              <div className="main-col2">
                <h3>
                  Ledige tider <span>'valgte tid'</span>
                </h3>

                <div className="class-rooms">
                  <div>Room 1</div>
                  <div>Room 2</div>
                  <div>Room 3</div>
                  <div>Room 4</div>
                </div>
              </div>

              {/* Booking Info */}
              <div className="main-col3">
                <h3>'valgte lokale'</h3>

                <div>
                  <h4>Inkluderet i lokalet</h4>
                  <p>'1'</p>
                  <p>'2'</p>
                  <p>'3'</p>
                </div>

                <div>
                  <h4>Dato</h4>
                  <p>'valgte dato'</p>
                </div>

                <div>
                  <h4>Tidspunkt</h4>
                  <p>'valgte tidspunkt'</p>
                </div>

                <div>
                  <h4>Antal personer</h4>
                  <p>'antal personer'</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
>>>>>>> 8574405a81a77958b375f6b3d03b40359c7b8c1b

export default availableTimes;
