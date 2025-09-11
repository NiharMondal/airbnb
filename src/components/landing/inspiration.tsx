"use client";
import React, { useState } from "react";
import Container from "../common/container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Inspiration() {
	const [isActive, setIsActive] = useState("travel");
	return (
		<Container>
			<h4 className="font-semibold text-xl">
				Inspiration for future getaways
			</h4>

			<div className="mt-4 pb-5">
				<div className="flex items-center gap-x-6 border-b">
					<motion.div
						whileTap={{
							scale: 0.95,
							transition: { duration: 0.1, ease: "easeIn" },
						}}
						onClick={() => setIsActive("travel")}
						className={cn(
							" pb-4 border-b cursor-pointer",
							isActive === "travel"
								? "font-semibold border-b-2 border-gray-600"
								: "font-medium text-gray-500"
						)}
					>
						Travel tips & inspiration
					</motion.div>
					<motion.div
						whileTap={{
							scale: 0.95,
							transition: { duration: 0.1, ease: "easeIn" },
						}}
						onClick={() => setIsActive("apartments")}
						className={cn(
							" pb-4 border-b cursor-pointer",
							isActive === "apartments"
								? "font-semibold border-b-2 border-gray-600"
								: "font-medium text-gray-500"
						)}
					>
						Airbnb-friendly apartments
					</motion.div>
				</div>

				<div className="py-5">
					{isActive === "travel" ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
							<Item
								title="Family travel hub"
								subTitle="Tips and inspiration"
							/>
							<Item
								title="Family budget travel"
								subTitle="Get there for less"
							/>
							<Item
								title="Vacation ideas for any budget"
								subTitle="Make it special without making it"
							/>
							<Item
								title="Travel Europe on a budget"
								subTitle="How to take the kids to Europe"
							/>
							<Item
								title="Outdoor adventure"
								subTitle="Explore nature with the family"
							/>
							<Item
								title="Bucket list national parks"
								subTitle="Must-see parks for family travel"
							/>
							<Item
								title="Kid-friendly state parks"
								subTitle="Check out these family-friendly"
							/>
						</div>
					) : (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
							<Item title="Albuquerque" subTitle="New Mexico" />
							<Item title="Atlanta Metro" subTitle="Georgia" />
							<Item title="Augusta" subTitle="Georgia" />
							<Item title="Austin Metro" subTitle="Texas" />
							<Item title="Baton Rouge" subTitle="Louisiana" />
							<Item title="Bentonville" subTitle="Arkansas" />
							<Item title="Birmingham" subTitle="Alabama" />
							<Item title="Augusta" subTitle="Georgia" />
							<Item title="Austin Metro" subTitle="Texas" />
							<Item title="Albuquerque" subTitle="New Mexico" />
							<Item title="Atlanta Metro" subTitle="Georgia" />
							<Item title="Augusta" subTitle="Georgia" />
							<Item title="Austin Metro" subTitle="Texas" />
							<Item title="Baton Rouge" subTitle="Louisiana" />
						</div>
					)}
				</div>
			</div>
		</Container>
	);
}

type ItemProps = {
	title: string;
	subTitle: string;
};
function Item({ title, subTitle }: ItemProps) {
	return (
		<div className="group hover:cursor-pointer">
			<h6 className="font-semibold">{title} </h6>
			<p className="text-gray-500 group-hover:text-gray-800 duration-150">
				{subTitle}
			</p>
		</div>
	);
}
