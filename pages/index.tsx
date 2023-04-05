import Feed from "@/components/Feed";
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

        <Feed />
      </main>
    </>
  );
}
