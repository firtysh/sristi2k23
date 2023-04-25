import Image from "next/image"
import { sponsors } from "@/data.js"
export default function Sponsors(){
	return(
		<>
			<section id="sponsors" className="p-6 bg-gradient-to-b from-strangerDark to-strangerBlack">
				<h3 className="mb-3 text-lg md:text-3xl text-strangerRed font-strange">
					<span className="underline underline-offset-4 unde">Our</span> <span className="underline underline-offset-4">Sponsors</span>
				</h3>
				<div className="flex flex-wrap items-center justify-center gap-10 md:p-10">
					{
						sponsors.map((i,index)=>{
							return(
								<div key={index} className="relative transition duration-300 cursor-pointer h-60 w-60 blur hover:blur-0 group">
									{/* vertical */}
									<div className="absolute left-0 w-1 h-5 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									<div className="absolute right-0 w-1 h-5 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									<div className="absolute bottom-0 left-0 w-1 h-5 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									<div className="absolute bottom-0 right-0 w-1 h-5 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									{/* vertical end */}

									{/* horizontal */}
									<div className="absolute left-0 w-5 h-1 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									<div className="absolute right-0 w-5 h-1 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									<div className="absolute bottom-0 left-0 w-5 h-1 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									<div className="absolute bottom-0 right-0 w-5 h-1 transition duration-300 bg-transparent bg-strangerRed group-hover:bg-strangerRed"></div>
									{/* horizontal end  */}


									<div className="relative flex items-center justify-center w-full h-full p-6 text-white">
										<Image src={`/images/sponsors/${i.fname}`} alt={i.name}  fill className="object-contain p-6 transition duration-300 ease-in-out group-hover:scale-110" />
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