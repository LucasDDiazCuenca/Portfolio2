import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SomeThingIBuild = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const transition = {
		type: "spring",
		damping: 10,
		stiffness: 120,
		duration: 0.3,
	};

	return (
		<div ref={ref} className="mt-[200px] mb-[200px] 2xl:w-[900px] xl:w-[900px] lg:w-8/12 w-10/12 m-auto">
			<motion.p
				initial={{ y: 100, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ ...transition, duration: 0.4 }}
				className="text-sm font-extralight text-[#6aedd9] mb-3 text-center robotoFont"
			>
				04. What's Next
			</motion.p>
			<motion.h2
				initial={{ y: 100, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ ...transition, duration: 0.4, delay: 0.1 }}
				className="text-[#cdd6f0] text-4xl font-semibold text-center mb-5"
			>
				Get In Touch
			</motion.h2>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ ...transition, duration: 0.4, delay: 0.2 }}
				className="flex flex-col items-center"
			>
				<p className="text-[#828ba1] text-center mb-10 sm:w-[600px]">
					While I’m not actively pursuing new opportunities, I’m always open to hearing about interesting
					projects or collaborations. Feel free to reach out with any questions or just to say hello. I’d love
					to connect!
				</p>
				<a
					href="mailto:lucasdamian30@gmail.com"
					className="relative flex items-center justify-center h-10 w-40 rounded-sm overflow-hidden border border-[#6aedd9] text-[#6aedd9] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#6aedd9] before:duration-300 before:ease-out hover:text-white hover:shadow-[#6aedd9] hover:before:h-56 hover:before:w-40 hover:before:opacity-80"
				>
					Say hello
				</a>
			</motion.div>
		</div>
	);
};

export default SomeThingIBuild;
