"use client";
import { useParams, useRouter } from "next/navigation";

const cars = [
  {
    name: "Toyota Corolla",
    image: "/images/corolla.jpg",
    price: "Rs. 1,200 / hour",
    description:
      "A reliable sedan known for comfort, fuel efficiency, and smooth drive — perfect for city rides and family trips.",
  },
  {
    name: "Honda Civic",
    image: "/images/civic.jpg",
    price: "Rs. 1,500 / hour",
    description:
      "A stylish and powerful car with advanced features and sporty looks — ideal for premium rides.",
  },
  {
    name: "Suzuki Alto",
    image: "/images/alto.jpg",
    price: "Rs. 800 / hour",
    description:
      "Compact and budget-friendly — great for short city commutes with excellent mileage.",
  },
  {
    name: "Kia Sportage",
    image: "/images/sportage.jpg",
    price: "Rs. 2,000 / hour",
    description:
      "A luxurious SUV with powerful performance, spacious interior, and smooth handling.",
  },
  {
    name: "Suzuki Cultus",
    image: "/images/cultus.jpg",
    price: "Rs. 1,000 / hour",
    description:
      "A reliable hatchback perfect for small families — affordable, comfortable, and easy to drive.",
  },
  {
    name: "Mehran",
    image: "/images/mehran.jpg",
    price: "Rs. 700 / hour",
    description:
      "Pakistan’s classic car — affordable, simple, and efficient for basic travel needs.",
  },
  {
    name: "Toyota Prado",
    image: "/images/prado.jpg",
    price: "Rs. 1,600 / hour",
    description:
      "A powerful SUV designed for luxury and long-distance drives with premium comfort.",
  },
  {
    name: "Hyundai Tucson",
    image: "/images/hyundai.jpg",
    price: "Rs. 2,000 / hour",
    description:
      "A modern SUV offering both comfort and performance for your family adventures.",
  },
  {
    name: "Toyota Yaris",
    image: "/images/yaris.jpg",
    price: "Rs. 1,300 / hour",
    description:
      "A stylish and efficient sedan that’s perfect for urban driving and long trips.",
  },
];

export default function CarDetails() {
  const { id } = useParams();
  const router = useRouter();

  const car = cars[id];

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Car not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white py-20 px-6 sm:px-12">
      <button
        onClick={() => router.back()}
        className="text-gray-300 mb-6 hover:text-red-500 transition"
      >
        ← Back
      </button>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <img
          src={car.image}
          alt={car.name}
          className="w-full lg:w-1/2 h-80 object-cover rounded-2xl shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-red-500 mb-4">{car.name}</h1>
          <p className="text-gray-300 mb-6 text-lg">{car.description}</p>
          <p className="text-xl font-semibold text-red-400 mb-6">
            {car.price}
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
