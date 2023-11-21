import Link from "next/link";
import { useState } from "react";
import { supabase } from "../lib/helper/supabaseClient"
import { useRouter } from "next/router"
import { Grid, GridCol } from '@mantine/core'
import Image from 'next/image'
import sideImg from '../../assets/home-background.png'
import SignUpForm from "@/components/SignUp";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user, session, error } = await supabase.auth.signUp({ email, password })
      if (error) throw error;
      router.push('/')
    } catch (error) {
      alert(error.message)
    }
  };
  return (
    <div className="bg">
      <Grid className='grid' align='center'>
        <GridCol span='auto' h={556.8} w={505.08} className='img-bg'>
          <Image
            src={sideImg}
            width={500}
            height={556.8}
            alt="Login side image"
          />
        </GridCol>

        <GridCol span='auto'>

        <SignUpForm />

        </GridCol>

      </Grid>
      
    </div>
  );
};

export default Signup;