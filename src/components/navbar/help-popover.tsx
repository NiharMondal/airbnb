import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { CircleQuestionMark, Menu } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { imageHelper } from "@/assets/images/images";

export default function HelpPopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="secondary"
					className="rounded-full cursor-pointer  size-10 "
				>
					<Menu />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="px-0">
				<ul className=" w-full *:hover:bg-accent">
					<li className="px-5 py-1 inline-flex items-center gap-x-3 text-base font-light w-full">
						<CircleQuestionMark />
						<span>Help Center</span>
					</li>
					<li className="px-5 py-2 flex items-center gap-x-3 text-base font-light w-full">
						<p className="font-semibold text-sm">
							Become a host <br />
							<span className="text-xs font-light">
								It's easy to start hosting and earn money
							</span>
						</p>
						<Image
							src={imageHelper.helpingWomen}
							height={40}
							width={40}
							alt="helping-woman"
						/>
					</li>

					<li className="px-5 pt-2 border-t pb-1">Refer a host</li>
					<li className="px-5 py-1">Find a co-host</li>

					<li className="px-5 pb-2 border-b pt-1">Gift cards</li>
					<li className="px-5 py-1">Log in or Sign up</li>
				</ul>
			</PopoverContent>
		</Popover>
	);
}
