/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { gsap, ScrollTrigger } from "gsap";
import Scrollbar from "react-smooth-scrollbar";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function TextReader() {
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
			}}
			className="my-[50px] mx-auto max-w-[840px] px-8 md:my-[170px]"
		>
			<h4>Our mission</h4>
			<p className="my-8 text-3xl leading-tight md:my-11 md:text-[3.5rem] md:leading-[3.4rem]">
				We're empowering the world's most important organizations to transform Public Safety, protect civil liberties & ensure personal freedom.
			</p>
			<Link href="/">
				<span>Learn more</span>
			</Link>
		</motion.div>
	);
}

export default TextReader;
