import Head from "next/head";
import LoginPage from "./login/LoginPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>CPH Business Booking Site</title>
        <meta name="description" content="CPH Business Booking Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/https://www.cphbusiness.dk/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/https://www.cphbusiness.dk/favicon.ico" />
      </Head>
      <main>
        <LoginPage />
      </main>
    </>
  );
}
