/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

function Button({ text = "button text", url = "/" }) {
	return (
		<Link href={url}>
			<a className="inline-block bg-pinpoint p-4 px-6 text-dark-text transition-all duration-700 hover:bg-dark-text hover:text-pinpoint">
				<span>{text}</span>
			</a>
		</Link>
	);
}

export default Button;
