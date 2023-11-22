import React from 'react';
import { NewReservation } from '@/components/NewReservation'
import { UpcomingReservation } from '@/components/UpcomingReservation';
import { Profile } from '@/components/Profile';

export default function newReservation() {
  return (
    <div>
      <Profile />
      <UpcomingReservation />
      <NewReservation />
    </div>
  );
}