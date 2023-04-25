import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import { useEffect } from 'react'
import Events from '@/components/Events'
import Sponsors from '@/components/Sponsors'
import Team from '@/components/Team'
export default function Home() {
	function handleMusic(){
		try{
			// document.getElementById('music').play()
		}catch(e){
			// document.getElementById('music').play()
		}
	}
	useEffect(()=>{
		window.addEventListener('mousemove',handleMusic)
	},[])
	return (
		<>
			<Head>
				<title>SRISTI 2023</title>
				<meta name="description" content="The Content" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<audio autoPlay loop id='music'>
				<source  src='/audio/stranger.mp3'/>
			</audio>
			<Navbar />
			<Hero/>
			<About/>
			<Events/>
			<Sponsors/>
			<Team/>
		</>
	)
}
