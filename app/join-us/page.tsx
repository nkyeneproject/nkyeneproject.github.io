import { SiInstagram, SiFacebook, SiLinkedin } from "react-icons/si";

export default function JoinUsPage() {
	return (
		<main className="md:pt-14 leading-relaxed text-m">
			<section className="max-w-5xl mx-auto px-4 py-14">
				<h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl drop-shadow-lg">
					Join Us
				</h1>

				<p className="mb-6">
					The Nkyene Turtle Project is just getting underway, and every step we
					take is helping shape the future of sea turtle conservation along this
					coastline. This is our first season, and we’re laying the foundations
					for something meaningful. As we learn what works, build local
					connections, and uncover the hidden stories of Ghana’s sea turtles, we
					want to share the experience with you.
				</p>

				<p className="mb-6">Here’s how you can get involved:</p>

				<h2 className="text-3xl font-bold">Follow us & spread the word</h2>
				<p className="mt-4 mb-6">
					Get updates straight from the beach: turtle tracks, night patrols,
					hatchling releases, and day-to-day life as the season unfolds.
				</p>

				<div className="flex gap-6 mt-4 mb-10">
					<a
						href="https://www.instagram.com/nkyene_project/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:opacity-80 transition">
						<SiInstagram className="w-8 h-8 text-foreground" />
					</a>

					<a
						href="https://www.facebook.com/profile.php?id=61578812706898#"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:opacity-80 transition">
						<SiFacebook className="w-8 h-8 text-foreground" />
					</a>
					<a
						href="https://www.linkedin.com/company/the-nkyene-project"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:opacity-80 transition">
						<SiLinkedin className="w-8 h-8 text-foreground" />
					</a>
				</div>

				<p className="mb-6">
					Tell a friend or share our posts as the more people who know about the
					turtles here, the better chance we have to protect them.
				</p>
			</section>

			<section className="bg-teal-2 text-white text-center py-16 px-6">
				<h2 className="text-3xl font-bold">Support our GoFundMe</h2>
				<p className="max-w-5xl mx-auto mt-4 text-lg">
					We urgently need funds to hire local community members to join our
					beach patrols. With only three of us, we cannot cover the coastline or
					properly protect turtles and their nests from poaching. Hiring locally
					strengthens protection efforts and supports our mission to show that
					living turtles bring long-term benefits to the community.
				</p>
				<p className="max-w-5xl mx-auto mt-4 text-lg">
					Our first goal is to employ two ex-poachers. They understand that
					their community gains more from protecting turtles than taking them,
					and their knowledge of the nesting population will help us improve our
					patrols. Since we are asking them to give up a source of income, we
					need to provide a sustainable alternative. Paid patrol work lets them
					use their skills while safeguarding the turtles, and it gives them a
					way to earn money without turning to something illegal.
				</p>
				<a
					href="https://www.gofundme.com/f/help-poachers-become-turtle-protectors"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-4 px-6 py-3 bg-teal-1 text-white font-semibold rounded-lg shadow hover:bg-teal-3 transition-colors">
					Donate on GoFundMe
				</a>
				<p className="max-w-5xl mx-auto mt-4 font-medium">
					This is an important first step in building trust and showing that
					this project is something we are creating together with the community
					Together, we can shape a future where Ghana’s beaches are safe for
					turtles.
				</p>
			</section>

			<section className="max-w-5xl mx-auto px-4 py-14">
				<p>
					This season is just the beginning. However you choose to support us,
					we’re grateful to have you with us.
				</p>
			</section>
		</main>
	);
}
