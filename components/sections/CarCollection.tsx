"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/cars/CarCard";
import { Car } from "@/types/car";

const DUMMY_CARS: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz C-Class",
    price: "45,000",
    savings: "5,000",
    type: "new",
    images: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617650728444-c1b89e64c084?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    video: "https://www.youtube.com/embed/example",
    specs: {
      mileage: 0,
      transmission: "Automatic",
      fuelType: "Petrol",
      year: 2024,
    },
    features: [
      "Air Conditioning",
      "Electric Windows",
      "Leather Seats",
      "Navigation System",
      "Parking Sensors",
      "Bluetooth",
      "Climate Control",
      "Cruise Control",
    ],
    dealer: {
      name: "Premium Motors",
      phone: "+1234567890",
      whatsapp: "1234567890"
    }
  },
  {
    id: 2,
    name: "BMW 3 Series",
    price: "35,000",
    type: "used",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      mileage: 45000,
      transmission: "Automatic",
      fuelType: "Diesel",
      year: 2022,
    },
    features: [
      "Air Conditioning",
      "Electric Windows",
      "Leather Seats",
      "Navigation System",
      "Parking Sensors",
      "Bluetooth",
    ],
    dealer: {
      name: "AutoMax Dealers",
      phone: "+1234567890",
      whatsapp: "1234567890"
    }
  },
];

export default function CarCollection() {
  const [filter, setFilter] = useState("all");

  const filteredCars = DUMMY_CARS.filter(
    car => filter === "all" || car.type === filter
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Browse Our Collection</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Cars
          </Button>
          <Button 
            variant={filter === "new" ? "default" : "outline"}
            onClick={() => setFilter("new")}
          >
            New Cars
          </Button>
          <Button 
            variant={filter === "used" ? "default" : "outline"}
            onClick={() => setFilter("used")}
          >
            Used Cars
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}