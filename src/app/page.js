"use client";
import Link from "next/link";




export default function Home() {
  return (
    <>
      {/* Hero secction */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            filter: "brightness(0.45)", 
          }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 px-6 animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-red-500 mb-4 animate-slideUp">
            Drive Your Dream Car
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-slideUp delay-200">
            Experience luxury, comfort, and style — wherever your journey takes you.
          </p>
          <Link href="/cars">
            <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-red-600/40 animate-slideUp delay-300">
              Book Now
            </button>
          </Link>
        </div>

        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
      </section>

      

{/* About Section */}
<section
  id="about"
  className="bg-gradient-to-b from-zinc-900 to-black text-gray-200 py-20 px-6 sm:px-12 text-center"
>
  <div className="max-w-6xl mx-auto animate-fadeInUp">
    
    <h2 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-6">
      About Rent-A-Car
    </h2>

    
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
      At <span className="text-red-500 font-semibold">Rent-A-Car</span>, we believe that every journey
      should be as enjoyable as the destination. That’s why we provide vehicles that are
      <span className="text-white font-semibold"> reliable</span>,
      <span className="text-white font-semibold"> comfortable</span>, and
      <span className="text-white font-semibold"> affordable</span> — ensuring you drive with
      confidence and peace of mind.
    </p>



    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-12">
      Whether you’re traveling for business or leisure, our modern fleet and professional team
      are here to make your rental experience smooth, simple, and stress-free.
    </p>





    {/* Services Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
      {/* Service 1 */}
      <div className="bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-red-600/30">
        <h3 className="text-2xl font-bold text-red-500 mb-3">Affordable Rates</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Enjoy premium quality rides without breaking your budget. We offer competitive prices
          tailored for every journey.
        </p>
      </div>

      {/* Service 2 */}
      <div className="bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-red-600/30">
        <h3 className="text-2xl font-bold text-red-500 mb-3">Reliable Vehicles</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Our fleet includes the latest models, regularly maintained to ensure reliability, safety,
          and performance on every trip.
        </p>
      </div>

      {/* Service 3 */}
      <div className="bg-zinc-800/50 hover:bg-zinc-800 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-red-600/30">
        <h3 className="text-2xl font-bold text-red-500 mb-3">24/7 Customer Support</h3>
        <p className="text-gray-300 text-base leading-relaxed">
          Our team is always ready to assist you anytime, anywhere — making your experience smooth
          and worry-free.
        </p>
      </div>
    </div>
  </div>

 
 
</section>


{/* CTA Section */}
<section className="relative py-24 bg-gradient-to-r from-zinc-800 via-zinc-900 to-black text-white text-center overflow-hidden">
  {/* Background image with warm tone overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-25"
    style={{
      backgroundImage: "url('/images/cta-bg.jpg')",
    }}
  ></div>
  <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black/60 to-black/80"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fadeInUp">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-red-500 mb-6 drop-shadow-lg">
      Ready to Hit the Road?
    </h2>
    <p className="text-lg sm:text-xl text-gray-200 mb-10">
      Sign in now and enjoy affordable, reliable rentals — designed for your comfort and convenience.
    </p>

    <Link href="/auth">
      <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-red-600/50 transition-all duration-300 animate-bounce-slow">
        Login Now
      </button>
    </Link>
  </div>

  {/* Subtle red ambient glow effects */}
  <div className="absolute top-16 left-12 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-12 right-16 w-40 h-40 bg-red-700/20 rounded-full blur-3xl"></div>

  {/* Animations */}
  <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 1s ease forwards;
    }

    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    .animate-bounce-slow {
      animation: bounce-slow 2.5s infinite;
    }
  `}</style>
</section>




    </>
  );
}
