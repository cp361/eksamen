import React from 'react';
import { NewReservation } from '@/components/NewReservation'
import { UpcomingReservation } from '@/components/UpcomingReservation';
import { Profile } from '@/components/Profile';
import { PageWrapper } from '@/pagewrapper';

export default function newReservation() {
  return (
    <PageWrapper>
      <div>
        <Profile />
        <UpcomingReservation />
        <NewReservation />
      </div>
    </PageWrapper>
  );
}