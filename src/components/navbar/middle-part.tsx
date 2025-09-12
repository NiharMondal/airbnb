import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { imageHelper } from "@/assets/images/images";

export default function MiddlePart() {
	return (
		<motion.div
			key="middleNav"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			transition={{ type: "spring", stiffness: 220, damping: 22 }}
			className="flex gap-x-6 lg:pl-7 xl:pl-20"
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
				<span>Home</span>
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
				<span>Experience</span>
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
				<span>Service</span>
			</Link>
		</motion.div>
	);
}
