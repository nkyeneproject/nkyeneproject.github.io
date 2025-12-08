import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-white">
			<header className="relative w-full h-[450px] md:h-[500px] lg:h-[600px]">
				<Image
					src="/turtle-hatchlings.webp"
					alt="Sea turtle hatchlings"
					fill
					className="object-cover brightness-75"
					priority
				/>
				<div className="absolute top-2 left-2 w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36">
					<Image
						src="/logo.jpg"
						alt="Nkyene Turtle Project logo"
						fill
						sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 144px"
						className="rounded-full"
					/>
				</div>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
					<h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl drop-shadow-lg">
						Welcome to the Nkyene Turtle Project
					</h1>
					<p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
						Protecting Ghana’s sea turtles through community-driven conservation
					</p>
				</div>
			</header>

			<section className="max-w-5xl mx-auto py-16 px-6 space-y-6 text-lg leading-relaxed">
				<h2 className="text-3xl font-semibold text-center text-teal-4">
					Join us in safeguarding the turtles along Ghana’s coast
				</h2>
				<p className="text-teal-4 text-center max-w-3xl mx-auto">
					This is our very first turtle season, and it’s a season of
					exploration. We’re here to learn what works, build connections with
					the community, and figure out how our project can make the greatest
					impact not only for the turtles but the people, and the coastline we
					share.
				</p>
			</section>

			<section className="bg-gray-50 w-full">
				<div className="max-w-5xl mx-auto py-16 px-6 space-y-6">
					<h2 className="text-3xl font-semibold text-center text-teal-4">
						Our Focus This Year
					</h2>
					<ul className="list-disc list-inside space-y-4 text-teal-4 max-w-3xl mx-auto text-lg">
						<li>
							Collecting vital data on sea turtle activity that is currently
							lacking in western Africa
						</li>
						<li>
							Building our first hatchery, a safe space where vulnerable nests
							can be relocated and monitored
						</li>
						<li>
							Assessing the threats to nesting turtles in the area and
							strengthening relationships with the local communities
						</li>
					</ul>
					<p className="text-center text-teal-4 max-w-3xl mx-auto">
						We’re starting small, but dreaming big. And we’d love for you to
						join us on this journey.
					</p>
				</div>
			</section>

			<section className="bg-teal-2 text-white text-center py-16 px-6">
				<h2 className="text-3xl font-bold">Support our GoFundMe</h2>
				<p className="mt-4 max-w-2xl mx-auto text-lg">
					The project urgently needs funds to hire local community members for
					beach patrols, as the current team of three cannot adequately protect
					turtles and their nests from poaching. The first priority is to employ
					two ex-poachers, whose experience with nesting sites and commitment to
					conservation will strengthen patrols. Providing them with paid, legal
					work offers a sustainable alternative to poaching, builds trust, and
					demonstrates that the conservation effort is a collaborative
					initiative with the community.
				</p>
				<a
					href="https://www.gofundme.com/f/help-poachers-become-turtle-protectors"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-4 px-6 py-3 bg-teal-1 text-white font-semibold rounded-lg shadow hover:bg-teal-3 transition-colors">
					Donate on GoFundMe
				</a>
				<p className="mt-4 font-medium">
					Together, we can shape a future where Ghana’s beaches are safe for
					turtles.
				</p>
			</section>

			<section className="max-w-5xl mx-auto py-16 px-6 space-y-4 text-lg text-teal-4">
				<h2 className="text-3xl font-semibold text-center text-teal-4">
					Contact Us
				</h2>
				<p className="text-center">
					Got questions? Want to get involved? We’d love to hear from you.
				</p>
				<div className="text-center space-y-2">
					<p>
						Email:{" "}
						<a
							href="mailto:info@nkyeneproject.org"
							className="text-teal-2 hover:underline">
							info@nkyeneproject.org
						</a>
					</p>
					<p>
						Instagram:{" "}
						<a
							href="https://instagram.com/nkyene_project"
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-2 hover:underline">
							@nkyene_project
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}
