import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="relative bg-muted h-60 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
            alt="About Fidalgo"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-light uppercase mb-2">About Us</h1>
          <p className="text-sm uppercase tracking-widest">Our story and philosophy</p>
        </div>
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">Our Story</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-6">A Passion for Excellence</h3>
            <p className="text-muted-foreground mb-8">
              Founded in 2010, Fidalgo began as a small family bistro with a vision to create
              memorable dining experiences that celebrate the rich culinary traditions of Italy.
              Over the years, we have grown into one of the most respected restaurants in the region,
              known for our commitment to exceptional food, warm hospitality, and elegant atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
                alt="Our Chef"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-4">Our Philosophy</h3>
              <h2 className="heading-medium mb-6">
                Only the finest ingredients
              </h2>
              <p className="text-muted-foreground mb-6">
                At Fidalgo, we believe that exceptional cuisine begins with the finest ingredients.
                We source only the best seasonal produce, premium meats, and freshest seafood from trusted
                local suppliers and international specialists.
              </p>
              <p className="text-muted-foreground mb-6">
                Our talented chefs transform these ingredients into culinary masterpieces that honor traditional
                techniques while embracing contemporary innovation.
              </p>
              <Link href="/menu" className="btn-primary">
                View our menu
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xs uppercase tracking-widest mb-4">The Atmosphere</h3>
              <h2 className="heading-medium mb-6">
                An elegant dining experience
              </h2>
              <p className="text-muted-foreground mb-6">
                Step into Fidalgo and enter a world of refined elegance and warm hospitality.
                Our restaurant combines timeless design with contemporary touches to create a
                sophisticated yet comfortable setting for your dining experience.
              </p>
              <p className="text-muted-foreground mb-6">
                From intimate dinners to special celebrations, our attentive staff ensures that
                every moment at Fidalgo is memorable.
              </p>
              <Link href="/book-a-table" className="btn-primary">
                Book a table
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] md:h-[500px]">
              <Image
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
                alt="Our Restaurant"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="section-heading">Meet Our Team</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-6">The Talent Behind Fidalgo</h3>
            <p className="text-muted-foreground mb-12">
              Our dedicated team of professionals is the heart and soul of Fidalgo.
              From our innovative chefs to our attentive service staff, each member brings
              passion, expertise, and a commitment to excellence to create an unforgettable dining experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative h-80 mb-4 rounded-sm overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg"
                    alt="Executive Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-medium mb-1">Marco Rossi</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Executive Chef</p>
                <p className="text-sm text-muted-foreground">
                  With over 20 years of experience in renowned kitchens across Europe,
                  Chef Marco brings a wealth of culinary expertise and innovation to Fidalgo.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-80 mb-4 rounded-sm overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                    alt="Pastry Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-medium mb-1">Sophie Laurent</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Pastry Chef</p>
                <p className="text-sm text-muted-foreground">
                  A master of sweet creations, Sophie combines classical techniques with contemporary
                  artistry to craft our exquisite dessert menu.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-80 mb-4 rounded-sm overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
                    alt="Restaurant Manager"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-medium mb-1">Alessandro Bianchi</h4>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Restaurant Manager</p>
                <p className="text-sm text-muted-foreground">
                  With an eye for detail and a passion for hospitality, Alessandro ensures
                  that every aspect of your dining experience exceeds expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/book-a-table" className="btn-primary bg-secondary text-white border-secondary hover:bg-secondary/90">
              Reserve Your Table
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
