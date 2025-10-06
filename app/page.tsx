import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <header className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/hatchlings.jpg"
          alt="Sea turtle hatchlings"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl drop-shadow-lg">
            Welcome to the Nkyene Turtle Project
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
            Protecting Ghana’s sea turtles through community-driven conservation
          </p>
        </div>
      </header>

      <section className="max-w-5xl mx-auto py-16 px-6 space-y-6 text-lg leading-relaxed">
        <h2 className="text-3xl font-semibold text-center text-green">
          Join us in safeguarding the turtles along Ghana’s coast
        </h2>
        <p className="text-green text-center max-w-3xl mx-auto">
          This is our very first turtle season, and it’s a season of exploration. 
          We’re here to learn what works, build connections with the community, 
          and figure out how our project can make the greatest impact not only for 
          the turtles but the people, and the coastline we share.
        </p>
      </section>

      <section className="bg-gray-50 w-full">
        <div className="max-w-5xl mx-auto py-16 px-6 space-y-6">
          <h2 className="text-3xl font-semibold text-center text-green">
            Our Focus This Year
          </h2>
          <ul className="list-disc list-inside space-y-4 text-green max-w-3xl mx-auto text-lg">
            <li>
              Collecting vital data on sea turtle activity that is currently lacking in western Africa
            </li>
            <li>
              Building our first hatchery, a safe space where vulnerable nests can be relocated and monitored
            </li>
            <li>
              Assessing the threats to nesting turtles in the area and strengthening relationships with the local communities
            </li>
          </ul>
          <p className="text-center text-green max-w-3xl mx-auto">
            We’re starting small, but dreaming big. And we’d love for you to join us on this journey.
          </p>
        </div>
      </section>

      <section className="bg-teal-2 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold">Support our GoFundMe</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Help us get patrol gear, camera traps, materials for the hatchery, and 
          everything we need to create signs and educational tools for local schools 
          and communities. Every donation goes directly to protecting turtles and 
          building long-term conservation from the ground up.
        </p>
        <a
            href="https://gofund.me/5360a7c0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-teal-1 text-white font-semibold rounded-lg shadow hover:bg-teal-3 transition-colors"
          >
            Donate on GoFundMe
        </a>
        <p className="mt-4 font-medium">
          Together, we can shape a future where Ghana’s beaches are safe for turtles.
        </p>
      </section>

      <section className="max-w-5xl mx-auto py-16 px-6 space-y-4 text-lg text-green">
        <h2 className="text-3xl font-semibold text-center text-green">Contact Us</h2>
        <p className="text-center">Got questions? Want to get involved? We’d love to hear from you.</p>
        <div className="text-center space-y-2">
        <p>
          Email: <a href="mailto:info@nkyeneproject.org" className="text-teal-2 hover:underline">info@nkyeneproject.org</a>
        </p>
        <p>
          Instagram: <a href="https://instagram.com/nkyeneproject" target="_blank" rel="noopener noreferrer" className="text-teal-2 hover:underline">@nkyeneproject</a>
        </p>
        </div>
      </section>
    </main>
  );
}