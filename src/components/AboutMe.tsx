import React from "react";
import lucasPic from "../assets/me.jpg";
import { motion } from "framer-motion";

//IMAGES
import arrowRightImg from "../assets/arrowRight.svg";

const AboutMe: React.FC = () => {
	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: 100 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			className="mt-[600px] mb-[300px] 2xl:w-[900px] xl:w-[900px] lg:w-8/12 m-auto"
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.h2
				variants={itemVariants}
				className="text-3xl font-semibold relative after:content-[''] after:block after:w-5/12 after:h-[1px] after:bg-gray-700 after:absolute after:top-1/2 after:left-[calc(23%+0.5rem)] text-[#cdd6f0]"
			>
				<span className="text-[#6aedd9] robotoFont text-xl mr-5">01.</span> About Me
			</motion.h2>
			<div className="flex">
				<div className="flex-1">
					<motion.p variants={itemVariants} className="text-[#828ba1] mt-10 w-11/12 tracking-wider mb-6">
						Hello! I'm Lucas Diaz, a passionate developer with a love for creating, innovating and solving
						problems. My interest in web development started back in 2021 when I decided to start studying
						software engineering at{" "}
						<a href="https://isdicoders.com/courses/desarrollo-web-full-stack-online/" target="_blank">
							Isdi Coders
						</a>{" "}
						and I fell in love with it.
					</motion.p>
					<motion.p variants={itemVariants} className="text-[#828ba1] w-11/12 tracking-wider mb-6">
						Fast forward to today, and I had the privilege of working at{" "}
						<a href="https://www.artek.es/" target="_blank" className="text-[#6aedd9]">
							Artek Soluciones informaticas
						</a>
						,{" "}
						<a href="https://www.careexpand.com/" target="_blank" className="text-[#6aedd9]">
							Careexpand
						</a>
						, and I have promoted small businesses, creating wonderful websites.
					</motion.p>
					<motion.p variants={itemVariants} className="text-[#828ba1] w-11/12 tracking-wider mb-6">
						My main focus these days is building and designing amazing, highly innovative tools for
						telemedicine with the Careexpand team.
					</motion.p>
					<motion.p variants={itemVariants} className="text-[#828ba1] w-11/12 tracking-wider mb-6">
						In my spare time, I enjoy watching films, gaming, practicing piano, working on 3D interfaces,
						and trying my hand at developing video games.
					</motion.p>
					<motion.p variants={itemVariants} className="text-[#828ba1] w-11/12 tracking-wider mb-6">
						Here are a few technologies I've been working with recently:{" "}
					</motion.p>
					<motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
						<ul>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" />
								React
							</li>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> Typescript
							</li>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> Redux
							</li>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> Three.js / React Three Fiber
							</li>
						</ul>
						<ul>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> SASS / Tailwind
							</li>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> Unity
							</li>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> AWS
							</li>
							<li className="flex text-[#828ba1]">
								<img src={arrowRightImg} alt="" /> Figma
							</li>
						</ul>
					</motion.div>
				</div>
				<motion.div variants={itemVariants} className="relative">
					<div className="relative group">
						<img
							src={lucasPic}
							alt="Lucas Diaz"
							className="w-64 h-64 object-cover relative z-50 transition-all duration-200 filter sepia group-hover:filter-none group-hover:translate-x-[-5px] group-hover:translate-y-[-5px]"
							style={{ filter: "sepia(1) hue-rotate(121deg) saturate(241%) brightness(81%)" }}
						/>
						<div
							className="w-64 h-64 border-4 border-blue-400 absolute top-3 left-3 z-10 transition-all duration-200 group-hover:translate-x-[5px] group-hover:translate-y-[5px]"
							style={{ filter: "sepia(1) hue-rotate(138deg) saturate(245%) brightness(85%)" }}
						></div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AboutMe;
