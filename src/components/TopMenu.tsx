import React from "react";
import { motion } from "framer-motion";
import "./Components.scss";

// IMPORTS OF IMAGES
import lucasLogoImg from "../assets/lucas-logo.svg";

const TopMenu: React.FC = () => {
	const itemVariant = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	};

	const navItems = [
		{ id: "01", text: "About", sectionId: "#about" },
		{ id: "02", text: "Experience", sectionId: "#experience" },
		{ id: "03", text: "Work", sectionId: "#work" },
		{ id: "04", text: "Contact", sectionId: "#contact" },
	];

	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
		e.preventDefault();
		const section = document.querySelector(sectionId);
		if (section) {
			const offset = sectionId === "#about" ? -60 : -61;
			window.scrollTo({
				top: section.getBoundingClientRect().top + window.scrollY + offset,
				behavior: "smooth",
			});
		}
	};

	const transition = {
		type: "spring",
		damping: 40,
		stiffness: 220,
		duration: 0.9,
	};

	return (
		<>
			<div className="bg-[#0c1a30] w-full flex items-center justify-between p-4">
				<motion.img
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ ...transition, delay: 0.9 }}
					whileHover={{
						scale: 1.2,
						rotate: 180,
						transition: { duration: 0.5, ease: "easeOut" },
					}}
					src={lucasLogoImg}
					alt=""
					className="logo__image my-4 mx-6 cursor-pointer"
					width={45}
				/>
				<nav className="robotoFont text-[#c4d1e9] text-xs mx-6">
					<ul className="flex items-center content-center gap-7">
						{navItems.map((item, index) => (
							<motion.li
								key={item.id}
								variants={itemVariant}
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
							>
								<a
									href={item.sectionId}
									className="hover:text-[#6aedd9] transition duration-200"
									onClick={(e) => handleSmoothScroll(e, item.sectionId)}
								>
									<span className="text-[#6aedd9]">{item.id}.</span> {item.text}
								</a>
							</motion.li>
						))}
						<motion.li
							variants={itemVariant}
							initial="hidden"
							animate="visible"
							transition={{ duration: 0.5, delay: 0.5 }}
						>
							<motion.button
								variants={itemVariant}
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.5, delay: 0.1, ease: "linear" }}
								className="relative h-10 w-24 rounded-sm overflow-hidden border border-[#6aedd9] text-[#6aedd9] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#6aedd9] before:duration-300 before:ease-out hover:text-white hover:shadow-[#6aedd9] hover:before:h-32 hover:before:w-32 hover:before:opacity-80"
								onClick={() => window.open("cv-lucas.pdf", "_blank")}
							>
								Resume
							</motion.button>
						</motion.li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default TopMenu;
