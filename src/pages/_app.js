import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { MyContext } from "@/context/my-context";
import { useState } from "react";
import { DateProvider } from "@/context/date-context";


export default function App({ Component, pageProps }) {

  const [roomnumber, setRoomnumber] = useState('');
  const [dato, setDato] = useState('');
  const [tid, setTid] = useState('');
  const [antal, setAntal] = useState('');

  const contextValue = {
    roomnumber,
    setRoomnumber,
    tid,
    setTid,
    dato,
    setDato,
    antal,
    setAntal
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
