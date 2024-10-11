import React, { useEffect, useState } from "react";
import "./Home.scss";
import TopMenu from "../components/TopMenu";
// import Laterals from "../components/Laterals";
import SelfIntroduction from "../components/SelfIntroduction";
import AboutMe from "../components/AboutMe";
import WhereIWorked from "../components/WhereIWorked";
// import SomeThingIBuild from "../components/SomeThingIBuild";
// import OtherNoteworthyProjects from "../components/OtherNoteworthyProjects";
// import WhatsNext from "../components/WhatsNext";
// import Footer from "../components/Footer";

const Home: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div>
			<div
				className="cursor-firefly"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					transform: `translate(-50%, -50%)`,
				}}
			></div>
			<TopMenu />
			{/* <Laterals /> */}
			<SelfIntroduction />
			<div id="about">
				<AboutMe />
			</div>
			<div id="experience">
				<WhereIWorked />
			</div>
			{/* <div id="work">
				<SomeThingIBuild />
				<OtherNoteworthyProjects />
			</div>
			<div id="contact">
				<WhatsNext />
			</div> */}
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
