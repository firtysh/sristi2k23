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
			<nav className="relative bg-strangerBlack p-6 flex flex-row items-center justify-between  max-h-20" >
				<div className="text-strangerRed">
					<Link href="/">SRISTI</Link>
				</div>
				{isOpen ? <div className="text-strangerRed" onClick={toggleOpen}> <AiOutlineClose /> </div> : <div className="text-strangerRed" onClick={toggleOpen}> <AiOutlineMenu /> </div>}
				{isOpen ? <ul className="absolute bg-strangerDark left-0 h-screen top-0  w-screen flex items-center justify-center flex-col -z-20 text-strangerRed font-bold space-y-3">
					<li className="">
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/events">Events</Link>
					</li>
					<li>
						<Link href="/team">Team</Link>
					</li>
					<li>
						<Link href="/sponsors">Sponsors</Link>
					</li>
				</ul> : ""
				}
			</nav>
		</>
	);
}