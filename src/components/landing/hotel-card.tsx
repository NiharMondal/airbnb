import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { imageHelper } from "@/assets/images/images";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function HotelCard() {
	return (
		<div className=" ring-0 shadow-none border-0 space-y-0">
			<div className="relative rounded-2xl overflow-hidden ">
				<Link href={`/`}>
					<Image
						src={imageHelper.hotelRoom}
						height={400}
						width={200}
						alt="hotel-image"
						className="opacity-80 rounded-2xl h-[180px] w-full"
						loading="lazy"
					/>
				</Link>
				<div className="absolute top-3 left-0 right-0">
					<div className="flex items-center justify-between w-full px-3">
						<span className="bg-[#F0F0EE] text-[#393939] px-3 py-1 text-xs rounded-full font-medium">
							Guests favorite
						</span>
						<Heart
							className="text-[#F0F0EE] hover:scale-105 duration-200"
							fill="#393939"
						/>
					</div>
				</div>
			</div>

			<div className="mt-1">
				<p className="leading-none text-sm font-medium">
					Apartment in Uttara blada a fdafla sfafda
				</p>
				<small className="text-gray-500">$97 for 2 nights</small>
			</div>
		</div>
	);
}
