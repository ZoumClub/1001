import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Car, Shield, PaintBucket } from "lucide-react";

const SERVICES = [
  {
    icon: <Wrench className="h-12 w-12" />,
    title: "Maintenance",
    description: "Regular maintenance and servicing for all car brands",
  },
  {
    icon: <Car className="h-12 w-12" />,
    title: "Car Inspection",
    description: "Comprehensive vehicle inspection services",
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Insurance",
    description: "Car insurance and protection plans",
  },
  {
    icon: <PaintBucket className="h-12 w-12" />,
    title: "Body Work",
    description: "Professional car painting and body repairs",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.title} className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}