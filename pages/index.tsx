import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter clone</title>
      </Head>
      <main>
        <Sidebar />
        <h1 className="text-3xl font-bold underline">Hello</h1>
      </main>
    </>
  );
}
