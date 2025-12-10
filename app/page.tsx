import Image from "next/image";
import content from "@/content/homepage.json";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-white">
			<header className="relative w-full h-[450px] md:h-[500px] lg:h-[600px]">
				<Image
					src={content.hero.backgroundImage.src}
					alt={content.hero.backgroundImage.alt}
					fill
					className="object-cover brightness-75"
					priority
				/>
				<div className="absolute top-2 left-2 w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36">
					<Image
						src={content.hero.logoImage.src}
						alt={content.hero.logoImage.alt}
						fill
						sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 144px"
						className="rounded-full"
					/>
				</div>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
					<h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl drop-shadow-lg">
						{content.hero.title}
					</h1>
					<p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
						{content.hero.subtitle}
					</p>
				</div>
			</header>

			<section className="max-w-5xl mx-auto py-16 px-6 space-y-6 text-lg leading-relaxed">
				<h2 className="text-3xl font-semibold text-center text-teal-4">
					{content.introSection.title}
				</h2>
				<p className="text-teal-4 text-center max-w-3xl mx-auto">
					{content.introSection.body}
				</p>
			</section>

			<section className="bg-gray-50 w-full">
				<div className="max-w-5xl mx-auto py-16 px-6 space-y-6">
					<h2 className="text-3xl font-semibold text-center text-teal-4">
						{content.focusSection.title}
					</h2>
					<ul className="list-disc list-inside space-y-4 text-teal-4 max-w-3xl mx-auto text-lg">
						{content.focusSection.items.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p className="text-center text-teal-4 max-w-3xl mx-auto">
						{content.focusSection.footer}
					</p>
				</div>
			</section>

			<section className="bg-teal-2 text-white text-center py-16 px-6">
				<h2 className="text-3xl font-bold">{content.donateSection.title}</h2>
				<p className="mt-4 max-w-2xl mx-auto text-lg">
					{content.donateSection.body}
				</p>
				<a
					href={content.donateSection.donateButton.url}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-4 px-6 py-3 bg-teal-1 text-white font-semibold rounded-lg shadow hover:bg-teal-3 transition-colors">
					{content.donateSection.donateButton.text}
				</a>
				<p className="mt-4 font-medium">{content.donateSection.footer}</p>
			</section>

			<section className="max-w-5xl mx-auto py-16 px-6 space-y-4 text-lg text-teal-4">
				<h2 className="text-3xl font-semibold text-center text-teal-4">
					{content.contactSection.title}
				</h2>
				<p className="text-center">{content.contactSection.body}</p>
				<div className="text-center space-y-2">
					<p>
						{content.contactSection.email.text}
						<a
							href={content.contactSection.email.href}
							className="text-teal-2 hover:underline">
							{content.contactSection.email.label}
						</a>
					</p>
					<p>
						{content.contactSection.instagram.text}
						<a
							href={content.contactSection.instagram.href}
							target="_blank"
							rel="noopener noreferrer"
							className="text-teal-2 hover:underline">
							{content.contactSection.instagram.label}
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}
