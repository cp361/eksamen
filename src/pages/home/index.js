import React from "react"
import { NewReservation } from "@/components/NewReservation"
import { UpcomingReservation } from "@/components/UpcomingReservation"
import { Profile } from "@/components/auth/Profile"
import { PageWrapper } from "@/pagewrapper"
// import { Grid, GridCol } from '@mantine/core';
import sideImg from "../../assets/sidebar-background.png"
import Image from "next/image"

export default function newReservation() {
  return (
    <PageWrapper>
      {/* Hovedcontaineren for indholdet med baggrund */}
      <div className="bg">
        {/* Grid-struktur for at organisere indholdet i to kolonner */}
        <div className="grid-home">
          {/* Venstre kolonne med sidepanelbillede */}
          <div className="left-bg">
            {/* Bruger Next.js Image-komponenten for at vise et billede med optimeret ydeevne */}
            <Image
              src={sideImg}
              width={94}
              alt="sidebar image"
              className="sidebar-image"
            />
          </div>

          {/* Højre kolonne med brugerprofil, kommende reservationer og muligheden for at tilføje nye reservationer */}
          <div className="right-bg">
            {/* Viser brugerprofilkomponenten */}
            <Profile />

            {/* Viser komponenten for kommende reservationer */}
            <UpcomingReservation />

            {/* Viser komponenten for at tilføje nye reservationer */}
            <NewReservation />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
