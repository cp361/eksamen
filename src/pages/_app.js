import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { MyContext } from "@/context/my-context";
import { useState } from "react";


export default function App({ Component, pageProps }) {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [attendants, setAttendants] = useState('');

  const contextValue = {
    date,
    setDate,
    time,
    setTime,
    attendants,
    setAttendants,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </MyContext.Provider>
  );
}
