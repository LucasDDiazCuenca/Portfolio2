import { useRef } from "react";
import { motion, useInView } from "framer-motion";

//IMAGES
import gitHubImg from "../assets/gitHub.svg";
import dspImg from "../assets/images/dps.png";
import CEXImg from "../assets/images/CEX.png";
import isoLinkImg from "../assets/images/isoLink.png";

const SomeThingIBuild = () => {
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

	const isInView1 = useInView(ref1, { once: true });
	const isInView2 = useInView(ref2, { once: true });
	const isInView3 = useInView(ref3, { once: true });

	const transition = {
		type: "spring",
		damping: 12,
		stiffness: 100,
	};

	return (
		<div className="mt-[200px] mb-[200px] 2xl:w-[900px] xl:w-[900px] lg:w-8/12 m-auto px-6 sm:px-0">
			<h2 className="text-3xl font-semibold relative after:content-[''] after:block sm:after:w-5/12 after:w-2/12 after:h-[1px] after:bg-gray-700 after:absolute after:top-1/2 sm:after:left-[calc(41%+0.5rem)] after:left-[calc(94%+0.2rem)] text-[#cdd6f0] mb-12">
				<span className="text-[#6aedd9] robotoFont text-xl sm:mr-5 mr-1">03.</span> Some Things I've Built
			</h2>

			{/* Primer div responsive */}
			<div className="md:hidden mb-20">
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={transition}
				>
					<img src={dspImg} alt="dsp" className="w-full m-auto h-auto rounded-xl mb-4" />

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, ...transition }}
						className="px-6 bg-[#13413637] rounded-md shadow-xl w-full m-auto py-2"
					>
						<h3 className="text-lg font-semibold mb-2 bg-transparent text-[#6aedd9]">
							DSP - Tracking Devices for the Elderly
						</h3>
						<p className="text-[#828ba1] mb-4 bg-transparent">
							DSP is a tracking device for the elderly that allows agents (police, ambulance, etc.) to
							know their location in real time. It is a device that can identify falls, geoFences, vitals,
							and more information for them to be able to provide a better service.
						</p>
						<p className="robotoFont flex flex-wrap gap-2 text-[#6aedd9] bg-transparent">
							<span className="text-[#50b7a7] text-sm bg-transparent">VSC</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">VITE</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">ITERM 2</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">REACT</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">SASS</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Web-Sockets</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">React-LeafLet</span>
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Segundo div responsive */}
			<div className="md:hidden mb-20">
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={transition}
				>
					<img src={CEXImg} alt="cex" className="w-full m-auto h-auto rounded-xl mb-4" />

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, ...transition }}
						className="px-6 bg-[#13413637] rounded-md shadow-xl w-full m-auto py-2"
					>
						<h3 className="text-lg font-semibold mb-2 bg-transparent text-[#6aedd9]">
							CareExpand Platform
						</h3>
						<p className="text-[#828ba1] mb-4 bg-transparent">
							To inspire a healthier world by attracting the users and providers of healthcare services to
							a platform that facilitates the creation and delivery of value-based medicine to everyone.
						</p>
						<p className="robotoFont flex flex-wrap gap-2 text-[#6aedd9] bg-transparent">
							<span className="text-[#50b7a7] text-sm bg-transparent">REACT</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">SASS</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Web-Sockets</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Twilio</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Gpt-API</span>
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Tercer div responsive */}
			<div className="md:hidden mb-20">
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={transition}
				>
					<img src={isoLinkImg} alt="isolink" className="w-full m-auto h-auto rounded-xl mb-4" />

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, ...transition }}
						className="px-6 bg-[#13413637] rounded-md shadow-xl w-full m-auto py-2"
					>
						<h3 className="text-lg font-semibold mb-2 bg-transparent text-[#6aedd9]">
							IsoLink - A 3D Isometric social portal
						</h3>
						<p className="text-[#828ba1] mb-4 bg-transparent">
							DSP is a tracking device for the elderly that allows agents (police, ambulance, etc.) to
							know their location in real time. It is a device that can identify falls, geoFences, vitals,
							and more information for them to be able to provide a better service.
						</p>
						<p className="robotoFont flex flex-wrap gap-2 text-[#6aedd9] bg-transparent">
							<span className="text-[#50b7a7] text-sm bg-transparent">VITE</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">REACT</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Tailwind</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Web-Sockets</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">Three.js</span>
							<span className="text-[#50b7a7] text-sm bg-transparent">React-Three-Fiber</span>
						</p>
						<div className="flex justify-start mt-4 bg-transparent">
							<a href="https://github.com/LucasDDiazCuenca/isolink" target="_blank">
								<motion.img
									src={gitHubImg}
									alt="gitHub"
									width={25}
									initial={{ scale: 1 }}
									whileHover={{ scale: 1.25 }}
									transition={{ duration: 0.3 }}
									className="bg-[#13413637]"
								/>
							</a>
						</div>
					</motion.div>
				</motion.div>
			</div>

			{/* Divs originales (ocultos en móvil) */}
			<div className="hidden md:block">
				{/* Primer div */}
				<div ref={ref1} className="flex gap-5 w-11/12 justify-between relative mb-20">
					<motion.div
						className="w-full max-w-[500px]"
						initial={{ x: -100, opacity: 0 }}
						animate={isInView1 ? { x: 0, opacity: 1 } : {}}
						transition={transition}
					>
						<img
							src={dspImg}
							alt="dsp"
							className="w-full h-auto rounded-xl hover:scale-105 transition-all duration-300"
						/>
					</motion.div>
					<motion.div
						className="absolute text-right bg-transparent w-10/12 top-4 left-[250px] flex flex-col gap-5 items-end"
						initial={{ x: 100, opacity: 0 }}
						animate={isInView1 ? { x: 0, opacity: 1 } : {}}
						transition={transition}
					>
						<p className="robotoFont text-[#6aedd9] bg-transparent text-sm w-fit">Featured Project</p>
						<h3 className="text-lg font-semibold bg-transparent w-fit">
							DSP - Tracking Devices for the Elderly
						</h3>
						<p className="text-[#828ba1] bg-[#132241] px-3 py-8 w-[560px] rounded-md shadow-xl">
							DSP is a tracking device for the elderly that allows agents (police, ambulance, etc.) to
							know their location in real time. It is a device that can identify falls, geoFences, vitals,
							and more information for them to be able to provide a better service.
						</p>
						<p className="robotoFont flex justify-end gap-5 text-[#6aedd9] bg-transparent">
							<span className="text-[#50b7a7] bg-transparent text-sm">VSC</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">VITE</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">ITERM 2</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">REACT</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">SASS</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Web-Sockets</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">React-LeafLet</span>
						</p>
					</motion.div>
				</div>

				{/* Segundo div */}
				<div ref={ref2} className="flex gap-5 w-11/12 justify-between relative mb-10">
					<motion.div
						className="absolute text-right bg-transparent w-10/12 top-4 flex flex-col gap-5 items-start z-50"
						initial={{ x: -100, opacity: 0 }}
						animate={isInView2 ? { x: 0, opacity: 1 } : {}}
						transition={transition}
					>
						<p className="robotoFont text-[#6aedd9] bg-transparent text-sm w-fit">Featured Project</p>
						<h3 className="text-lg font-semibold bg-transparent w-fit">CareExpand Platform</h3>
						<p className="text-[#828ba1] bg-[#132241] px-3 py-8 w-[560px] rounded-md shadow-xl text-left">
							To inspire a healthier world by attracting the users and providers of healthcare services to
							a platform that facilitates the creation and delivery of value-based medicine to everyone.
						</p>
						<p className="robotoFont flex justify-end gap-5 text-[#6aedd9] bg-transparent">
							<span className="text-[#50b7a7] bg-transparent text-sm">REACT</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">SASS</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Web-Sockets</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Twilio</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Gpt-API</span>
						</p>
					</motion.div>

					<motion.div
						className="absolute w-full max-w-[500px] left-[440px]"
						initial={{ x: 100, opacity: 0 }}
						animate={isInView2 ? { x: 0, opacity: 1 } : {}}
						transition={transition}
					>
						<img
							src={CEXImg}
							alt="cex"
							className="w-full h-auto rounded-xl hover:scale-105 transition-all duration-300"
						/>
					</motion.div>
				</div>

				{/* Tercer div */}
				<div ref={ref3} className="flex gap-5 w-11/12 justify-between relative mb-10 mt-[450px]">
					<motion.div
						className="w-full max-w-[500px]"
						initial={{ x: -100, opacity: 0 }}
						animate={isInView3 ? { x: 0, opacity: 1 } : {}}
						transition={transition}
					>
						<img
							src={isoLinkImg}
							alt="isolink"
							className="w-full h-auto rounded-xl hover:scale-105 transition-all duration-300"
						/>
					</motion.div>
					<motion.div
						className="absolute text-right bg-transparent w-10/12 top-4 left-[250px] flex flex-col gap-5 items-end"
						initial={{ x: 100, opacity: 0 }}
						animate={isInView3 ? { x: 0, opacity: 1 } : {}}
						transition={transition}
					>
						<p className="robotoFont text-[#6aedd9] bg-transparent text-sm w-fit">Featured Project</p>
						<h3 className="text-lg font-semibold bg-transparent w-fit">
							IsoLink - A 3D Isometric social portal
						</h3>
						<p className="text-[#828ba1] bg-[#132241] px-3 py-8 w-[560px] rounded-md shadow-xl">
							DSP is a tracking device for the elderly that allows agents (police, ambulance, etc.) to
							know their location in real time. It is a device that can identify falls, geoFences, vitals,
							and more information for them to be able to provide a better service.
						</p>
						<p className="robotoFont flex justify-end gap-5 text-[#6aedd9] bg-transparent">
							<span className="text-[#50b7a7] bg-transparent text-sm">VITE</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">REACT</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Tailwind</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Web-Sockets</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">Three.js</span>
							<span className="text-[#50b7a7] bg-transparent text-sm">React-Three-Fiber</span>
						</p>
						<div className="flex justify-end mt-6 bg-transparent group">
							<a href="https://github.com/LucasDDiazCuenca/isolink" target="_blank">
								<img
									src={gitHubImg}
									alt="gitHub"
									width={25}
									className="hover:scale-125 transition-all duration-300"
								/>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default SomeThingIBuild;
