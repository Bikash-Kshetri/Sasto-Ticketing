import { useState } from "react";
import {
  Clock,
  Calendar,
  Users,
  User,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const BaliTourDetails = () => {
  const [activeTab, setActiveTab] = useState("main");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickUpDate: "",
    persons: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
              Indonesia Bali Tour Package
            </h1>
            {/* Navigation Tabs */}
            <div className="flex gap-4 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("main")}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === "main"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Main Information
              </button>
              <button
                onClick={() => setActiveTab("itinerary")}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === "itinerary"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => setActiveTab("faqs")}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === "faqs"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Faqs
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === "reviews"
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Reviews
              </button>
            </div>
          </div>

          {/* Key Tour Information Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">4 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">
                  October 31, 2025
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">
                  Availability: 90
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Age: 12</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Info Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-1 h-8 bg-red-600 rounded"></div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Main Info
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Bali is a state of mind. It's a unique cultural fusion that
                enchants visitors with its enchanting temples, dreamlike
                landscapes, and warm hospitality. The island offers a perfect
                blend of traditional culture and modern amenities, making it an
                ideal destination for travelers seeking both relaxation and
                adventure.
              </p>
            </div>

            {/* Details for Bali Tour Packages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Details for Bali Tour Packages
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Bali attracts visitors from various regions around the world,
                  drawn by its rich cultural heritage, stunning beaches, and
                  vibrant atmosphere. The island is renowned for its beautiful
                  surf spots, artistic traditions, exciting nightlife, luxury
                  resorts, and breathtaking natural beauty.
                </p>
                <p>
                  Among Indonesia's many islands, Bali stands out for its
                  cultural diversity and scenic landscapes. From ancient temples
                  to pristine beaches, from lush rice terraces to volcanic
                  mountains, Bali offers a diverse range of experiences that
                  cater to every type of traveler.
                </p>
              </div>
            </div>

            {/* Tour Inclusions and Exclusions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tour Inclusions and Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inclusions */}
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4">
                    Inclusions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Private, air-conditioned car transfers per the itinerary
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        International and domestic flight tickets
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        English-speaking guide assistance for transfers and
                        tours
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        3 nights of hotel accommodation with breakfast included
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">1 banana boat ride</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Parking and entrance fees
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        1 bottle of mineral water per person during transfers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        Government taxes and service charges
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Exclusions */}
                <div>
                  <h3 className="text-xl font-semibold text-red-700 mb-4">
                    Exclusions
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-600 mt-0.5 shrink-0 text-xl">
                        ×
                      </span>
                      <span className="text-gray-700">
                        International and domestic airfare
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-600 mt-0.5 shrink-0 text-xl">
                        ×
                      </span>
                      <span className="text-gray-700">
                        Personal expenses such as laundry, phone calls, tips,
                        and mini-bar use
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-600 mt-0.5 shrink-0 text-xl">
                        ×
                      </span>
                      <span className="text-gray-700">Meals during tours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-600 mt-0.5 shrink-0 text-xl">
                        ×
                      </span>
                      <span className="text-gray-700">Optional tours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-600 mt-0.5 shrink-0 text-xl">
                        ×
                      </span>
                      <span className="text-gray-700">Travel insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-red-600 mt-0.5 shrink-0 text-xl">
                        ×
                      </span>
                      <span className="text-gray-700">
                        Gratuities for tour guides and drivers
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Book This Tour
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email@domain.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="pickUpDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pick Up Date
                  </label>
                  <input
                    type="date"
                    id="pickUpDate"
                    name="pickUpDate"
                    value={formData.pickUpDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="persons"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Person(s)
                  </label>
                  <input
                    type="number"
                    id="persons"
                    name="persons"
                    value={formData.persons}
                    onChange={handleInputChange}
                    min="1"
                    placeholder="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Benefits List */}
                <div className="space-y-2 py-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>No booking or credit card fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Best price guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span>Save $14 on your next booking</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  BOOK THIS TOUR
                </button>
              </form>
            </div>

            {/* 24/7 Customer Support */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                24/7 Customer Support
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">+977-1-4529467</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">sales@imetravels.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">
                    08:00am - 05:30pm (Sun to Sat)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaliTourDetails;

