

export default function Home() {
  return (
    <>
     

      {/* Hero Section */}
      <section className="h-[90vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-zinc-900 to-black text-white px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-red-500 mb-4">
          Drive Your Dream Car
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
          Experience luxury, comfort, and style — wherever your journey takes you.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-red-600/40">
          Book Now
        </button>
      </section>

    </>
  );
}
