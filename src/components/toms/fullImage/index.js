/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function FullImage({ path = "" }) {
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
				y: [-20, 0],
			}}
			className="relative mx-auto mt-8 aspect-[16/9] max-w-screen-xl md:mt-24"
		>
			<Image layout="fill" src={path} className="w-full object-cover" />
		</motion.div>
	);
}

export default FullImage;
