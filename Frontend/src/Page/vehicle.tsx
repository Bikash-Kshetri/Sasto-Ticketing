import React, { useState, useMemo } from "react";
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

const VehicleCard: React.FC<{ car: CarData }> = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={car.imageSrc}
          alt={`${car.name} car`}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Available
        </span>
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

// Extended vehicle data
const allVehicles: CarData[] = [
  {
    id: 1,
    name: "Mercedes-Benz E-Class",
    seats: 5,
    transmission: "AUTOMATIC",
    fuelType: "PETROL",
    description: "Luxury sedan with premium features and exceptional comfort.",
    price: 2500,
    imageSrc:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    name: "Toyota Camry Hybrid",
    seats: 5,
    transmission: "AUTOMATIC",
    fuelType: "HYBRID",
    description: "Fuel-efficient hybrid sedan perfect for city driving.",
    price: 1800,
    imageSrc:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    name: "BMW 3 Series",
    seats: 5,
    transmission: "AUTOMATIC",
    fuelType: "PETROL",
    description: "Sporty luxury sedan with dynamic performance.",
    price: 2200,
    imageSrc:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    name: "Mahindra Thar",
    seats: 5,
    transmission: "MANUAL",
    fuelType: "PETROL",
    description: "Rugged off-road SUV perfect for adventure trips.",
    price: 2000,
    imageSrc:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400&h=250&fit=crop",
  },
  {
    id: 5,
    name: "Toyota Supra",
    seats: 2,
    transmission: "MANUAL",
    fuelType: "PETROL",
    description: "High-performance sports car for thrill seekers.",
    price: 3500,
    imageSrc:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400&h=250&fit=crop",
  },
  {
    id: 6,
    name: "Honda CR-V",
    seats: 5,
    transmission: "AUTOMATIC",
    fuelType: "PETROL",
    description: "Reliable SUV with spacious interior and great fuel economy.",
    price: 1900,
    imageSrc:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=250&fit=crop",
  },
  {
    id: 7,
    name: "Toyota Innova",
    seats: 7,
    transmission: "MANUAL",
    fuelType: "DIESEL",
    description: "Spacious MPV ideal for family trips and group travel.",
    price: 2100,
    imageSrc:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop",
  },
  {
    id: 8,
    name: "Tesla Model 3",
    seats: 5,
    transmission: "AUTOMATIC",
    fuelType: "ELECTRIC",
    description: "Modern electric vehicle with cutting-edge technology.",
    price: 3000,
    imageSrc:
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=250&fit=crop",
  },
  {
    id: 9,
    name: "Ford Mustang",
    seats: 4,
    transmission: "MANUAL",
    fuelType: "PETROL",
    description: "Iconic American muscle car with powerful performance.",
    price: 3200,
    imageSrc:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0ad6?w=400&h=250&fit=crop",
  },
];

const Vehicle: React.FC = () => {
  const maxPrice = Math.max(...allVehicles.map((v) => v.price));
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [selectedTransmission, setSelectedTransmission] =
    useState<string>("all");
  const [selectedFuelType, setSelectedFuelType] = useState<string>("all");
  const [selectedSeats, setSelectedSeats] = useState<string>("all");

  // Filter vehicles based on all criteria
  const filteredVehicles = useMemo(() => {
    return allVehicles.filter((vehicle) => {
      const matchesSearch = vehicle.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice =
        vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
      const matchesTransmission =
        selectedTransmission === "all" ||
        vehicle.transmission === selectedTransmission;
      const matchesFuelType =
        selectedFuelType === "all" || vehicle.fuelType === selectedFuelType;
      const matchesSeats =
        selectedSeats === "all" || vehicle.seats.toString() === selectedSeats;

      return (
        matchesSearch &&
        matchesPrice &&
        matchesTransmission &&
        matchesFuelType &&
        matchesSeats
      );
    });
  }, [
    searchTerm,
    priceRange,
    selectedTransmission,
    selectedFuelType,
    selectedSeats,
  ]);

  const resetFilters = () => {
    setSearchTerm("");
    setPriceRange([0, maxPrice]);
    setSelectedTransmission("all");
    setSelectedFuelType("all");
    setSelectedSeats("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-customDark text-customWhite pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
            Our Vehicle Fleet
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Choose from our wide selection of premium vehicles
          </p>
        </div>
      </section>

      {/* Filters and Vehicles Section */}
      <section className="py-8 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search vehicles by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customAccent focus:border-transparent outline-none"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                  <button
                    onClick={resetFilters}
                    className="text-sm text-customAccent hover:underline"
                  >
                    Reset
                  </button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Price Range: Rs.{priceRange[0]} - Rs.{priceRange[1]}/day
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Rs.0</span>
                    <span>Rs.{maxPrice}</span>
                  </div>
                </div>

                {/* Transmission Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Transmission
                  </label>
                  <select
                    value={selectedTransmission}
                    onChange={(e) => setSelectedTransmission(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customAccent focus:border-transparent outline-none"
                  >
                    <option value="all">All Types</option>
                    <option value="MANUAL">Manual</option>
                    <option value="AUTOMATIC">Automatic</option>
                  </select>
                </div>

                {/* Fuel Type Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Fuel Type
                  </label>
                  <select
                    value={selectedFuelType}
                    onChange={(e) => setSelectedFuelType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customAccent focus:border-transparent outline-none"
                  >
                    <option value="all">All Types</option>
                    <option value="PETROL">Petrol</option>
                    <option value="DIESEL">Diesel</option>
                    <option value="HYBRID">Hybrid</option>
                    <option value="ELECTRIC">Electric</option>
                  </select>
                </div>

                {/* Seats Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Number of Seats
                  </label>
                  <select
                    value={selectedSeats}
                    onChange={(e) => setSelectedSeats(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-customAccent focus:border-transparent outline-none"
                  >
                    <option value="all">All</option>
                    <option value="2">2 Seats</option>
                    <option value="4">4 Seats</option>
                    <option value="5">5 Seats</option>
                    <option value="6">6 Seats</option>
                    <option value="7">7 Seats</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Vehicles Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {filteredVehicles.length} Vehicle
                  {filteredVehicles.length !== 1 ? "s" : ""} Found
                </h2>
              </div>

              {filteredVehicles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredVehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} car={vehicle} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No vehicles found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters to see more results.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="text-customAccent hover:underline font-medium"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vehicle;
