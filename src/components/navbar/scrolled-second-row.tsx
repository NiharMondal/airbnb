import { imageHelper } from "@/assets/images/images";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrolledSecondRow() {
	return (
		<div className=" shadow-md rounded-full pl-2 py-1 pr-1 flex items-center justify-between bg-white text-sm font-semibold w-sm cursor-pointer">
			<div className="flex items-center gap-x-1">
				<Image
					src={imageHelper.home}
					height={20}
					width={20}
					alt="home-icon"
				/>
				<span>Anywhere</span>
			</div>
			<span className="px-4 border-x-2"> Anytime</span>
			<div className="flex items-center gap-x-2">
				<span>Add guests</span>
				<Button className="size-10 rounded-full">
					<Search />
				</Button>
			</div>
		</div>
	);
}
