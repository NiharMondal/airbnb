"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import Slider from "react-slick";
import Container from "../common/container";
import HotelCard from "./hotel-card";
import { Button } from "../ui/button";

type HotelProps = {
	title: string;
};

type CustomArrowsProps = {
	next: () => void;
	prev: () => void;
};

export default function Hotels({ title }: HotelProps) {
	const sliderRef = useRef<Slider | null>(null);

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 1,

		arrows: false, // hide default arrows
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 426,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container className="py-5">
			<div className="flex items-center justify-between">
				<p className="text-xl font-semibold">{title}</p>
				<CustomArrows
					next={() => sliderRef.current?.slickNext()}
					prev={() => sliderRef?.current?.slickPrev()}
				/>
			</div>
			<div className="slider-container mt-3">
				<Slider
					ref={sliderRef}
					{...settings}
					className="overflow-hidden xl:pr-2"
				>
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
					<HotelCard />
				</Slider>
			</div>
		</Container>
	);
}

function CustomArrows({ next, prev }: CustomArrowsProps) {
	return (
		<div className="flex gap-x-2">
			<Button
				onClick={prev}
				variant="outline"
				className="size-8 rounded-full cursor-pointer"
			>
				<ChevronLeft />
			</Button>
			<Button
				onClick={next}
				variant="outline"
				className="size-8 rounded-full cursor-pointer"
			>
				<ChevronRight />
			</Button>
		</div>
	);
}
