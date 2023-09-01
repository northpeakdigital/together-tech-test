import React from "react";
import Intro from "~/components/toms/intro";
import Layout from "~/components/toms/layout";
import FullImage from "~/components/toms/fullImage";
import LogoMarquee from "~/components/toms/logoMarquee";

function HawkPage() {
	return (
		<Layout>
			<Intro />
			<FullImage path="/images/home.jpg" />
			<LogoMarquee />
		</Layout>
	);
}

export default HawkPage;
