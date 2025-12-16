import { useNavigate } from "react-router-dom";
import {
  Plane,
  Hotel,
  UtensilsCrossed,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

interface PackageFeature {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface TravelPackage {
  id: number;
  name: string;
  destination: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  features: PackageFeature[];
  description: string;
  includes: {
    room: string;
    flight: string;
    services: string[];
  };
}

const packages: TravelPackage[] = [
  {
    id: 1,
    name: "Everest Base Camp Trek",
    destination: "Nepal - Everest Region",
    duration: "14 Days / 13 Nights",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    description:
      "Experience the ultimate adventure trekking to the base of the world's highest mountain.",
    features: [
      { icon: Hotel, text: "3-Star Hotel in Kathmandu" },
      { icon: Plane, text: "Round-trip Flight Tickets" },
      { icon: UtensilsCrossed, text: "All Meals Included" },
    ],
    includes: {
      room: "Twin sharing accommodation in tea houses",
      flight: "Kathmandu - Lukla - Kathmandu",
      services: [
        "Experienced guide & porter",
        "Trekking permits",
        "Airport transfers",
        "Medical kit",
      ],
    },
  },
  {
    id: 2,
    name: "Bhutan Cultural Tour",
    destination: "Bhutan - Thimphu & Paro",
    duration: "7 Days / 6 Nights",
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
    description:
      "Discover the mystical kingdom of Bhutan with its rich culture and stunning landscapes.",
    features: [
      { icon: Hotel, text: "4-Star Hotels" },
      { icon: Plane, text: "International Flight" },
      { icon: UtensilsCrossed, text: "Breakfast & Dinner" },
    ],
    includes: {
      room: "Deluxe hotel rooms with mountain views",
      flight: "Kathmandu - Paro - Kathmandu",
      services: [
        "Licensed Bhutanese guide",
        "All entry fees & permits",
        "Private transportation",
        "Cultural shows",
      ],
    },
  },
  {
    id: 3,
    name: "Thailand Beach Paradise",
    destination: "Thailand - Phuket & Bangkok",
    duration: "8 Days / 7 Nights",
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    description:
      "Relax on pristine beaches and explore vibrant Bangkok in this tropical getaway.",
    features: [
      { icon: Hotel, text: "Beachfront Resort" },
      { icon: Plane, text: "Round-trip Flight" },
      { icon: UtensilsCrossed, text: "Daily Breakfast" },
    ],
    includes: {
      room: "Beachfront resort with sea view",
      flight: "Kathmandu - Bangkok - Phuket - Kathmandu",
      services: [
        "Airport transfers",
        "Island hopping tour",
        "Spa session",
        "City tour in Bangkok",
      ],
    },
  },
  {
    id: 4,
    name: "Dubai Luxury Experience",
    destination: "UAE - Dubai",
    duration: "5 Days / 4 Nights",
    price: 1499,
    originalPrice: 1899,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    description:
      "Indulge in luxury with world-class shopping, dining, and iconic landmarks.",
    features: [
      { icon: Hotel, text: "5-Star Hotel" },
      { icon: Plane, text: "Business Class Flight" },
      { icon: UtensilsCrossed, text: "All Meals" },
    ],
    includes: {
      room: "Luxury 5-star hotel in city center",
      flight: "Kathmandu - Dubai - Kathmandu",
      services: [
        "Burj Khalifa tickets",
        "Desert safari with dinner",
        "Shopping tour",
        "Yacht cruise",
      ],
    },
  },
  {
    id: 5,
    name: "India Golden Triangle",
    destination: "India - Delhi, Agra, Jaipur",
    duration: "6 Days / 5 Nights",
    price: 699,
    originalPrice: 899,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
    description:
      "Explore India's rich heritage visiting the iconic Taj Mahal and royal palaces.",
    features: [
      { icon: Hotel, text: "Heritage Hotels" },
      { icon: Plane, text: "Flight Tickets" },
      { icon: UtensilsCrossed, text: "Breakfast & Lunch" },
    ],
    includes: {
      room: "Heritage hotels in each city",
      flight: "Kathmandu - Delhi - Kathmandu",
      services: [
        "Private AC vehicle",
        "English speaking guide",
        "All monument entry fees",
        "Cultural performances",
      ],
    },
  },
  {
    id: 6,
    name: "Annapurna Circuit Trek",
    destination: "Nepal - Annapurna Region",
    duration: "18 Days / 17 Nights",
    price: 1099,
    originalPrice: 1399,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    description:
      "Complete the famous Annapurna Circuit with breathtaking mountain views.",
    features: [
      { icon: Hotel, text: "Tea House Accommodation" },
      { icon: Plane, text: "Domestic Flight" },
      { icon: UtensilsCrossed, text: "All Meals" },
    ],
    includes: {
      room: "Tea house accommodation throughout",
      flight: "Kathmandu - Pokhara - Kathmandu",
      services: [
        "Expert trekking guide",
        "Porter service",
        "TIMS & ACAP permits",
        "First aid kit",
      ],
    },
  },
];

const TravelPackages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations with our all-inclusive travel
            packages. Each package includes accommodation, flights, and premium
            services.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ${pkg.originalPrice - pkg.price}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                {/* Features */}
                <div className="mb-4 space-y-2">
                  {pkg.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <Icon className="w-4 h-4 text-blue-600" />
                        <span>{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Includes Section */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Package Includes:
                  </h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <Hotel className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Room:</strong> {pkg.includes.room}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Plane className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>
                        <strong>Flight:</strong> {pkg.includes.flight}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <strong>Services:</strong>
                        <ul className="list-disc list-inside ml-2 mt-1">
                          {pkg.includes.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-500 line-through mr-2">
                        ${pkg.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-blue-600">
                      ${pkg.price}
                    </span>
                    <span className="text-sm text-gray-600">/person</span>
                  </div>
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                    onClick={() => navigate(`/booknow/${pkg.id}`)}
                    aria-label={`Book ${pkg.name}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelPackages;
