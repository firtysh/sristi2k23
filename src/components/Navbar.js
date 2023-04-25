import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	function toggleOpen() {
		setIsOpen((prev) => !prev)
	}
	return (
		<>
			<nav className="fixed z-40 flex flex-row items-center justify-between w-full p-6 bg-strangerBlack max-h-20" >
				<div className="text-strangerRed">
					<Link href="/" className="font-bold font-strange"><span className="text-lg md:text-3xl">S</span><span className="align-top md:text-2xl">RIST</span><span className="text-lg md:text-3xl">I</span></Link>
				</div>
				<ul className="hidden space-x-5 text-lg text-white md:flex">
					<li className="hover:text-strangerRed">
						<Link href="#home" >Home</Link>
					</li>
					<li className="hover:text-strangerRed">
						<Link href="#about" >About</Link>
					</li>
					<li className="hover:text-strangerRed">
						<Link href="#events" >Events</Link>
					</li>
					<li className="hover:text-strangerRed">
						<Link href="#team" >Team</Link>
					</li>
					<li className="hover:text-strangerRed">
						<Link href="#sponsors">Sponsors</Link>
					</li>
				</ul>
				{isOpen ? <div className="md:hidden text-strangerRed" onClick={toggleOpen}> <AiOutlineClose /> </div> : <div className="md:hidden text-strangerRed" onClick={toggleOpen}> <AiOutlineMenu /> </div>}
				{isOpen ? <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen space-y-3 font-bold bg-strangerDark -z-10 isolate text-strangerRed">
					<li className="">
						<Link href="#home" onClick={toggleOpen}>Home</Link>
					</li>
					<li>
						<Link href="#about" onClick={toggleOpen}>About</Link>
					</li>
					<li>
						<Link href="#events" onClick={toggleOpen}>Events</Link>
					</li>
					<li>
						<Link href="#team" onClick={toggleOpen}>Team</Link>
					</li>
					<li>
						<Link href="#sponsors" onClick={toggleOpen}>Sponsors</Link>
					</li>
				</ul> : ""
				}
			</nav>
		</>
	);
}