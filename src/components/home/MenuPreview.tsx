import Link from "next/link";

interface MenuCategoryProps {
  title: string;
  subtitle: string;
  href: string;
  className?: string;
}

function MenuCategory({ title, subtitle, href, className }: MenuCategoryProps) {
  return (
    <Link
      href={href}
      className={`block p-8 border border-border hover:border-primary transition-colors group ${className}`}
    >
      <h3 className="uppercase text-sm tracking-wider text-primary group-hover:text-secondary transition-colors">
        {subtitle}
      </h3>
      <h2 className="text-2xl font-light mt-2 mb-4 uppercase">{title}</h2>
      <div className="flex items-center text-xs uppercase tracking-wider text-muted-foreground">
        <span className="mr-2">View</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3 h-3"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export default function MenuPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-6">
          <MenuCategory
            title="Main Courses"
            subtitle="Menu"
            href="/menu"
            className="flex-1"
          />
          <MenuCategory
            title="Best Offer"
            subtitle="Wine list"
            href="/menu"
            className="flex-1"
          />
          <MenuCategory
            title="Favorites"
            subtitle="Cocktails"
            href="/menu"
            className="flex-1"
          />
        </div>
      </div>
    </section>
  );
}
