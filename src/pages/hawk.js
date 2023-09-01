import React from "react";
import Intro from "~/components/toms/intro";
import Layout from "~/components/toms/layout";
import FullImage from "~/components/toms/fullImage";
import LogoMarquee from "~/components/toms/logoMarquee";
import ImageSwitcher from "~/components/toms/imageSwitcher";
import TextReader from "~/components/toms/textReader";
import HeroTitleCta from "~/components/toms/heroTitleCta";

function HawkPage() {
	return (
		<Layout>
			<Intro />
			<FullImage path="/images/home.jpg" />
			<LogoMarquee />
			<ImageSwitcher />
			<TextReader />
			<HeroTitleCta />
		</Layout>
	);
}

export default HawkPage;
