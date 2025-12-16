import { FaPlaneDeparture } from "react-icons/fa";

export default function BrowsePlaneTicketSection() {
  return (
    <div className="w-full py-14 flex flex-col items-center text-center bg-white">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
        Browse Plane Ticket
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        Discover affordable flights, compare airlines, and book your perfect
        journey with Skyline Travels & Tours.
      </p>

      {/* Button */}
      <button
        className="mt-7 flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 
        to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white text-lg 
        font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <FaPlaneDeparture className="text-2xl" />
        Browse Tickets
      </button>
    </div>
  );
}
