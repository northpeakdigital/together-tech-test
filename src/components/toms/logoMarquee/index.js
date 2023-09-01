/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function LogoMarquee() {
	return (
		<motion.div
			className="mt-20 mb-40"
			animate={{
				opacity: [0, 1],
				y: [-20, 0],
			}}
		>
			<p className="mb-16 block text-center">Trusted by global organisations</p>
			<div className="relative flex overflow-x-hidden">
				<div className="animate-marquee whitespace-nowrap">
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/albuquerque.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/antioch.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/pittsburg.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/albuquerque.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/antioch.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/pittsburg.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/albuquerque.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/antioch.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/pittsburg.svg" alt="Follow us on Twitter" />
					</span>
				</div>
				<div className="absolute top-0 animate-marquee2 whitespace-nowrap">
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/albuquerque.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/antioch.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/pittsburg.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/albuquerque.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/antioch.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/pittsburg.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/albuquerque.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/antioch.svg" alt="Follow us on Twitter" />
					</span>
					<span className="relative mx-10 inline-block h-[50px] w-[150px]">
						<Image layout="fill" priority src="/svgs/pittsburg.svg" alt="Follow us on Twitter" />
					</span>
				</div>
			</div>
		</motion.div>
	);
}

export default LogoMarquee;
