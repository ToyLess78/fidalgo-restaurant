import Image from "next/image";
import Link from "next/link";

export default function CuisineSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fine Dining Experience"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-xs uppercase tracking-widest mb-4">Cuisine</h3>
            <h2 className="heading-medium mb-6 uppercase">
              Our goals & history
            </h2>
            <p className="text-muted-foreground mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labo et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <Link href="/about" className="btn-primary">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
