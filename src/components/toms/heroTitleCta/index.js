/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function HeroTitleCta() {
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
			}}
			className="relative flex h-[80vh] w-full items-center justify-center bg-sage py-4"
		>
			<div className="absolute left-0 top-0 h-[118px] w-[118px] bg-white" />
			<div className="absolute right-0 top-0 h-[32px] w-[220px] bg-white" />
			<div className="absolute left-0 bottom-0 h-[32px] w-[320px] bg-white" />
			<div className="max-w-[960px] text-center">
				<h3 className="text-[84px] leading-[5rem] text-white">Achieve breakthrough moments.</h3>
			</div>
		</motion.div>
	);
}

export default HeroTitleCta;
