import React from "react";

export default function ReservationBox({ reservation }) {
  return (
    <div className="reservations">
      <ul>
        <li>
          <p><span className="subtitle">Dato:</span> {reservation.dato}</p>
          <p><span className="subtitle">Tidspunkt:</span> {reservation.tid}</p>
          <p><span className="subtitle">Antal:</span> {reservation.antal}</p>
          <p><span className="subtitle">Lokale:</span> {reservation.roomnumber}</p>
        </li>
      </ul>
    </div>
  );
}
