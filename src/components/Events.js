import Image from "next/image"
import { events } from "@/data"
export default function Events() {
	return (
		<>
			<section id="events" className="p-6 bg-strangerDark">
				<h3 className="mb-3 text-lg underline md:text-3xl text-strangerRed font-strange underline-offset-4">
					Events
				</h3>
				<div className="relative flex flex-wrap items-center justify-center p-8 sm:p-14 gap-14 isolate">
					{
						events.map((i,index)=>{
							return(
								<div key={index} className="bg-strangerBlack w-80 sm:h-96 h-[400px] relative flex items-center justify-center group before:content-[''] before:absolute before:inset-[-10px_50px] before:border-t-4 before:border-b-4 before:border-strangerRed before:skew-y-12 before:z-[-1] hover:before:skew-y-0 before:transition before:duration-500 before:ease-in-out after:content-[''] after:absolute after:inset-[50px_-10px] after:border-l-4 after:border-r-4 after:border-strangerRed after:-skew-x-12 after:z-[-1] hover:after:skew-x-0 after:transition after:duration-500 after:ease-in-out">
									<div className="relative flex flex-col items-center justify-center w-full h-full gap-5 px-5 overflow-hidden text-center">
										<Image src={`/images/events/${i.fname}`} height={80} width={80} alt={i.name} className="shadow-[0_0_0_4px_rgb(30_25_60),0_0_0_6px_rgb(255_21_21)] transition duration-500 ease-in-out group-hover:shadow-[0_0_0_4px_rgb(30_7_7),0_0_0_400px_rgb(255_21_21)]"></Image>
										<div className="">
											<h3 className="mb-2 text-lg font-bold transition duration-500 text-strangerRed font-strange group-hover:text-strangerBlue">
												{i.name}
											</h3>
											<p className="text-sm text-justify text-white transition duration-500 sm:text-base group-hover:text-strangerDark">
												{i.description}
											</p>
										</div>
									</div>
								</div>
							)
						})
					}
					
				</div>
			</section>
		</>
	)
}
