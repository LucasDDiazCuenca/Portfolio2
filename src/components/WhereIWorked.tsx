import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import arrowRightImg from "../assets/arrowRight.svg";

const WorkExperience = () => {
	const [selectedOption, setSelectedOption] = useState("Careexpand");

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.8,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	const textVariants = {
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

	const handleClick = (option: string) => {
		setSelectedOption(option);
	};

	return (
		<div
			ref={ref}
			className="sm:mt-[200px] mt-40 mb-[300px] 2xl:w-[900px] xl:w-[900px] lg:w-8/12 m-auto p-6 sm:p-0 "
		>
			<motion.h2
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={textVariants}
				className="text-3xl font-semibold relative after:content-[''] after:block sm:after:w-5/12 after:w-2/12 after:h-[1px] after:bg-gray-700 after:absolute after:top-1/2 sm:after:left-[calc(37%+0.5rem)] after:left-[calc(83%+0.2rem)] text-[#cdd6f0] mb-7"
			>
				<span className="text-[#6aedd9] robotoFont text-xl sm:mr-5 mr-1">02.</span> Where I've Worked
			</motion.h2>

			<motion.div
				className="flex flex-col sm:flex-row gap-5 w-11/12 justify-between"
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				variants={containerVariants}
			>
				<motion.div variants={itemVariants} className="flex relative">
					<div
						className={`absolute left-4 top-0 h-[48px] w-[2px] bg-[#6aedd9] transition-transform duration-300 ease-in-out`}
						style={{
							transform:
								selectedOption === "Careexpand"
									? "translateY(0px)"
									: selectedOption === "Artek Soluciones I."
									? "translateY(48px)"
									: "translateY(70px)",
						}}
					></div>

					<div className="flex flex-col pl-5">
						<p
							className={`cursor-pointer px-5 py-4 text-xs robotoFont ${
								selectedOption === "Careexpand"
									? "text-[#6aedd9] bg-[#112240]"
									: "text-[#828ba1] hover:bg-[#112240]"
							}`}
							onClick={() => handleClick("Careexpand")}
						>
							Careexpand
						</p>
						<p
							className={`cursor-pointer px-5 py-4 text-xs robotoFont ${
								selectedOption === "Artek Soluciones I."
									? "text-[#6aedd9] bg-[#112240]"
									: "text-[#828ba1] hover:bg-[#112240]"
							}`}
							onClick={() => handleClick("Artek Soluciones I.")}
						>
							Artek Soluciones I.
						</p>
					</div>
				</motion.div>

				{selectedOption === "Careexpand" && (
					<motion.div variants={itemVariants} className="h-96 sm:w-[600px]">
						<div>
							<motion.h3 variants={textVariants} className="text-lg font-semibold">
								Frontend Engineer & UI/UX Designer{" "}
								<a href="https://www.careexpand.com/" target="_blank" className="text-[#6aedd9]">
									@ Careexpand
								</a>
							</motion.h3>
							<p className="text-[#828ba1] robotoFont text-sm mb-5">April 2024 - Present</p>

							<div className="flex gap-4 items-start mb-3">
								<img src={arrowRightImg} alt="" />
								<p className="text-[#828ba1]">
									Develop high-quality, scalable, and robust production code for a diverse array of
									complex, telemedicine-related projects, ensuring maintainability, performance, and
									adherence to best practices.
								</p>
							</div>
							<div className="flex gap-4 items-start mb-3">
								<img src={arrowRightImg} alt="" />
								<p className="text-[#828ba1]">
									Design creative, striking, and innovative interfaces for all the front-end engineers
									involved in the projects, ensuring that the designs meet expectations and provide
									the best user experience.
								</p>
							</div>
							<div className="flex gap-4 items-start mb-3">
								<img src={arrowRightImg} alt="" />
								<p className="text-[#828ba1]">
									Deliver high-quality, robust production code for a diverse array of telemedicine
									related projects. Collaborate with the rest of the development team to carry out
									pioneering projects, separating dependencies and responsibilities to achieve the
									goal efficiently, always delivering the best version of the project in production.
								</p>
							</div>
						</div>
					</motion.div>
				)}
				{selectedOption === "Artek Soluciones I." && (
					<motion.div variants={itemVariants} className="h-96 sm:w-[600px]">
						<div>
							<motion.h3 variants={textVariants} className="text-lg font-semibold">
								Fullstack Developer{" "}
								<a href="https://www.artek.es/" target="_blank" className="text-[#6aedd9]">
									@ Artek Soluciones Informaticas
								</a>
							</motion.h3>
							<p className="text-[#828ba1] robotoFont text-sm mb-5">July 2023 - March 2024</p>

							<div className="flex gap-4 items-start mb-3">
								<img src={arrowRightImg} alt="" />
								<p className="text-[#828ba1]">
									Participated in backend development using Laravel and PHP, building API endpoints,
									entities, handlers, and designing the entire structure to ensure optimal
									scalability.
								</p>
							</div>
							<div className="flex gap-4 items-start mb-3">
								<img src={arrowRightImg} alt="" />
								<p className="text-[#828ba1]">
									Contributed to frontend development using Angular, following best practices and the
									latest techniques to create a user-friendly and highly engaging interface.
								</p>
							</div>
							<div className="flex gap-4 items-start mb-3">
								<img src={arrowRightImg} alt="" />
								<p className="text-[#828ba1]">
									Contributed to improving both frontend and backend architecture in collaboration
									with CTOs, not only by developing new features but also by iterating on existing
									code to ensure clean, scalable, and efficient solutions.
								</p>
							</div>
						</div>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
};

export default WorkExperience;
