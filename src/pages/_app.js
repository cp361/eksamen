import "@/styles/globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import { MyContext } from "@/context/my-context";
import { useEffect, useState } from "react";
import { DateProvider } from "@/context/date-context";
import { supabase } from "./lib/helper/supabaseClient";


export default function App({ Component, pageProps }) {

  const [roomnumber, setRoomnumber] = useState('');
  const [dato, setDato] = useState('');
  const [tid, setTid] = useState('');
  const [antal, setAntal] = useState('');
  const [UserEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const { data: { user }, } = await supabase.auth.getUser();
        if (user) {
          setUserEmail(user.email);
        }
      } catch (error) {
        console.error("Couldn't fetch user data");
      }
    };

    fetchUserEmail();
  }, []);


  const contextValue = {
    UserEmail,
    roomnumber,
    setRoomnumber,
    tid,
    setTid,
    dato,
    setDato,
    antal,
    setAntal,
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
