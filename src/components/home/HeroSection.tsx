import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt="Fidalgo Restaurant"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <h2 className="font-script text-4xl md:text-5xl mb-4 text-primary">
            For the best memories
          </h2>
          <h1 className="heading-large mb-8 text-white uppercase tracking-wider">
            Fidalgo is for everyone who collects beautiful moments
          </h1>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="btn-primary bg-transparent text-white border-white hover:bg-white/10"
            >
              View our menu
            </Link>
            <Link
              href="/book-a-table"
              className="btn-primary bg-secondary text-white border-secondary hover:bg-secondary/90"
            >
              Book a table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}