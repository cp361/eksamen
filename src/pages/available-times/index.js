import React, { useEffect, useState } from 'react'
import { Grid, GridCol } from '@mantine/core'
import Image from 'next/image'
import sideImg from '../../assets/sidebar-background.png'
import classroom from '../../assets/classroom.png'

// Icons
import { FaEdit } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { supabase } from '../lib/helper/supabaseClient';

const availableTimes = () => {
  const [fetchError, setFetchError] = useState(null);
  const [ClassRooms, setClassRooms] = useState(null);

  useEffect(() => {

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

  return (

    <div className="booking div-text">
      {/* Sidebar */}
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
                        <div>
                          <Image
                            src={classroom}
                          />
                          <p className='classroom-number'>
                            {ClassRooms.roomnumber}
                          </p>
                          <p className='classroom-facilities'>
                            {ClassRooms.facilities}
                          </p>
                        </div>
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

export default availableTimes;
