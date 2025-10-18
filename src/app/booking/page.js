"use client";

import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carModel: "",
    date: "",
    time: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} (${formData.carModel})`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="bg-zinc-800/70 border border-zinc-700 rounded-2xl p-8 sm:p-10 w-full max-w-lg shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-6">
          Book Your Ride
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Car Model</label>
            <input
              type="text"
              name="carModel"
              onChange={handleChange}
              value={formData.carModel}
              placeholder="e.g. Toyota Corolla"
              required
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-1">Date</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={formData.date}
                required
                className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Time</label>
              <input
                type="time"
                name="time"
                onChange={handleChange}
                value={formData.time}
                required
                className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Duration (hours)</label>
            <input
              type="number"
              name="duration"
              onChange={handleChange}
              value={formData.duration}
              min="1"
              required
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-red-600/40"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
