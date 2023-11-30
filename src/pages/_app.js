import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { MyContext } from "@/context/my-context";
import { useState } from "react";


export default function App({ Component, pageProps }) {

  const [date, setDate] = useState('');

  const contextValue = {
    date,
    setDate,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </MyContext.Provider>
  );
}
