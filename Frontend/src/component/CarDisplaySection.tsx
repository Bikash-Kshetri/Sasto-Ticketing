import React from "react";
import { useNavigate } from "react-router-dom";

interface CarData {
  id: number;
  name: string;
  seats: number;
  transmission: string;
  fuelType: string;
  description: string;
  price: number;
  imageSrc: string;
}

const CarCard: React.FC<{ car: CarData }> = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={car.imageSrc}
          alt={`${car.name} car`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 hover:opacity-100 transition-opacity">
          <button className="text-white text-2xl bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50">
            &lt;
          </button>
          <button className="text-white text-2xl bg-black bg-opacity-30 rounded-full p-2 hover:bg-opacity-50">
            &gt;
          </button>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-4 space-x-3 sm:space-x-4 flex-wrap gap-2">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            {car.seats} Seats
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            {car.transmission}
          </span>
          <span className="flex items-center">
            {car.fuelType === "HYBRID" ? (
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
              </svg>
            )}
            {car.fuelType}
          </span>
        </div>
        <p className="text-gray-700 mb-4 text-sm line-clamp-2">
          {car.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-red-500">
            Rs.{car.price}
            <span className="text-base font-normal text-gray-600">/day</span>
          </p>
          <button
            onClick={() => navigate(`/vehicles/${car.id}`)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 sm:px-6 rounded transition-colors duration-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const CarDisplaySection: React.FC = () => {
  const carData: CarData[] = [
    {
      id: 1,
      name: "Deleniti incidunt i",
      seats: 6,
      transmission: "MANUAL",
      fuelType: "HYBRID",
      description: "Alias alias perferen",
      price: 848,
      imageSrc:
        "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      name: "Thar",
      seats: 5,
      transmission: "MANUAL",
      fuelType: "PETROL",
      description:
        "The BMW M4 Competition is a high-performance sports car that combines luxury with raw power.",
      price: 200,
      imageSrc:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      name: "Supra",
      seats: 2,
      transmission: "MANUAL",
      fuelType: "PETROL",
      description:
        "The BMW M4 Competition is a high-performance sports car that combines luxury with raw power.",
      price: 200,
      imageSrc:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400&h=250&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full lg:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {carData.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarDisplaySection;
