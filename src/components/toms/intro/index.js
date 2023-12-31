import React from "react";
import { motion } from "framer-motion";
import Button from "../button";

function Intro() {
	return (
		<motion.div
			animate={{
				opacity: [0, 1],
				y: [-20, 0],
			}}
			className="mx-auto px-8 pt-16 pb-12 text-center md:pt-32"
		>
			<h1 className="mx-auto mb-4 max-w-md text-4xl md:mb-8 md:max-w-3xl md:text-7xl">One platform powering better information.</h1>
			<h2 className="text-md mx-auto mb-4 max-w-xl md:mb-8 md:text-xl">
				Hawk empowers Public Safety agencies to make mission-critical decisions in real-time.
			</h2>
			<Button text="Get started" url="/" />
		</motion.div>
	);
}

export default Intro;
