import React from "react";
import { motion } from "framer-motion";

const SelfIntroduction: React.FC = () => {
	const textVariant = {
		hidden: { opacity: 0, y: 35 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="2xl:mt-72 xl:mt-40 lg:mt-40 md:mt-40 sm:mt-40  2xl:w-6/12 xl:w-9/12 lg:w-9/12 md:w-9/12 sm:w-10/12 m-auto w-11/12 mt-20 ">
			<motion.p
				variants={textVariant}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5, delay: 0.1 }}
				className="robotoFont text-[#6aedd9]"
			>
				Hi, my name is
			</motion.p>

			<motion.h2
				variants={textVariant}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5, delay: 0.3 }}
				className="text-[#cdd6f6] text-7xl font-semibold "
			>
				Lucas Diaz.
			</motion.h2>

			<motion.p
				variants={textVariant}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5, delay: 0.5 }}
				className="text-[#7683a4] text-7xl mb-5 font-semibold"
			>
				I build things for the web!
			</motion.p>

			<motion.p
				variants={textVariant}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.5, delay: 0.7 }}
				className="text-[#7683a4] 2xl:w-6/12 xl:w-6/12 lg:w-9/12 md:w-10/12 sm:w-10/12"
			>
				I’m a software engineer focused on building and designing amazing digital experiences. Right now, I’m
				working on exciting health projects at{" "}
				<a href="https://careexpand.com/" target="_blank" rel="noopener noreferrer" className="text-[#6aedd9]">
					Careexpand
				</a>
				.
			</motion.p>
		</div>
	);
};

export default SelfIntroduction;
