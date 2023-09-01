/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../button";

function HeroTitleCta() {
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
			}}
			className="relative flex h-[50vh] w-full items-center justify-center overflow-hidden bg-sage py-4 md:h-[80vh]"
		>
			<div className="pointer-events-none absolute bottom-0 left-0 aspect-1 w-[40%] max-w-xl">
				<Image layout="fill" src="/svgs/pattern-1.svg" className="w-[40%] object-cover" />
			</div>
			<div className="pointer-events-none absolute top-0 right-0 aspect-1 w-[40%] max-w-xl">
				<Image layout="fill" src="/svgs/pattern-2.svg" className="w-[40%] object-cover" />
			</div>
			<div className="absolute left-0 top-0 h-[70px] w-[70px] bg-white md:h-[118px] md:w-[118px]" />
			<div className="absolute right-0 top-0 h-[18px] w-[100px] bg-white md:h-[32px] md:w-[220px]" />
			<div className="absolute left-0 bottom-0 h-[18px] w-[120px] bg-white md:h-[32px] md:w-[320px]" />
			<div className="relative z-10 max-w-[960px] px-8 text-center">
				<h3 className="mb-8 max-w-[400px] text-5xl leading-[3rem] text-white md:mb-14 md:max-w-full md:text-[84px] md:leading-[5rem]">
					Achieve breakthrough moments.
				</h3>
				<Button text="Get started" url="/" />
			</div>
		</motion.div>
	);
}

export default HeroTitleCta;
