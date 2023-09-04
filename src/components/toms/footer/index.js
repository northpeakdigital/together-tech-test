/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
	return (
		<>
			<footer className="mx-auto mt-[132px] mb-[100px] max-w-screen-xl px-8">
				<Link href="/" className="text-0 block">
					<a>
						<div className="relative mb-16 h-[32px] w-[160px]">
							<Image layout="fill" priority src="/svgs/logo.svg" alt="Follow us on Twitter" />
						</div>
					</a>
				</Link>
				<div className="mb-16 md:flex md:flex-wrap md:items-start md:justify-between">
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Law Enforcement</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Investigations</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Field Services & Patrol</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Real-Time Crime Center</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Administration</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Information Technology</a>
						</Link>
					</div>
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Emergency Management</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Smart Cities</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Event Management</a>
						</Link>
					</div>
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Platform</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Overview</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Security</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Privacy & Civil Liberties</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Implementation</a>
						</Link>
					</div>
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Resources</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Case Studies</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Insights</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Blog</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Events</a>
						</Link>
					</div>
				</div>
				<div className="md:flex md:items-start md:justify-between">
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-dark-text transition-all duration-700">Company</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">About</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Careers</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Contact</a>
						</Link>
					</div>
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-dark-text transition-all duration-700">Support</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Help Center</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">System Status</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Release Notes</a>
						</Link>
					</div>
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-dark-text transition-all duration-700">Social</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Linkedin</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Twitter</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Instagram</a>
						</Link>
					</div>
					<div className="mb-12 md:mb-0 md:flex-[0_0_calc(25%_-_20px)]">
						<Link href="/">
							<a className="mb-4 block text-dark-text transition-all duration-700">Legal</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Terms of Use</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Cookie Policy</a>
						</Link>
						<Link href="/">
							<a className="mb-4 block text-profound transition-all duration-700 md:hover:text-dark-text">Privacy Policy</a>
						</Link>
					</div>
				</div>
			</footer>
			<div className="w-full border-t border-experience p-8">
				<div className="mx-auto max-w-screen-xl text-center md:flex md:items-center md:justify-between">
					<div className="relative mx-auto mb-8 h-[60px] w-[60px] text-center md:mx-0 md:mb-0 md:w-[60px]">
						<Image
							className="mx-auto block h-[60px] w-[60px] object-cover"
							layout="fill"
							priority
							width={100}
							height={100}
							src="/images/aws-logo.png"
							alt="Follow us on Twitter"
						/>
					</div>
					<p>&copy; 2022 Hawk. All rights reserved</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
