import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

interface InstagramImageProps {
  src: string;
  alt: string;
  id: string;
}

function InstagramImage({ src, alt }: InstagramImageProps) {
  return (
    <Link
      href="https://instagram.com"
      target="_blank"
      className="relative aspect-square group overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <Instagram className="w-8 h-8 text-white" />
      </div>
    </Link>
  );
}

export default function InstagramSection() {
  // In a real app, these would be fetched from an API or CMS
  const instagramImages = [
    { id: "img1", src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", alt: "Delicious dish" },
    { id: "img2", src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg", alt: "Restaurant atmosphere" },
    { id: "img3", src: "https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg", alt: "Chef creation" },
    { id: "img4", src: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg", alt: "Restaurant interior" },
    { id: "img5", src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg", alt: "Special menu" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        <h2 className="section-heading">Instagram</h2>
        <p className="text-center text-muted-foreground mb-10">
          Inspired by you, always_#restaurante
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instagramImages.map((image) => (
            <InstagramImage key={image.id} src={image.src} alt={image.alt} id={image.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
