"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface CarouselItem {
	title: string;
	copy: string[];
	image: string;
}

interface CarouselItemProps {
	items: CarouselItem[];
}

export const Carousel: React.FC<CarouselItemProps> = ({ items }) => {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");

	const startX = useRef<number | null>(null);
	const threshold = 50; // Minimum swipe distance in pixels

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		startX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (startX.current === null) return;
		const currentX = e.touches[0].clientX;
		const diff = currentX - startX.current;

		if (diff > threshold) {
			prevSlide();
			startX.current = null;
		} else if (diff < -threshold) {
			nextSlide();
			startX.current = null;
		}
	};

	const prevSlide = () => {
		setDirection("left");
		setCurrent((prev) => (prev - 1 + items.length) % items.length);
	};

	const nextSlide = () => {
		setDirection("right");
		setCurrent((prev) => (prev + 1) % items.length);
	};

	return (
		<div
			className="relative bg-teal-3 border p-6 md:p-10 rounded-xl shadow-md text-white overflow-hidden"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}>
			<div
				key={current}
				className={`transition-all duration-500 ${
					direction === "right" ? "animate-slide-left" : "animate-slide-right"
				}`}>
				<div className="flex flex-col md:flex-row gap-6">
					<div className="w-full md:w-80 flex-shrink-0">
						<Image
							src={items[current].image}
							alt="Sea Turtle"
							width={300}
							height={400}
							className="rounded-lg object-cover w-full h-auto"
						/>
					</div>

					<div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4 md:flex-1">
						<h3 className="text-3xl font-headland mb-4">
							{items[current].title}
						</h3>

						{items[current].copy.map((paragraph, idx) => (
							<p className="text-center sm:text-left" key={idx}>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			</div>

			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-0 -translate-y-1/2 px-2 py-2 text-white rounded-r hover:opacity-80 hover:bg-teal-1 cursor-pointer">
				<ChevronLeftIcon className="w-5 h-5" />
			</button>

			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-0 -translate-y-1/2 px-2 py-2 text-white rounded-l hover:bg-teal-1 hover:opacity-80 cursor-pointer">
				<ChevronRightIcon className="w-5 h-5" />
			</button>
		</div>
	);
};
