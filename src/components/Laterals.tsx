import React from "react";
import { motion } from "framer-motion";

import gitHubIcon from "../assets/gitHub.svg";
import linkedInIcon from "../assets/linkedIn.png";
import arrowUpIcon from "../assets/arrowUp.svg";

const Laterals: React.FC = () => {
	const transition = {
		type: "spring",
		damping: 10,
		stiffness: 20,
		duration: 0.3,
	};

	return (
		<div className="absolute-container flex justify-between items-center fixed bottom-0 w-full bg-transparent">
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ...transition, duration: 0.4, delay: 0.2 }}
				className="flex flex-col items-center bg-transparent w-32 -mb-36"
			>
				<div className="flex flex-col items-center space-y-4 mb-6 bg-transparent">
					<a href="https://github.com/LucasDDiazCuenca/" target="_blank">
						<img
							src={gitHubIcon}
							alt="GitHub"
							width={25}
							className="cursor-pointer hover:scale-125 hover:-translate-y-2 transition-all duration-300 bg-transparent"
						/>
					</a>
					<a href="https://www.linkedin.com/in/lucas-diaz-cuenca/" target="_blank">
						<img
							src={linkedInIcon}
							alt="LinkedIn"
							width={25}
							className="cursor-pointer hover:scale-125 hover:-translate-y-2 transition-all duration-300 bg-transparent"
						/>
					</a>
				</div>
				<span className="w-px h-24 bg-[#828ba1] -mb-12"></span>
			</motion.div>

			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ...transition, duration: 0.4, delay: 0.2 }}
				className="flex flex-col items-center bg-transparent w-32"
			>
				<a href="#top">
					<img src={arrowUpIcon} alt="arrowUp" width={25} className="mb-28 animate-bounce" />
				</a>
				<a
					href="mailto:lucasdamian30@gmail.com"
					className="text-[#828ba1] writing-mode-vertical-rl bg-transparent transform rotate-90 mb-28 hover:text-[#6aedd9] hover:-translate-y-2 transition-all duration-300"
				>
					lucasdamian30@gmail.com
				</a>
				<span className="w-px h-24 bg-[#828ba1]"></span>
			</motion.div>
		</div>
	);
};

export default Laterals;
