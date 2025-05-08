import Image from "next/image";

// Menu data structure
const menuData = {
  appetizers: [
    {
      title: "Cheesy Garlic Bread",
      description: "Red onion marmelade, garlic foccacia bread, grilled figs",
      price: "$59",
    },
    {
      title: "Combination Platter",
      description: "Calamari, stuffed mushroom caps, clams casino, and bruschetta",
      price: "$78",
    },
    {
      title: "Antipasto",
      description: "Chef's selection of seasonal meats, cheeses and accoutrements",
      price: "$80",
    },
    {
      title: "Mushroom Caps",
      description: "Mushrooms stuffed with a Ritz cracker and vegetable stuffing",
      price: "$55",
    },
  ],
  mainCourses: [
    {
      title: "Herbed Lamb Steaks",
      description: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
      price: "$89",
    },
    {
      title: "Tartare De Boeuf",
      description: "Hand cut 100% beef steak tartar with french baguette",
      price: "$90",
    },
    {
      title: "Classic Cesar Salad",
      description: "Cold iceberg salad with avocado and fresh aromatic herbs",
      price: "$60",
    },
    {
      title: "Dumplings",
      description: "Homemade beef soup with dumplings",
      price: "$76",
    },
    {
      title: "Foie Gras",
      description: "Foie gras terrine served with homemade toasted brioche",
      price: "$63",
    },
  ],
  desserts: [
    {
      title: "Chocolate Divine",
      description: "Chocolate brownie, Venetian chocolate ice cream, chocolate syrup, bananas & whipped cream",
      price: "$36",
    },
    {
      title: "Apple Caramel Crumble",
      description: "Warm apple & cinnamon bark compote over French vanilla ice cream",
      price: "$41",
    },
    {
      title: "Blueberry Shortcake",
      description: "Cheesecake bites and wild blueberry compote over French vanilla ice cream",
      price: "$33",
    },
    {
      title: "Carrot Cake",
      description: "Covered in butter cream icing and topped with walnuts",
      price: "$35",
    },
  ],
  drinks: [
    {
      title: "Breakbeet",
      description: "Russian standard platinum vodka, raspberry & beetroot cordial, lemon, spicy ginger beer",
      price: "$32",
    },
    {
      title: "Japanese Fizz",
      description: "Lemongrass infused russian standard platinum vodka, lime, jasmin green tea & matcha soda",
      price: "$26",
    },
    {
      title: "Sgroppino",
      description: "Italicus rosolio di bergamotto, lemon sorbet, prosecco carpe noctem",
      price: "$37",
    },
    {
      title: "Mango Dusk",
      description: "Lemongrass infused russian standard platinum vodka, lime, jasmin green tea & matcha soda",
      price: "$37",
    },
  ],
};

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
}

function MenuItem({ title, description, price }: MenuItemProps) {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-start">
        <h3 className="menu-item-title">{title}</h3>
        <span className="menu-item-price ml-4">{price}</span>
      </div>
      <p className="menu-item-description">{description}</p>
    </div>
  );
}

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
  imageSrc?: string;
}

function MenuSection({ title, items, imageSrc }: MenuSectionProps) {
  return (
    <section className="py-16">
      <h2 className="menu-section-title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-6">
          {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
            <MenuItem key={`${title}-${index}-1`} {...item} />
          ))}
        </div>
        <div className="space-y-6">
          {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
            <MenuItem key={`${title}-${index}-2`} {...item} />
          ))}
          {imageSrc && (
            <div className="relative h-60 mt-8 rounded-sm overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <div className="relative bg-muted h-60 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/menu-1.jpg"
            alt="Menu Banner"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-light uppercase mb-2">Our Menu</h1>
          <p className="text-sm uppercase tracking-widest">À la carte menu</p>
        </div>
      </div>

      <div className="container-custom">
        <MenuSection
          title="Appetizers"
          items={menuData.appetizers}
          imageSrc="/images/menu/appetizer.jpg"
        />
        <MenuSection
          title="Main Courses"
          items={menuData.mainCourses}
        />
        <MenuSection
          title="Desserts"
          items={menuData.desserts}
          imageSrc="/images/menu/dessert.jpg"
        />
        <MenuSection
          title="Drinks"
          items={menuData.drinks}
        />
      </div>
    </>
  );
}
