// Alex created
import Head from 'next/head'
import Image from 'next/image'
import Basic_new from '../components/basics/Basic_new'
import StoryDay1 from '../components/Everyday/day1'




export default function Home() {
  return (
    <div className="bg-black w-screen h-screen">
      <Head>
        <title>Lamboozled Game</title>
        <meta name="description" content="Generated by leopard" />
        <link rel="icon" href="/site_icon.png" />
      </Head>
      {/* <Basic_new /> */}
      <StoryDay1 />


    </div>
  )
}
