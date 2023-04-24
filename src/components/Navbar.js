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
			<nav className="fixed w-full bg-strangerBlack p-6 flex flex-row items-center justify-between z-40 max-h-20" >
				<div className="text-strangerRed">
					<Link href="/" className="font-strange font-bold"><span className="text-lg md:text-xl">S</span><span className="align-top md:text-lg">RIST</span><span className="text-lg md:text-xl">I</span></Link>
				</div>
				<ul className="text-white md:flex space-x-5	text-lg hidden">
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
				{isOpen ? <ul className="absolute bg-strangerDark left-0 h-screen top-0  w-screen flex items-center justify-center flex-col -z-10 isolate text-strangerRed font-bold space-y-3">
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