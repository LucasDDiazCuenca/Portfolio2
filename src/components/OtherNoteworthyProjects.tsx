import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import folderImg from "../assets/folder.svg";
import gitHubImg from "../assets/gitHub.svg";

const OtherNoteworthyProjects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const transition = {
		type: "spring",
		damping: 12,
		stiffness: 100,
		duration: 0.3,
	};

	const projects = [
		{
			title: "OPR Mobile App",
			description: "This app uses a basic algorithm for solo play against AI in the wargame One Page Rules.",
			technologies: ["React", "Javascript", "Tailwind"],
			link: "https://github.com/LucasDDiazCuenca/opr-mobile-app",
		},
		{
			title: "1º Portfolio",
			description:
				"The first version of my personal portfolio in which I demonstrate my skills as a front-end developer.",
			technologies: ["React", "TS", "Tailwind", "three.js"],
			link: "https://github.com/LucasDDiazCuenca/Portfolio",
		},
		{
			title: "Instagram Clone",
			description: "An Instagram clone where I enhanced my frontend developer skills using React.",
			technologies: ["React", "JS", "Tailwind", "three.js"],
			link: "https://github.com/LucasDDiazCuenca/socialportal",
		},
	];

	return (
		<div ref={ref} className="px-4 sm:px-0 mb-20 sm:mb-[300px] max-w-[1000px] mx-auto">
			<motion.h2
				initial={{ y: 50, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ ...transition, duration: 0.4 }}
				className="text-3xl font-semibold text-[#cdd6f0] text-center mb-12"
			>
				Other Noteworthy Projects
			</motion.h2>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ staggerChildren: 0.3 }}
			>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						className="w-full sm:w-[320px] h-auto sm:h-[270px] bg-[#132241] p-5 hover:-translate-y-2 transition-all duration-300 rounded-md shadow-xl"
						initial={{ y: 50, opacity: 0 }}
						animate={isInView ? { y: 0, opacity: 1 } : {}}
						transition={{ ...transition, delay: index * 0.1 }}
						whileHover={{
							scale: 1.05,
							translateY: -5,
							transition: { duration: 0.3, ease: "easeOut" },
						}}
					>
						<div className="flex justify-between bg-[#132241] mb-4">
							<img src={folderImg} alt="" width={40} className="bg-[#132241]" />
							<a href={project.link} target="_blank" className="bg-[#132241]">
								<img
									src={gitHubImg}
									alt=""
									width={25}
									className="bg-[#132241] hover:scale-125 transition-all duration-300"
								/>
							</a>
						</div>
						<h3 className="text-lg font-semibold w-fit bg-[#132241] mb-4">{project.title}</h3>
						<p className="text-[#828ba1] bg-[#132241] mb-4">{project.description}</p>
						<div className="flex flex-wrap gap-4 bg-[#132241]">
							{project.technologies.map((tech) => (
								<span key={tech} className="text-[#828ba1] robotoFont text-sm font-light bg-[#132241]">
									{tech}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className="flex justify-center mt-12"
				initial={{ y: 50, opacity: 0 }}
				animate={isInView ? { y: 0, opacity: 1 } : {}}
				transition={{ ...transition, duration: 0.4 }}
			>
				<a
					href="https://github.com/LucasDDiazCuenca"
					target="_blank"
					className="relative flex items-center justify-center h-10 w-56 rounded-sm overflow-hidden border border-[#6aedd9] text-[#6aedd9] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#6aedd9] before:duration-300 before:ease-out hover:text-white hover:shadow-[#6aedd9] hover:before:h-56 hover:before:w-56 hover:before:opacity-80"
				>
					<span className="relative z-10 bg-transparent">Watch my entire GitHub</span>
				</a>
			</motion.div>
		</div>
	);
};

export default OtherNoteworthyProjects;
