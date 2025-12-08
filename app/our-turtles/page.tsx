import Image from "next/image";

export default function OurTurtlesPage() {
	return (
		<main className="md:pt-14 leading-relaxed text-m">
			<section className="max-w-5xl mx-auto px-4 py-14">
				<h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl drop-shadow-lg">
					Our Turtles
				</h1>

				<p className="mb-6">
					We believe three species of sea turtle nest along this coastline:
					olive ridley, green, and leatherback. As our first nesting season
					begins, we’ll confirm which ones are using these beaches and gather
					much-needed data about their nesting habits and conservation needs.
					Each species plays a unique role in the ecosystem, shaped by what they
					eat and where they live.
				</p>

				<div className="mb-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
						<h2 className="text-2xl mb-2 md:col-start-2 md:row-start-1">
							Olive Ridley Turtle{" "}
							<span className="italic text-lg">(Lepidochelys olivacea)</span>
						</h2>

						<div className="md:col-start-1 md:row-start-1 relative w-full group">
							<Image
								src="/adult-oliveridley.webp"
								alt="Adult Olive Ridley Turtle"
								width={400}
								height={300}
								className="rounded-lg object-cover w-full transition-opacity duration-300 group-hover:opacity-0"
							/>
							<Image
								src="/hatchling-oliveridley.webp"
								alt="Hatchling Olive Ridley Turtle"
								width={400}
								height={300}
								className="absolute inset-0 rounded-lg object-cover w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</div>

						<p className="md:col-start-2 md:row-start-1 md:mt-14">
							Olive ridleys are the smallest sea turtles nesting along this
							coast, measuring 0.6–0.7 m and weighing 36–45 kg. Named for their
							olive-green shells, they are omnivorous, feeding on crabs,
							jellyfish, shrimp, algae, and seagrass in coastal and open ocean
							waters. Olive ridleys play a crucial role in maintaining healthy
							marine ecosystems by controlling jellyfish and invertebrate
							populations.
						</p>
					</div>
				</div>

				<div className="mb-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
						<h2 className="text-2xl mb-2 md:col-start-1 md:row-start-1">
							Green Turtle{" "}
							<span className="italic text-lg">(Chelonia mydas)</span>
						</h2>

						<div className="md:col-start-2 md:row-start-1 relative w-full group">
							<Image
								src="/adult-green.webp"
								alt="Adult Green Turtle"
								width={400}
								height={300}
								className="rounded-lg object-cover w-full transition-opacity duration-300 group-hover:opacity-0"
							/>
							<Image
								src="/hatchling-green.webp"
								alt="Hatchling Green Turtle"
								width={400}
								height={300}
								className="absolute inset-0 rounded-lg object-cover w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</div>

						<div className="md:col-start-1 md:row-start-1 md:mt-14">
							<p className="mb-4">
								Green turtles are named not for the color of their shell, but
								for the greenish fat under their skin, a result of their
								herbivorous diet. Adults feed mostly on seagrass and algae,
								while juveniles may also eat small animals like jellyfish or
								sponges before shifting fully to vegetation. They measure
								0.9–1.5 m and weigh 110–190 kg. By grazing on seagrass beds,
								green turtles help keep these vital ecosystems healthy. Seagrass
								areas serve as nurseries for many fish species and act as
								natural carbon sinks, making them important for both
								biodiversity and climate resilience. Without grazing, seagrass
								can become overgrown and less productive.
							</p>
						</div>
					</div>
				</div>

				<div className="mb-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
						<h2 className="text-2xl mb-2 md:col-start-2 md:row-start-1">
							Leatherback Turtle{" "}
							<span className="italic text-lg">(Lepidochelys olivacea)</span>
						</h2>

						<div className="md:col-start-1 md:row-start-1 relative w-full group">
							<Image
								src="/adult-leatherback.webp"
								alt="Adult Leatherback Turtle"
								width={400}
								height={300}
								className="rounded-lg object-cover w-full transition-opacity duration-300 group-hover:opacity-0"
							/>
							<Image
								src="/hatchling-leatherback.webp"
								alt="Hatchling Leatherback Turtle"
								width={400}
								height={300}
								className="absolute inset-0 rounded-lg object-cover w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							/>
						</div>

						<div className="md:col-start-2 md:row-start-1 md:mt-14">
							<p className="mb-4">
								Leatherbacks are the largest and most wide-ranging of all sea
								turtles, measuring 1.2–2.4 m and weighing up to 900 kg. Instead
								of a hard shell (carapace), they have thick, leathery skin that
								allows them to dive to great depths and travel across entire
								oceans.
							</p>
							<p>
								Leatherbacks feed almost entirely on jellyfish, playing a
								critical role in controlling jellyfish populations. An
								overabundance of jellyfish can disrupt fish stocks and create
								challenges for fisheries, so leatherbacks are essential in
								keeping the balance. However, their diet also makes them highly
								vulnerable to plastic pollution.
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-teal-2 text-white text-center py-14 px-6">
				<div className="max-w-4xl lg:max-w-6xl mx-auto px-4 py-14">
					<p>
						We’re excited to begin our first nesting season and find out exactly
						who is visiting these beaches. By patrolling regularly, monitoring
						nests, and collecting detailed data, we hope to build a clearer
						picture of sea turtle activity in this area.
					</p>
					<p className="mt-4">
						Each turtle sighting will help us understand what species are using
						this coastline, when they arrive, and how best to protect them in
						the years to come. And by sharing what we learn with the local
						community and the wider world, we can help create pride, awareness,
						and long-term change.
					</p>
					<p className="mt-4">
						This season is about discovery. We’re not just here to protect
						what’s already known — we’re here to uncover what’s still hidden and
						give it a future.
					</p>
				</div>
			</div>
		</main>
	);
}
