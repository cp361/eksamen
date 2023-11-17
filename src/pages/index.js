import Head from "next/head";
import LoginPage from "./login/LoginPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="CPH Business Booking Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="%PUBLIC_URL%/https://www.cphbusiness.dk/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/https://www.cphbusiness.dk/favicon.ico" />
      </Head>
      <main>
        <LoginPage />
      </main>
    </>
  );
}
