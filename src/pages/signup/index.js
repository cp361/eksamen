import Link from "next/link"
import { useState } from "react"
import { supabase } from "../lib/helper/supabaseClient"
import { useRouter } from "next/router"
import { Grid, GridCol } from "@mantine/core"
import Image from "next/image"
import sideImg from "../../assets/home-background.png"
import SignUpForm from "@/components/auth/SignUp"
import { PageWrapper } from "@/pagewrapper"

const Signup = () => {
  //! Bruger useState-hook til at oprette lokale statevariabler for email og password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //! Henter router-objektet fra Next.js til håndtering af navigation
  const router = useRouter();

  //! Opretter en handleSubmit-funktion, der håndterer formularindsendelse
  const handleSubmit = async (e) => {
    
    //! Forhindrer standardformularindsendelse
    e.preventDefault();
    try {

      //! Forsøger at oprette en ny bruger ved hjælp af Supabase-authentication
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      //! Håndterer eventuelle fejl under oprettelsen af brugeren
      if (error) throw error;

      //! Hvis oprettelsen er vellykket, naviger til startsiden
      router.push("/");

    } catch (error) {
      //! Håndterer og viser fejlmeddelelser ved oprettelse af brugeren
      alert(error.message);
    }
  }
  return (
    <PageWrapper>
      <div className="bg-second">
        <Grid className="grid" align="center">
          <GridCol span="auto" h={556.8} w={400} className="img-bg">
            <Image
              src={sideImg}
              width={500}
              height={556.8}
              alt="Login side image"
            />
          </GridCol>

          <GridCol span="auto">
            <SignUpForm />
          </GridCol>
        </Grid>
      </div>
    </PageWrapper>
  )
}

export default Signup
