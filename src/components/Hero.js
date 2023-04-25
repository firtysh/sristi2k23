// import bg_video from '@/assets/video/LoathsomeColorlessFlee.mp4'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"

export default function Hero(){
	return (
		<>
			<div className="h-[76px]" id="home">
			</div>
			<section id="" className="relative  min-h-[30vh] max-h-[50vh] h-[40vh]  bg-transparent flex flex-col items-center justify-between overflow-hidden" >
				<video autoPlay loop muted className="fixed object-cover object-center w-full h-[inherit] -z-10 isolate scale-110 brightness-75 blur-sm">
					<source src='/video/vid.mp4'/>
				</video>
				<div className="flex flex-col items-center justify-between h-full p-6">
					<div className="text-xs font-bold text-center text-white md:text-lg">
					 Jalpaiguri Government Engineering College
					 <br></br>
					 <span className="text-white">Presents</span>
					</div>
					<div className="flex flex-col items-center justify-center text-center">
						<div className="text-sm font-bold text-white md:text-xl">
					The Biggest Tech Fest In North Bengal
						</div>
						<div className="text-strangerRed font-strange drop-shadow-[0_0px_36px_rgb(255,21,21)] mt-1 -mb-3">
							<span className="text-5xl md:text-6xl">S</span><span className="text-4xl align-top md:text-5xl">RIST</span><span className="text-5xl md:text-6xl">I</span>
						</div>
						<div className="text-strangerRed font-strange md:text-lg">
					2023
						</div>
					</div>
					<div className="font-bold text-center text-white">
						<div className="z-30 flex items-center content-center justify-center mb-2 space-x-3 text-xl text-center">
							<Link href="https://www.facebook.com/sristi2k23?mibextid=ZbWKwL" target={'_blank'} className="hover:text-[#1877F2] hover:scale-125 transition-all duration-500"><FaFacebook/></Link>
							<Link href="https://instagram.com/sristijgec?igshid=YmMyMTA2M2Y=" target={'_blank'} className="hover:text-[#bc2a8d] hover:scale-125 transition-all duration-500"><FaInstagram/></Link>
							<Link href="https://www.youtube.com/channel/UCliiQGJmmyZB-qEPdQWaNIQ" target={'_blank'} className="hover:text-[#c4302b] hover:scale-125 transition-all duration-500"><FaYoutube/></Link>
							<Link href="mailto:sristi@jgec.ac.in" target={'_blank'} className="hover:text-[#BB001B] hover:scale-125 transition-all duration-500"><MdEmail/></Link>
						</div>
					1st - 7th May
					</div>
				</div>
			</section>  
		</>
	)
}