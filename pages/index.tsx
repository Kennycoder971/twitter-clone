import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widget from "@/components/Widget";
import Head from "next/head";

export default function Home() {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter clone</title>
      </Head>
      <main className="grid grid-cols-9">
        <Sidebar />

        <Feed />

        <Widget />
      </main>
    </div>
  );
}
