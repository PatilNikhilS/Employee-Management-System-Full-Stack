import { getSession } from "next-auth/react";
import Head from "next/head";
import Addemployee from "@/components/addemployee";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Employeelist from "../components/Employeelist";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Employee management App</title>
      </Head>
      <Navbar />

      <main>
        <Addemployee />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
