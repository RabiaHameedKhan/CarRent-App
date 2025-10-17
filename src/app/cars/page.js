"use client";

const cars = [
  {
    name: "Toyota Corolla",
    image: "/images/corolla.jpg",
    price: "Rs. 1,200 / hour",
  },
  {
    name: "Honda Civic",
    image: "/images/civic.jpg",
    price: "Rs. 1,500 / hour",
  },
  {
    name: "Suzuki Alto",
    image: "/images/alto.jpg",
    price: "Rs. 800 / hour",
  },
  {
    name: "Kia Sportage",
    image: "/images/sportage.jpg",
    price: "Rs. 2,000 / hour",
  },
  {
    name: "Suzuki Cultus",
    image: "/images/cultus.jpg",
    price: "Rs. 1,000 / hour",
  },
   {
    name: "Mehran",
    image: "/images/mehran.jpg",
    price: "Rs. 700 / hour",
  },
   {
    name: "Toyota Prado",
    image: "/images/prado.jpg",
    price: "Rs. 1,600 / hour",
  },
   {
    name: "Hyundai Tucson",
    image: "/images/hyundai.jpg",
    price: "Rs. 2,000 / hour",
  },
  {
    name: "Toyota Yaris",
    image: "/images/yaris.jpg",
    price: "Rs. 1,300 / hour",
  },
];

export default function CarsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white py-20 px-6 sm:px-12">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-red-500 mb-4">
          Our Available Cars
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Reliable, affordable, and comfortable rides — perfect for your daily
          travel, family trips, or weekend getaways.
        </p>
      </div>

      {/* Car Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cars.map((car, index) => (
          <div
            key={index}
            className="relative bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-3 hover:shadow-red-600/40 group"
          >
            {/* Car Image */}
            <div className="overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Car Info */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {car.name}
              </h3>
              <p className="text-lg text-red-500 font-semibold">
                {car.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fade Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        section {
          animation: fadeInUp 1.2s ease forwards;
        }
      `}</style>
    </section>
  );
}
