/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Header() {
	const [hambOpen, setHambOpen] = useState(false);

	return (
		<motion.header
			animate={{
				opacity: [0, 1],
			}}
			className="py-4"
		>
			<div className="header-inner mx-auto flex max-w-screen-xl items-center justify-between px-8">
				<Link href="/" className="text-0 block">
					<a>
						<div className="relative h-[25px] w-[125px]">
							<Image layout="fill" priority src="/svgs/logo.svg" alt="Follow us on Twitter" />
						</div>
					</a>
				</Link>
				<nav className="hidden md:block">
					<ul className="flex">
						<li>
							<Link href="/">
								<a className="inline-block p-4 text-dark-text">Solutions</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="inline-block p-4 text-dark-text">Platform</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="inline-block p-4 text-dark-text">Resources</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="inline-block p-4 text-dark-text">Company</a>
							</Link>
						</li>
					</ul>
				</nav>
				<nav className="hidden md:block">
					<ul className="flex items-center">
						<li>
							<Link href="/">
								<a className="mr-4 inline-block p-4 text-dark-text">Log In</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="inline-block border border-wisdom p-4 py-2 text-dark-text transition-all duration-700 hover:bg-wisdom">Request a demo</a>
							</Link>
						</li>
					</ul>
				</nav>
				<button
					type="button"
					className={`relative mr-[-12px] box-border block h-12 w-12 cursor-pointer transition-all duration-700 md:hidden ${hambOpen && "rotate-180"}`}
					onClick={() => setHambOpen(!hambOpen)}
				>
					<div
						className={`absolute left-[50%] top-[16px] box-border h-0.5 w-6 translate-x-[-50%] bg-dark-text transition-all duration-700 ${
							hambOpen && "top-[23px] rotate-45"
						}`}
					/>
					<div
						className={`absolute left-[50%] top-[23px] box-border h-0.5 w-6 translate-x-[-50%] bg-dark-text transition-all duration-700 ${
							hambOpen && "opacity-0"
						}`}
					/>
					<div
						className={`absolute left-[50%] top-[30px] box-border h-0.5 w-6 translate-x-[-50%] bg-dark-text transition-all duration-700 ${
							hambOpen && "!top-[23px] -rotate-45"
						}`}
					/>
				</button>
			</div>
		</motion.header>
	);
}

export default Header;
