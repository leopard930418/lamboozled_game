// Alex created
import Head from "next/head";
import Image from "next/image";
import Story from "../components/story/Story";
import Intro from "../components/intro/intro";
import Landing from "../components/landing/Welcome";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Home() {
  const playStatus = useSelector(
    (state) => state?.game?.playStatus ?? "landing"
  );
  return (
    <div className="bg-black w-screen h-screen">
      <Head>
        <title>Lamboozled Game</title>
        <meta name="description" content="Generated by leopard" />
        <link rel="icon" href="/site_icon.png" />
      </Head>
      
      {/* temp test */}
      {playStatus=="landing"&&(
        <Landing />
      )}
      {playStatus=="story"&&(
        <Story />
      )}
      {playStatus=="tutorial"&&(
        <Intro />
      )}
        {/* <Story /> */}

      
      {/* <Intro /> */}
    </div>
  );
}
