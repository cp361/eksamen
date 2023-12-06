import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { MyContext } from "@/context/my-context";
import { useState } from "react";
import { DateProvider } from "@/context/date-context";


export default function App({ Component, pageProps }) {

  const [date, setDate] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [timeEnd, setTimeEnd] = useState('');
  const [attendants, setAttendants] = useState('');

  const contextValue = {
    date,
    setDate,
    timeStart,
    timeEnd,
    setTimeStart,
    setTimeEnd,
    attendants,
    setAttendants,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <MantineProvider>
        <DateProvider>
          <Component {...pageProps} />
        </DateProvider>
      </MantineProvider>
    </MyContext.Provider>
  );
}
