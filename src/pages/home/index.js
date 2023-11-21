import React from 'react';
import { NewReservation } from '@/components/NewReservation'
import { UpcomingReservation } from '@/components/UpcomingReservation';

export default function newReservation() {
  return (
    <div>
      <UpcomingReservation />
      <NewReservation />
    </div>
  );
}