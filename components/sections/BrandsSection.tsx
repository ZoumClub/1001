import Image from 'next/image';
import { Card } from "@/components/ui/card";

const BRANDS = [
  { name: "BMW", logo: "https://www.car-logos.org/wp-content/uploads/2011/09/bmw.png" },
  { name: "Mercedes", logo: "https://www.car-logos.org/wp-content/uploads/2011/09/mercedes.png" },
  { name: "Audi", logo: "https://www.car-logos.org/wp-content/uploads/2011/09/audi.png" },
  { name: "Toyota", logo: "https://www.car-logos.org/wp-content/uploads/2011/09/toyota.png" },
  { name: "Honda", logo: "https://www.car-logos.org/wp-content/uploads/2011/09/honda.png" },
  { name: "Ford", logo: "https://www.car-logos.org/wp-content/uploads/2011/09/ford.png" },
];

export default function BrandsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {BRANDS.map((brand) => (
            <Card 
              key={brand.name}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-center justify-center"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}