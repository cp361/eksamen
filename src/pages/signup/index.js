import Link from "next/link";
import { useState } from "react";
import { supabase } from "../helper/supabaseClient"
import { useRouter } from "next/router"

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
    <div >
      <div>
        <span >SignUp</span>
        <form
          onSubmit={handleSubmit}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
          <button  type="submit">SignUp</button>
        </form>
        <span onClick={() => router.push('/')} >
          Allerede oprettet en bruger? <span >Login</span>
        </span>
      </div>
    </div>
  );
};

export default Signup;