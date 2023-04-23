// import bg_video from '@/assets/video/LoathsomeColorlessFlee.mp4'
export default function Hero(){
	return (
		<>
			<div className="h-[76px]" id="home">
			</div>
			<section id="" className="relative -z-40 w-screen  min-h-[30vh] max-h-[50vh] h-[40vh]  bg-strangerDark flex flex-col items-center justify-between p-6" >
				<video autoPlay loop muted className="fixed object-cover object-center w-screen h-[inherit] -z-50 scale-110 brightness-75 blur">
					<source src='/video/LoathsomeColorlessFlee.mp4'/>
				</video>
				<div className="text-white text-xs text-center font-bold">
					 Jalpaiguri Government Engineering College
					 <br></br>
					 <span className="text-white">Presents</span>
				</div>
				<div className="flex flex-col items-center justify-center text-center">
					<div className="text-white font-bold text-sm">
					The Biggest Tech Fest In North Bengal
					</div>
					<div className="text-strangerRed font-strange drop-shadow-[0_0px_36px_rgb(255,21,21)] mt-3 -mb-3">
						<span className="text-5xl">S</span><span className="align-top text-4xl">RIST</span><span className="text-5xl">I</span>
					</div>
					<div className="text-strangerRed font-strange">
					2023
					</div>
				</div>
				<div className="text-white font-bold">
					1st - 7th May
				</div>
			</section>  
		</>
	)
}