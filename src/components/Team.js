import Image from "next/image";
import Link from "next/link";
import { teamMembers } from '@/data.js'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"
export default function Team() {
	return (
		<>
			<section id="team" className="p-6 bg-gradient-to-b from-strangerBlack to-strangerDark">
				<h3 className="mb-48 text-lg md:text-3xl text-strangerRed font-strange">
					<span className="underline underline-offset-4 unde">Our</span> <span className="underline underline-offset-4">Team</span>
				</h3>
				<div className="flex flex-wrap items-center justify-center gap-48 md:p-10">
					{teamMembers.map((i, index) => {
						return (
							<div key={index} className="relative h-64 text-white w-96 group">
								<div className="absolute transition-all duration-700 inset-0 bg-black before:content-[''] before:absolute before:bg-gradient-to-r before:left-1/2 before:top-1/2  before:animate-rotate before:from-transparent before:via-strangerRed before:h-[700px] before:w-52 overflow-hidden after:content-[''] after:absolute after:bg-strangerBlack after:inset-1 rounded after:rounded after:transition-all after:duration-700"></div>
								<div className="absolute sm:w-60 sm:h-60 w-52 h-52 -translate-x-1/2 bg-black left-1/2 -top-36 before:content-[''] before:absolute before:bg-gradient-to-r before:left-1/2 before:top-1/2 before:animate-rotateRev before:from-transparent before:via-strangerRed before:h-[700px] before:w-52 overflow-hidden after:content-[''] after:absolute after:bg-strangerBlack group-hover:rounded-full group-hover:after:rounded-full transition-all duration-700 after:inset-1 rounded after:rounded after:transition-all after:duration-700">
									<Image src={`/images/team/${i.filename}`} width={192} height={192} alt={i.name} className="absolute z-10 transition-all duration-700 rounded group-hover:rounded-full sm:h-56 sm:w-56 inset-2 grayscale group-hover:grayscale-0" />
								</div>
								<div className="relative text-center text-white top-28">
									<div className="mb-6">
										<h4 className="text-2xl font-bold uppercase text-strangerRed">{i.name}</h4>
										<h5 className="font-bold">{i.role}</h5>
									</div>
									<div className="flex items-center justify-center gap-6 text-2xl ">
										<Link href={`mailto:${i.email}`} target='_blank' className="text-3xl transition duration-300 hover:scale-125"  ><MdEmail /></Link>
										<Link href={i.linkedin} target='_blank' className="transition duration-300 hover:scale-125" ><FaLinkedin /></Link>
										<Link href={i.instagram} target='_blank' className="transition duration-300 hover:scale-125" ><FaInstagram /></Link>
										<Link href={i.github} target='_blank' className="transition duration-300 hover:scale-125" ><FaGithub /></Link>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</section>
		</>
	)
}