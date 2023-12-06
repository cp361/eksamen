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

const availableTimes = () => {

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
    <div className="booking div-text bg-available-times">
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
                <h3>CL - 209</h3>

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
                  onClick={() => router.push("/complete")}
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
