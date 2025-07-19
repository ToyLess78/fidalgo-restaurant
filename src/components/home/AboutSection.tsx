import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xs uppercase tracking-widest mb-4">Chef's</h3>
            <h2 className="heading-medium mb-6 uppercase">
              Only the finest food & great service
            </h2>
            <p className="text-muted-foreground mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link href="/about" className="btn-primary">
              Read more
            </Link>
          </div>

          <div className="relative">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
                alt="Our Chef"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 bg-background p-4 md:p-6 rounded-sm shadow-lg">
              <Image
                src="/images/hero-bg.jpg"
                alt="Fidalgo signature"
                width={120}
                height={80}
                className="object-contain w-24 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
