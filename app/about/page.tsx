import Image from "next/image";
import { Carousel } from "@/components/Carousel";

interface CarouselItem {
	title: string;
	copy: string[];
	image: string;
}

const items: CarouselItem[] = [
	{
		title: "Yankey",
		copy: [
			"Yankey is a devoted guardian of Ghana’s coastline and a deeply respected member of his community. Known for his kindness and steady leadership, he has spent years protecting turtles on his own simply because he felt it was the right thing to do. Beyond the beach, he has built a school for local children, constructed a bridge linking remote villages, and supported families in need, always putting people first. His compassion, local knowledge, and unwavering commitment to both wildlife and community are at the heart of the Nkyene Turtle Project.",
		],
		image: "/yankey.webp",
	},
	{
		title: "Anna",
		copy: [
			"Anna is a conservation biologist whose work is grounded in empathy, curiosity, and a belief that meaningful change happens when people and wildlife are supported together. Her fieldwork has taken her from PIT tagging turtles in Cabo Verde to camera trap studies in Zimbabwe and now to Ghana, where she feels closest to the purpose that first pulled her into conservation. She thrives in hands-on work, connecting with communities, listening to their stories, and building trust through shared goals. For Anna, Nkyene represents the chance to create something honest and lasting, a project built with people she believes in for turtles she loves.",
		],
		image: "/anna.webp",
	},
	{
		title: "Nat",
		copy: [
			"Nat is a marine biologist with a passion for sea turtles and a belief that conservation is ultimately about people and the ways we learn, share, and inspire one another. With years of turtle research and field experience, she brings knowledge, creativity, and a warm, community-focused approach to the project. She sees conservation not as rules or restrictions but as connection, something strengthened through art, food, music, and shared care for the natural world. Nat’s kindness, perspective, and dedication bring depth and heart to the Nkyene Turtle Project.",
		],
		image: "/nat.webp",
	},
];

export default function AboutPage() {
	return (
		<main className="md:pt-14 leading-relaxed text-m">
			<section className="max-w-5xl mx-auto px-4 py-14">
				<h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl drop-shadow-lg">
					About Us
				</h1>
				<div
					className="
							w-full 
							md:w-1/2 
							mx-auto 
							md:mx-0 
							text-center 
							md:text-left 
							mb-6 
							md:mb-0 
							md:ml-6 
							md:float-right
					">
					<Image
						src="/about-us.webp"
						alt="Sea Turtle"
						width={500}
						height={400}
						className="rounded-lg object-cover inline-block"
					/>
				</div>

				<div className="text-m">
					<p className="mb-6">
						The <strong>Nkyene Turtle Project</strong> began with a simple idea:
						that grassroots conservation, led with heart and honesty, could make
						a real difference for sea turtles and coastal communities in Ghana.
					</p>

					<p className="mb-6">
						We’re Anna, Nat, and Yankey — three people brought together by a
						love for turtles, and a shared belief that protecting wildlife works
						best when everyone is part of the story.
					</p>

					<p className="mb-6">
						Anna and Nat first met on Sal Island, Cabo Verde, working long
						nights on turtle patrols. They spent the season protecting nesting
						females, relocating at-risk nests, leading volunteer teams and
						dreaming of building something of their own one day.
					</p>

					<p className="mb-6">
						Months later, Anna travelled to Ghana and met Yankey, who was
						already on a one-man mission to protect turtles along the coast.
						With no outside support, he had been patrolling beaches, rescuing
						hatchlings and saving turtles from poachers simply because he
						believed someone had to. His knowledge of the area, close ties to
						the local community, and deep passion for wildlife brought the
						vision to life. Together, we began to shape what this project could
						become.
					</p>

					<p className="mb-6">
						Our name, Nkyene, means “salt” in Twi, and it holds special meaning
						for us. It’s a nod to Sal Island, where Anna and Nat first met as
						Sal also means “salt” in Portuguese. The word connects our
						beginnings with the coastlines we now work on. In Ghana, many people
						refer to sea turtles as “salt tortoises,” so when it came time to
						name the project, Nkyene felt like the perfect fit.
					</p>

					<p className="mb-6">
						It ties together the people, the places, and the purpose that
						brought this project to life. It honours local language and culture
						while celebrating our shared love for the ocean.
					</p>

					<p className="mb-6">
						This is our first season. We’re starting small, staying curious, and
						learning as we go. Our aim is to protect turtles through hands-on
						conservation, community outreach, education, and by collecting vital
						data in a part of the world where turtle research is still limited.
					</p>

					<p>
						We’re here to listen, to learn, and to build something that lasts.
						And we’d love for you to be part of it.
					</p>
				</div>

				<h2 className="text-4xl font-headland my-6">Meet the Team</h2>

				<Carousel items={items} />
			</section>
		</main>
	);
}
