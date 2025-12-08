"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface NavLink {
	href: string;
	label: string;
}

export default function Navigation() {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	const links: NavLink[] = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/our-turtles", label: "Our Turtles" },
		{ href: "/join-us", label: "Join Us" },
	];

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<nav className="fixed top-2 left-0 w-full z-50">
			<div className="flex justify-center">
				<ul className="hidden md:flex gap-6 py-2 px-6 w-fit mx-auto bg-white rounded-xs">
					{links.map(({ href, label }) => {
						const isActive = pathname === href;
						return (
							<li key={href}>
								<Link
									href={href}
									className={`text-lg font-medium transition-colors duration-200 ${
										isActive
											? "text-teal-4 border-b-2 border-teal-4"
											: "text-teal-1 hover:text-teal-4"
									}`}>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>

				<div ref={menuRef}>
					<button
						onClick={toggleMenu}
						className="md:hidden bg-white rounded-md p-2 shadow-md focus:outline-none absolute right-4 top-2"
						aria-label="Toggle menu">
						<div className="relative w-6 h-6">
							<Bars3Icon
								className={`
														absolute inset-0 w-6 h-6 text-teal-4 transition-all duration-300
														${menuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
													`}
							/>

							<XMarkIcon
								className={`
														absolute inset-0 w-6 h-6 text-teal-4 transition-all duration-300
														${menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
													`}
							/>
						</div>
					</button>

					{menuOpen && (
						<div className="md:hidden absolute top-14 right-4 w-fit bg-white rounded-md rounded-md p-8 shadow-md">
							<ul className="flex gap-10 flex-col items-center">
								{links.map(({ href, label }) => {
									const isActive = pathname === href;
									return (
										<li key={href}>
											<Link
												href={href}
												className={`text-xl font-medium transition-colors duration-200 ${
													isActive
														? "text-teal-4 border-b-2 border-teal-4"
														: "text-teal-1 hover:text-teal-4"
												}`}>
												{label}
											</Link>
										</li>
									);
								})}
							</ul>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
