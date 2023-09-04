/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ImageSwitcher() {
	const [chosenImage, setChosenImage] = useState(0);

	return (
		<motion.div
			animate={{
				opacity: [0, 1],
			}}
			className="mx-auto max-w-screen-xl py-4 px-4 md:flex md:flex-row-reverse md:items-start md:justify-between"
		>
			<div className="mr-8 md:flex-[0_0_40%]">
				<div className="">
					<button className="block w-full border-t border-experience py-4 text-left text-xl text-dark-text" onClick={() => setChosenImage(0)} type="button">
						Visualise
					</button>
					<div className={`max-h-0 overflow-hidden ${chosenImage === 0 && "mb-6 max-h-[600px]"}`}>
						<p className="mt-4 text-profound">
							Integrate all your data into one platform for a unified view of any disaster — with every detail accessible to everyone who needs it.
						</p>
					</div>
				</div>

				<div className="block w-full">
					<button className="block w-full border-t border-experience py-4 text-left text-xl text-dark-text" onClick={() => setChosenImage(1)} type="button">
						Collaborate
					</button>
					<div className={`max-h-0 overflow-hidden ${chosenImage === 1 && "mb-6 max-h-[600px]"}`}>
						<h3 className="mt-4 mb-4 text-2xl leading-8 md:text-[2.5rem] md:leading-[2.8rem]">Access real-time information.</h3>
						<p className="text-profound">
							Ensure first responders are on the same page with real-time alerts and instant access to information. Eliminate silos and work effectively as a
							team.
						</p>
					</div>
				</div>

				<div className="block w-full">
					<button className="block w-full border-t border-experience py-4 text-left text-xl text-dark-text" onClick={() => setChosenImage(2)} type="button">
						Respond
					</button>
					<div className={`max-h-0 overflow-hidden ${chosenImage === 2 && "mb-6 max-h-[600px]"}`}>
						<h3 className="mt-4 mb-4 text-2xl leading-8 md:text-[2.5rem] md:leading-[2.8rem]">Respond faster & more efficiently.</h3>
						<p className="text-profound">Develop smarter strategies and make better decisions. Save lives and protect communities.</p>
					</div>
				</div>
			</div>
			<div className="relative aspect-[9/11] bg-dark-text md:flex-[0_0_50%]">
				<Image
					layout="fill"
					className={`object-cover opacity-0 transition-all duration-700 ${chosenImage === 0 && "opacity-100"}`}
					src="/images/switcher-0.jpg"
					alt="Follow us on Twitter"
				/>
				<Image
					layout="fill"
					className={`object-cover opacity-0 transition-all duration-700 ${chosenImage === 1 && "opacity-100"}`}
					src="/images/switcher-1.jpg"
					alt="Follow us on Twitter"
				/>
				<Image
					layout="fill"
					className={`object-cover opacity-0 transition-all duration-700 ${chosenImage === 2 && "opacity-100"}`}
					src="/images/switcher-2.jpg"
					alt="Follow us on Twitter"
				/>
			</div>
		</motion.div>
	);
}

export default ImageSwitcher;
