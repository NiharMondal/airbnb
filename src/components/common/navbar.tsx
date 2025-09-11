"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Globe, Home, Lightbulb, Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "./logo";
import { CustomModal } from "./custom-modal";

import ChoosingHost from "../navbar/choosing-host";
import HelpPopover from "../navbar/help-popover";
import Image from "next/image";
import { imageHelper } from "@/assets/images/images";
import SecondRow from "../navbar/second-row";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 60) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
				setIsExpanded(false); // reset expansion when top
			}
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isScrolled]);

	const handleSearchClick = () => {
		if (isScrolled) {
			setIsExpanded(true);
		}
		setIsScrolled(false);
	};
	return (
		<header className="sticky top-0 bg-[#fbfbfb] px-5 lg:px-12 z-50 ">
			{/* First row */}
			<div className="flex items-center justify-between h-24">
				{/* Left */}
				<div>
					<Logo />
				</div>

				{/* Middle slot - fixed width so motion is vertical */}
				<div className={`flex justify-center items-center`}>
					<div>
						<AnimatePresence initial={false} mode="wait">
							{/* when NOT scrolled => show original middle content */}
							{!isScrolled && !isExpanded && (
								<motion.div
									key="middleNav"
									variants={{
										initial: {
											opacity: 0,
											y: -10,
										},
										animate: {
											opacity: 1,
											y: 0,

											transition: {
												duration: 0.22,
												ease: "easeInOut",
											},
										},
										exit: {
											opacity: 0,
											y: -10,

											transition: {
												duration: 0.18,
												ease: "easeInOut",
											},
										},
									}}
									initial="initial"
									animate="animate"
									exit="exit"
									className="flex justify-center gap-x-4"
								>
									<Link
										href={"/home"}
										className="inline-flex items-center gap-x-1 text-icon-wrapper"
									>
										<Image
											src={imageHelper.home}
											height={40}
											width={40}
											alt="home"
											className="animate-nav-icon"
										/>
										<span className="">Home</span>
									</Link>
									<Link
										href={"/experiences"}
										className="inline-flex items-center gap-x-1 text-icon-wrapper"
									>
										<Image
											src={imageHelper.experience}
											height={40}
											width={40}
											alt="experience"
											className="animate-nav-icon"
										/>
										<span className="">Experience</span>
									</Link>
									<Link
										href={"/services"}
										className="inline-flex items-center gap-x-1 text-icon-wrapper"
									>
										<Image
											src={imageHelper.service}
											height={40}
											width={40}
											alt="service"
											className="animate-nav-icon"
										/>
										<span className="">Service</span>
									</Link>
								</motion.div>
							)}

							{/* when scrolled => show the moving search (same layoutId used below) */}
							{isScrolled && !isExpanded && (
								<motion.div
									layoutId="centerMover"
									key="compactSearch"
									onClick={handleSearchClick}
									variants={{
										initial: {
											opacity: 0,
											y: 0,
										}, // coming from below
										animate: {
											opacity: 1,
											y: 0,

											transition: {
												duration: 0.22,
												ease: "easeInOut",
											},
										},
										exit: {
											opacity: 0,
											y: 0,

											transition: {
												duration: 0.18,
												ease: "easeInOut",
											},
										}, // exit upward
									}}
									initial="initial"
									animate="animate"
									exit="exit"
									className="flex justify-center"
								>
									<div className="w-full sm:w-sm  bg-white rounded-full h-10 shadow ">
										<div className="flex items-center justify-between divide-x-2 divide-gray-400 text-base font-medium h-full px-3 py-1 cursor-pointer">
											<div className="flex items-center px-2">
												<Image
													src={imageHelper.home}
													width={20}
													height={20}
													alt="home"
												/>
												Anywhere
											</div>
											<div className="flex items-center px-5">
												Anytime
											</div>
											<div className="flex items-center gap-x-4">
												<span>Add guests</span>
												<Button className="size-8 rounded-full">
													<Search />
												</Button>
											</div>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Right */}
				<div className="flex items-center gap-x-3">
					<CustomModal
						trigger={
							<Button
								variant="ghost"
								className="rounded-full px-4 cursor-pointer"
							>
								Became a host
							</Button>
						}
						className="md:max-w-5xl min-h-[500px]"
					>
						<ChoosingHost />
					</CustomModal>

					<CustomModal
						trigger={
							<Button
								variant="secondary"
								className="rounded-full cursor-pointer  size-10 "
							>
								<Globe />
							</Button>
						}
						className="md:max-w-5xl min-h-[500px]"
					>
						<ChoosingHost />
					</CustomModal>

					<HelpPopover />
				</div>
			</div>

			{/* Second row - reserve height so layout won't jump */}
			<SecondRow isScrolled={isScrolled} isExpanded={isExpanded} />
		</header>
	);
}
