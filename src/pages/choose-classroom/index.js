import React, { useEffect, useState } from "react";
import { Button, Grid, GridCol } from "@mantine/core";
import Image from "next/image";
import sideImg from "../../assets/sidebar-background.png";

// Icons
import { FaEdit } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

import useMyContext from "@/context/my-context";

import { supabase } from "../lib/helper/supabaseClient";
import { DatePicker } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { useRouter } from "next/router";
import ClassRoomCard from "@/components/classroom/ClassRooms";
import { Profile } from "@/components/auth/Profile";
import ChosenDate from "@/components/date/ChosenDate";
import ChosenTime from "@/components/time/ChosenTime";
import ChosenAttendants from "@/components/attendants/ChosenAttendants";
import { Reservations } from "@/entities/reservations";
import { Reservation } from "@/entities/reservationss";

const availableTimes = ({ reservation, setReservation }) => {

  const [roomnumber, setRoomnumber] = useState("")
  const [date, setDate] = useState("")
  const [timeStart, setTimeStart] = useState("")
  const [attendants, setAttendants] = useState("")

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

  const handleAddReservation = () => {
    const c = new Reservation(date, timeStart, attendants, roomnumber)
    newReservation(c)
  }

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
        setReservation([...reservation, newReservation[0]])

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

  return (
    <div className="booking div-text bg">
      {/* Booking Flow */}
      <Grid span="auto" className="booking-flow">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="profile-sidebar">{/* <Profile /> */}</div>
          <Button
            className="back-button"
            onClick={() => router.push("/home")}
            size="md"
            color="var(--cphBlue)"
          >
            Back
          </Button>
        </div>
        <Grid>
          {/* Site Title */}
          <div className="new-reservation">
            <h1>Choose Classroom</h1>

            {/* Booking Flow */}
            <div className="booking-flow-icons">
              <span className="booking-flow-timeline1"></span>

              <FaRegCalendarAlt
                fontSize={50}
                className="booking-icons absolute"
              />
              <span className="booking-flow-timeline2"></span>
              <FaEdit fontSize={75} className="booking-icons-middle absolute" />
              <span className="booking-flow-timeline3"></span>
              <FaReceipt
                fontSize={50}
                className="booking-icons absolute"
                color="var(--textColor)"
              />
              <span
                className="booking-flow-timeline4"
                color="var(--textColor)"
              ></span>
            </div>

            {/* Main Content */}
            <div className="booking-main">
              {/* Your booking */}
              <div className="main-col1">
                <h3>Your booking</h3>

                <div className="labels reservation-info-titles">
                  <ChosenTime />
                </div>

                <div className="labels reservation-info-titles">
                  <ChosenDate />
                </div>

                <div className="labels reservation-info-titles">
                  <ChosenAttendants />
                </div>
              </div>

              {/* Available Times */}
              <div className="main-col2">
                <h3>Available classrooms</h3>

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

              {/* Booking Info */}
              <div className="main-col3">
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

                <div className="reservation-info reservation-info-facilities">
                  <h4>Room facilities</h4>
                  <p>Smartboard</p>
                  <p>Whiteboard</p>
                  <p>Outlets and extension cords</p>
                </div>

                <div className="reservation-info reservation-info-titles ">
                  <ChosenDate />
                </div>

                <div className="reservation-info reservation-info-titles">
                  <ChosenTime />
                </div>

                <div className="reservation-info reservation-info-titles">
                  <ChosenAttendants />
                </div>

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
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default availableTimes;
