import React, { useEffect, useState } from 'react'
import { Button, Grid, GridCol } from '@mantine/core'
import Image from 'next/image'
import sideImg from '../../assets/sidebar-background.png'

// Icons
import { FaEdit } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";


import { supabase } from '../lib/helper/supabaseClient';
import { DatePicker } from '@mantine/dates';
import '@mantine/dates/styles.css';
import { useRouter } from 'next/router';
import ClassRoomCard from '@/components/ClassRooms'

const availableTimes = () => {

  const router = useRouter();

  const [value, setValue] = useState(new Date());

  const [fetchError, setFetchError] = useState(null);
  const [ClassRooms, setClassRooms] = useState(null);

  useEffect(() => {

    const fetchClassRooms = async () => {
      const { data, error } = await supabase
        .from('classrooms')
        .select('')
        .limit(1)

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

    <div className="booking div-text bg">

      {/* Booking Flow */}
      <Grid span='auto' className='booking-flow'>

        {/* Sidebar */}
        <div className='sidebar'>
          <Button className='back-button' onClick={() => router.push("/home")} size='md' color='var(--cphYellowHover)'>Back</Button>
        </div>
        <Grid>

          {/* Site Title */}
          <div className='new-reservation'>

            <h1>New Reservation</h1>





            {/* Booking Flow */}
            <div className='booking-flow-icons' span='auto'>

              <span className='booking-flow-timeline1'></span>

              <FaRegCalendarAlt fontSize={50} className='booking-icons absolute' />
              <span className='booking-flow-timeline2'></span>
              <FaEdit fontSize={75} className='booking-icons-middle absolute' />
              <span className='booking-flow-timeline3'></span>
              <FaReceipt fontSize={50} className='booking-icons absolute' color='var(--textColor)' />
              <span className='booking-flow-timeline4' color='var(--textColor)'></span>

            </div>

            {/* Main Content */}
            <div className='booking-main'>

              {/* Your booking */}
              <div className='main-col1'>

                <h3>Your booking</h3>

                <div className='labels'>
                  <label for="attendants">Attendants</label>
                  <input type="number" id='attendants' name='attendants' placeholder='4'></input>
                </div>

                <div className='labels'>
                  <label for="time">Preffered time</label>
                  <input type="time" id='time' name='time' placeholder='12:00 - 16:300'></input>
                </div>

                <div className='labels'>
                  <label for="date">Date</label>
                  <DatePicker className='nr-datepicker'
                    value={value}
                    onChange={setValue}
                    locale='en'
                    excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
                    hideOutsideDates
                    minDate={new Date()}
                  />
                </div>

              </div>

              {/* Available Times */}
              <div className='main-col2'>

                <h3>Available classrooms</h3>

                <div className=''>

                  {fetchError && (<p> {fetchError} </p>)}
                  {ClassRooms && (
                    <div className=''>
                      <div>
                        {ClassRooms.map(ClassRooms => (
                          <ClassRoomCard key={ClassRooms.id} classroom={ClassRooms} />
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Booking Info */}
              <div className='main-col3'>

                <h3>CL - 209</h3>

                <div className='reservation-info'>
                  <h4>Room facilities</h4>
                  <p>Smartboard</p>
                  <p>Whiteboard</p>
                  <p>Outlets and extension cords</p>
                </div>

                <div className='reservation-info date'>

                  <h4>Date</h4>
                  <p>*valgte dato*</p>

                </div>

                <div className='reservation-info'>

                  <h4>Timeslot</h4>
                  <p>12:00 - 16:30</p>

                </div>

                <div className='reservation-info'>

                  <h4>Attendants</h4>
                  <p>4</p>

                </div>

                <Button onClick={() => router.push('/complete')} size='md' color='var(--cphYellow)'>Confirm reservation</Button>

              </div>

            </div>
          </div>

        </Grid>

      </Grid>

    </div>

  )
}

export default availableTimes;
