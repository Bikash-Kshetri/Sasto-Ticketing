import React, { useState, useEffect, useRef } from "react";

const countryCodes = [
  { code: "+1", country: "USA / Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+64", country: "New Zealand" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+971", country: "UAE" },
  { code: "+974", country: "Qatar" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+977", country: "Nepal" },
  { code: "+880", country: "Bangladesh" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
];

// 🔹 Comprehensive Airport Data: City, Country, Airport Name, Airport Code
interface AirportData {
  city: string;
  country: string;
  airport: string;
  code: string;
  displayName: string;
}

const airportData: AirportData[] = [
  // Nepal
  { city: "Kathmandu", country: "Nepal", airport: "Tribhuvan International Airport", code: "KTM", displayName: "Kathmandu, Nepal (KTM)" },

  // UAE
  { city: "Dubai", country: "UAE", airport: "Dubai International Airport", code: "DXB", displayName: "Dubai, UAE (DXB)" },
  { city: "Dubai", country: "UAE", airport: "Al Maktoum International Airport", code: "DWC", displayName: "Dubai, UAE (DWC)" },
  { city: "Abu Dhabi", country: "UAE", airport: "Abu Dhabi International Airport", code: "AUH", displayName: "Abu Dhabi, UAE (AUH)" },
  { city: "Sharjah", country: "UAE", airport: "Sharjah International Airport", code: "SHJ", displayName: "Sharjah, UAE (SHJ)" },

  // Qatar
  { city: "Doha", country: "Qatar", airport: "Hamad International Airport", code: "DOH", displayName: "Doha, Qatar (DOH)" },

  // Saudi Arabia
  { city: "Riyadh", country: "Saudi Arabia", airport: "King Khalid International Airport", code: "RUH", displayName: "Riyadh, Saudi Arabia (RUH)" },
  { city: "Jeddah", country: "Saudi Arabia", airport: "King Abdulaziz International Airport", code: "JED", displayName: "Jeddah, Saudi Arabia (JED)" },
  { city: "Dammam", country: "Saudi Arabia", airport: "King Fahd International Airport", code: "DMM", displayName: "Dammam, Saudi Arabia (DMM)" },

  // UK
  { city: "London", country: "UK", airport: "Heathrow Airport", code: "LHR", displayName: "London, UK (LHR)" },
  { city: "London", country: "UK", airport: "Gatwick Airport", code: "LGW", displayName: "London, UK (LGW)" },
  { city: "London", country: "UK", airport: "Stansted Airport", code: "STN", displayName: "London, UK (STN)" },
  { city: "Manchester", country: "UK", airport: "Manchester Airport", code: "MAN", displayName: "Manchester, UK (MAN)" },
  { city: "Edinburgh", country: "UK", airport: "Edinburgh Airport", code: "EDI", displayName: "Edinburgh, UK (EDI)" },

  // USA
  { city: "New York", country: "USA", airport: "John F. Kennedy International Airport", code: "JFK", displayName: "New York, USA (JFK)" },
  { city: "New York", country: "USA", airport: "Newark Liberty International Airport", code: "EWR", displayName: "New York, USA (EWR)" },
  { city: "Los Angeles", country: "USA", airport: "Los Angeles International Airport", code: "LAX", displayName: "Los Angeles, USA (LAX)" },
  { city: "Chicago", country: "USA", airport: "O'Hare International Airport", code: "ORD", displayName: "Chicago, USA (ORD)" },
  { city: "Miami", country: "USA", airport: "Miami International Airport", code: "MIA", displayName: "Miami, USA (MIA)" },
  { city: "San Francisco", country: "USA", airport: "San Francisco International Airport", code: "SFO", displayName: "San Francisco, USA (SFO)" },
  { city: "Las Vegas", country: "USA", airport: "McCarran International Airport", code: "LAS", displayName: "Las Vegas, USA (LAS)" },
  { city: "Boston", country: "USA", airport: "Logan International Airport", code: "BOS", displayName: "Boston, USA (BOS)" },
  { city: "Seattle", country: "USA", airport: "Seattle-Tacoma International Airport", code: "SEA", displayName: "Seattle, USA (SEA)" },
  { city: "Washington", country: "USA", airport: "Dulles International Airport", code: "IAD", displayName: "Washington, USA (IAD)" },

  // Canada
  { city: "Toronto", country: "Canada", airport: "Toronto Pearson International Airport", code: "YYZ", displayName: "Toronto, Canada (YYZ)" },
  { city: "Vancouver", country: "Canada", airport: "Vancouver International Airport", code: "YVR", displayName: "Vancouver, Canada (YVR)" },
  { city: "Montreal", country: "Canada", airport: "Montreal-Trudeau International Airport", code: "YUL", displayName: "Montreal, Canada (YUL)" },
  { city: "Calgary", country: "Canada", airport: "Calgary International Airport", code: "YYC", displayName: "Calgary, Canada (YYC)" },

  // Australia
  { city: "Sydney", country: "Australia", airport: "Sydney Kingsford Smith Airport", code: "SYD", displayName: "Sydney, Australia (SYD)" },
  { city: "Melbourne", country: "Australia", airport: "Melbourne Airport", code: "MEL", displayName: "Melbourne, Australia (MEL)" },
  { city: "Brisbane", country: "Australia", airport: "Brisbane Airport", code: "BNE", displayName: "Brisbane, Australia (BNE)" },
  { city: "Perth", country: "Australia", airport: "Perth Airport", code: "PER", displayName: "Perth, Australia (PER)" },
  { city: "Adelaide", country: "Australia", airport: "Adelaide Airport", code: "ADL", displayName: "Adelaide, Australia (ADL)" },

  // India
  { city: "Delhi", country: "India", airport: "Indira Gandhi International Airport", code: "DEL", displayName: "Delhi, India (DEL)" },
  { city: "Mumbai", country: "India", airport: "Chhatrapati Shivaji Maharaj International Airport", code: "BOM", displayName: "Mumbai, India (BOM)" },
  { city: "Bangalore", country: "India", airport: "Kempegowda International Airport", code: "BLR", displayName: "Bangalore, India (BLR)" },
  { city: "Chennai", country: "India", airport: "Chennai International Airport", code: "MAA", displayName: "Chennai, India (MAA)" },
  { city: "Kolkata", country: "India", airport: "Netaji Subhas Chandra Bose International Airport", code: "CCU", displayName: "Kolkata, India (CCU)" },
  { city: "Hyderabad", country: "India", airport: "Rajiv Gandhi International Airport", code: "HYD", displayName: "Hyderabad, India (HYD)" },
  { city: "Pune", country: "India", airport: "Pune Airport", code: "PNQ", displayName: "Pune, India (PNQ)" },
  { city: "Ahmedabad", country: "India", airport: "Sardar Vallabhbhai Patel International Airport", code: "AMD", displayName: "Ahmedabad, India (AMD)" },

  // Pakistan
  { city: "Karachi", country: "Pakistan", airport: "Jinnah International Airport", code: "KHI", displayName: "Karachi, Pakistan (KHI)" },
  { city: "Lahore", country: "Pakistan", airport: "Allama Iqbal International Airport", code: "LHE", displayName: "Lahore, Pakistan (LHE)" },
  { city: "Islamabad", country: "Pakistan", airport: "Islamabad International Airport", code: "ISB", displayName: "Islamabad, Pakistan (ISB)" },

  // Bangladesh
  { city: "Dhaka", country: "Bangladesh", airport: "Hazrat Shahjalal International Airport", code: "DAC", displayName: "Dhaka, Bangladesh (DAC)" },
  { city: "Chittagong", country: "Bangladesh", airport: "Shah Amanat International Airport", code: "CGP", displayName: "Chittagong, Bangladesh (CGP)" },

  // China
  { city: "Beijing", country: "China", airport: "Beijing Capital International Airport", code: "PEK", displayName: "Beijing, China (PEK)" },
  { city: "Beijing", country: "China", airport: "Beijing Daxing International Airport", code: "PKX", displayName: "Beijing, China (PKX)" },
  { city: "Shanghai", country: "China", airport: "Shanghai Pudong International Airport", code: "PVG", displayName: "Shanghai, China (PVG)" },
  { city: "Shanghai", country: "China", airport: "Shanghai Hongqiao International Airport", code: "SHA", displayName: "Shanghai, China (SHA)" },
  { city: "Guangzhou", country: "China", airport: "Guangzhou Baiyun International Airport", code: "CAN", displayName: "Guangzhou, China (CAN)" },
  { city: "Shenzhen", country: "China", airport: "Shenzhen Bao'an International Airport", code: "SZX", displayName: "Shenzhen, China (SZX)" },
  { city: "Chengdu", country: "China", airport: "Chengdu Shuangliu International Airport", code: "CTU", displayName: "Chengdu, China (CTU)" },
  { city: "Hong Kong", country: "China", airport: "Hong Kong International Airport", code: "HKG", displayName: "Hong Kong, China (HKG)" },

  // Japan
  { city: "Tokyo", country: "Japan", airport: "Narita International Airport", code: "NRT", displayName: "Tokyo, Japan (NRT)" },
  { city: "Tokyo", country: "Japan", airport: "Haneda Airport", code: "HND", displayName: "Tokyo, Japan (HND)" },
  { city: "Osaka", country: "Japan", airport: "Kansai International Airport", code: "KIX", displayName: "Osaka, Japan (KIX)" },
  { city: "Osaka", country: "Japan", airport: "Osaka International Airport", code: "ITM", displayName: "Osaka, Japan (ITM)" },
  { city: "Nagoya", country: "Japan", airport: "Chubu Centrair International Airport", code: "NGO", displayName: "Nagoya, Japan (NGO)" },
  { city: "Fukuoka", country: "Japan", airport: "Fukuoka Airport", code: "FUK", displayName: "Fukuoka, Japan (FUK)" },

  // South Korea
  { city: "Seoul", country: "South Korea", airport: "Incheon International Airport", code: "ICN", displayName: "Seoul, South Korea (ICN)" },
  { city: "Seoul", country: "South Korea", airport: "Gimpo International Airport", code: "GMP", displayName: "Seoul, South Korea (GMP)" },
  { city: "Busan", country: "South Korea", airport: "Gimhae International Airport", code: "PUS", displayName: "Busan, South Korea (PUS)" },

  // Singapore
  { city: "Singapore", country: "Singapore", airport: "Singapore Changi Airport", code: "SIN", displayName: "Singapore (SIN)" },

  // Thailand
  { city: "Bangkok", country: "Thailand", airport: "Suvarnabhumi Airport", code: "BKK", displayName: "Bangkok, Thailand (BKK)" },
  { city: "Bangkok", country: "Thailand", airport: "Don Mueang International Airport", code: "DMK", displayName: "Bangkok, Thailand (DMK)" },
  { city: "Phuket", country: "Thailand", airport: "Phuket International Airport", code: "HKT", displayName: "Phuket, Thailand (HKT)" },

  // Malaysia
  { city: "Kuala Lumpur", country: "Malaysia", airport: "Kuala Lumpur International Airport", code: "KUL", displayName: "Kuala Lumpur, Malaysia (KUL)" },
  { city: "Kuala Lumpur", country: "Malaysia", airport: "Sultan Abdul Aziz Shah Airport", code: "SZB", displayName: "Kuala Lumpur, Malaysia (SZB)" },
  { city: "Penang", country: "Malaysia", airport: "Penang International Airport", code: "PEN", displayName: "Penang, Malaysia (PEN)" },

  // Indonesia
  { city: "Jakarta", country: "Indonesia", airport: "Soekarno-Hatta International Airport", code: "CGK", displayName: "Jakarta, Indonesia (CGK)" },
  { city: "Bali", country: "Indonesia", airport: "Ngurah Rai International Airport", code: "DPS", displayName: "Bali, Indonesia (DPS)" },
  { city: "Surabaya", country: "Indonesia", airport: "Juanda International Airport", code: "SUB", displayName: "Surabaya, Indonesia (SUB)" },

  // Philippines
  { city: "Manila", country: "Philippines", airport: "Ninoy Aquino International Airport", code: "MNL", displayName: "Manila, Philippines (MNL)" },
  { city: "Cebu", country: "Philippines", airport: "Mactan-Cebu International Airport", code: "CEB", displayName: "Cebu, Philippines (CEB)" },

  // Vietnam
  { city: "Ho Chi Minh City", country: "Vietnam", airport: "Tan Son Nhat International Airport", code: "SGN", displayName: "Ho Chi Minh City, Vietnam (SGN)" },
  { city: "Hanoi", country: "Vietnam", airport: "Noi Bai International Airport", code: "HAN", displayName: "Hanoi, Vietnam (HAN)" },

  // Turkey
  { city: "Istanbul", country: "Turkey", airport: "Istanbul Airport", code: "IST", displayName: "Istanbul, Turkey (IST)" },
  { city: "Istanbul", country: "Turkey", airport: "Sabiha Gökçen International Airport", code: "SAW", displayName: "Istanbul, Turkey (SAW)" },
  { city: "Ankara", country: "Turkey", airport: "Esenboğa Airport", code: "ESB", displayName: "Ankara, Turkey (ESB)" },

  // Germany
  { city: "Frankfurt", country: "Germany", airport: "Frankfurt Airport", code: "FRA", displayName: "Frankfurt, Germany (FRA)" },
  { city: "Munich", country: "Germany", airport: "Munich Airport", code: "MUC", displayName: "Munich, Germany (MUC)" },
  { city: "Berlin", country: "Germany", airport: "Berlin Brandenburg Airport", code: "BER", displayName: "Berlin, Germany (BER)" },
  { city: "Hamburg", country: "Germany", airport: "Hamburg Airport", code: "HAM", displayName: "Hamburg, Germany (HAM)" },
  { city: "Düsseldorf", country: "Germany", airport: "Düsseldorf Airport", code: "DUS", displayName: "Düsseldorf, Germany (DUS)" },

  // France
  { city: "Paris", country: "France", airport: "Charles de Gaulle Airport", code: "CDG", displayName: "Paris, France (CDG)" },
  { city: "Paris", country: "France", airport: "Orly Airport", code: "ORY", displayName: "Paris, France (ORY)" },
  { city: "Lyon", country: "France", airport: "Lyon-Saint Exupéry Airport", code: "LYS", displayName: "Lyon, France (LYS)" },
  { city: "Nice", country: "France", airport: "Nice Côte d'Azur Airport", code: "NCE", displayName: "Nice, France (NCE)" },

  // Italy
  { city: "Rome", country: "Italy", airport: "Leonardo da Vinci-Fiumicino Airport", code: "FCO", displayName: "Rome, Italy (FCO)" },
  { city: "Milan", country: "Italy", airport: "Malpensa Airport", code: "MXP", displayName: "Milan, Italy (MXP)" },
  { city: "Venice", country: "Italy", airport: "Venice Marco Polo Airport", code: "VCE", displayName: "Venice, Italy (VCE)" },

  // Spain
  { city: "Madrid", country: "Spain", airport: "Adolfo Suárez Madrid-Barajas Airport", code: "MAD", displayName: "Madrid, Spain (MAD)" },
  { city: "Barcelona", country: "Spain", airport: "Barcelona-El Prat Airport", code: "BCN", displayName: "Barcelona, Spain (BCN)" },
  { city: "Valencia", country: "Spain", airport: "Valencia Airport", code: "VLC", displayName: "Valencia, Spain (VLC)" },

  // Netherlands
  { city: "Amsterdam", country: "Netherlands", airport: "Amsterdam Airport Schiphol", code: "AMS", displayName: "Amsterdam, Netherlands (AMS)" },

  // Switzerland
  { city: "Zurich", country: "Switzerland", airport: "Zurich Airport", code: "ZRH", displayName: "Zurich, Switzerland (ZRH)" },
  { city: "Geneva", country: "Switzerland", airport: "Geneva Airport", code: "GVA", displayName: "Geneva, Switzerland (GVA)" },

  // Russia
  { city: "Moscow", country: "Russia", airport: "Sheremetyevo International Airport", code: "SVO", displayName: "Moscow, Russia (SVO)" },
  { city: "Moscow", country: "Russia", airport: "Domodedovo International Airport", code: "DME", displayName: "Moscow, Russia (DME)" },
  { city: "Saint Petersburg", country: "Russia", airport: "Pulkovo Airport", code: "LED", displayName: "Saint Petersburg, Russia (LED)" },

  // South Africa
  { city: "Johannesburg", country: "South Africa", airport: "O.R. Tambo International Airport", code: "JNB", displayName: "Johannesburg, South Africa (JNB)" },
  { city: "Cape Town", country: "South Africa", airport: "Cape Town International Airport", code: "CPT", displayName: "Cape Town, South Africa (CPT)" },

  // Egypt
  { city: "Cairo", country: "Egypt", airport: "Cairo International Airport", code: "CAI", displayName: "Cairo, Egypt (CAI)" },

  // Brazil
  { city: "São Paulo", country: "Brazil", airport: "São Paulo-Guarulhos International Airport", code: "GRU", displayName: "São Paulo, Brazil (GRU)" },
  { city: "Rio de Janeiro", country: "Brazil", airport: "Rio de Janeiro-Galeão International Airport", code: "GIG", displayName: "Rio de Janeiro, Brazil (GIG)" },

  // Argentina
  { city: "Buenos Aires", country: "Argentina", airport: "Ministro Pistarini International Airport", code: "EZE", displayName: "Buenos Aires, Argentina (EZE)" },

  // Mexico
  { city: "Mexico City", country: "Mexico", airport: "Benito Juárez International Airport", code: "MEX", displayName: "Mexico City, Mexico (MEX)" },
  { city: "Cancún", country: "Mexico", airport: "Cancún International Airport", code: "CUN", displayName: "Cancún, Mexico (CUN)" },

  // New Zealand
  { city: "Auckland", country: "New Zealand", airport: "Auckland Airport", code: "AKL", displayName: "Auckland, New Zealand (AKL)" },
  { city: "Wellington", country: "New Zealand", airport: "Wellington Airport", code: "WLG", displayName: "Wellington, New Zealand (WLG)" },
  { city: "Christchurch", country: "New Zealand", airport: "Christchurch Airport", code: "CHC", displayName: "Christchurch, New Zealand (CHC)" },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    inquiryType: "",
    departureCity: "",
    destinationCity: "",
    departureDate: "",
    returnDate: "",
    passengers: "",
    email: "",
    phoneCode: "+977",
    phone: "",
    leadSource: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  // 🔹 Dropdown States
  const [filteredAirports, setFilteredAirports] = useState<AirportData[]>([]);
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const depRef = useRef<HTMLDivElement>(null);
  const desRef = useRef<HTMLDivElement>(null);

  // 🔹 Hide dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (depRef.current && !depRef.current.contains(e.target as Node)) {
        setShowDepartureDropdown(false);
      }
      if (desRef.current && !desRef.current.contains(e.target as Node)) {
        setShowDestinationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleClear = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 🔹 Autocomplete logic - Search by city, country, airport name, or code
    if (name === "departureCity") {
      const searchTerm = value.toLowerCase();
      const results = airportData.filter((airport) =>
        airport.city.toLowerCase().includes(searchTerm) ||
        airport.country.toLowerCase().includes(searchTerm) ||
        airport.airport.toLowerCase().includes(searchTerm) ||
        airport.code.toLowerCase().includes(searchTerm) ||
        airport.displayName.toLowerCase().includes(searchTerm)
      );
      setFilteredAirports(results);
      setShowDepartureDropdown(true);
    }

    if (name === "destinationCity") {
      const searchTerm = value.toLowerCase();
      const results = airportData.filter((airport) =>
        airport.city.toLowerCase().includes(searchTerm) ||
        airport.country.toLowerCase().includes(searchTerm) ||
        airport.airport.toLowerCase().includes(searchTerm) ||
        airport.code.toLowerCase().includes(searchTerm) ||
        airport.displayName.toLowerCase().includes(searchTerm)
      );
      setFilteredAirports(results);
      setShowDestinationDropdown(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const finalData = {
      ...formData,
      phone: `${formData.phoneCode}${formData.phone}`,
    };

    try {
      const res = await fetch("http://localhost:5005/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitStatus({
        type: "success",
        message: "Your inquiry has been submitted successfully!",
      });

      setFormData({
        name: "",
        inquiryType: "",
        departureCity: "",
        destinationCity: "",
        departureDate: "",
        returnDate: "",
        passengers: "",
        email: "",
        phoneCode: "+977",
        phone: "",
        leadSource: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again!",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 pt-24 pb-16 px-4 sm:px-6 lg:px-12 xl:px-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="w-full lg:max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-blue-600">SKYLINE</span>
            <span className="text-3xl text-red-500 font-bold">→</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Skyline Travel Ticketing Inquiry Form
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 p-6 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Full Name */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Please enter your name. (e.g. John Doe)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                required
              />
            </div>

            {/* Inquiry Type */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Inquiry Type <span className="text-red-500">*</span>
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">select an inquiry type</option>
                <option value="urgent_ticket">Urgent Ticket</option>
                <option value="customer_support">Customer Support</option>
                <option value="date_change">Date Change</option>
                <option value="hotel_booking">Hotel Booking</option>
                <option value="new_lead">New Lead</option>
                <option value="others">Others</option>
                <option value="request_price">Request Price</option>
                <option value="ticket_booking">Ticket Booking</option>
              </select>

              {formData.inquiryType && (
                <button
                  type="button"
                  onClick={() => handleClear("inquiryType")}
                  className="absolute right-3 top-[42px] text-gray-400 hover:text-red-500 transition-colors duration-200 text-lg font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Departure City */}
            <div ref={depRef} className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Departure City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="departureCity"
                value={formData.departureCity}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                placeholder="Search city, country, or airport code..."
                onFocus={() => setShowDepartureDropdown(true)}
                required
              />

              {formData.departureCity && (
                <button
                  type="button"
                  onClick={() => handleClear("departureCity")}
                  className="absolute right-3 top-[42px] text-gray-400 hover:text-red-500 transition-colors duration-200 text-lg font-bold"
                >
                  ✕
                </button>
              )}

              {showDepartureDropdown && filteredAirports.length > 0 && (
                <ul className="absolute z-20 bg-white border-2 border-gray-200 w-full rounded-lg max-h-60 overflow-y-auto mt-1 shadow-lg">
                  {filteredAirports.map((airport, index) => (
                    <li
                      key={`${airport.code}-${index}`}
                      className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setFormData({ ...formData, departureCity: airport.displayName });
                        setShowDepartureDropdown(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">{airport.city}, {airport.country}</span>
                        <span className="text-xs text-gray-500">{airport.airport} ({airport.code})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Destination City */}
            <div ref={desRef} className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                placeholder="Search city, country, or airport code..."
                onFocus={() => setShowDestinationDropdown(true)}
                required
              />

              {formData.destinationCity && (
                <button
                  type="button"
                  onClick={() => handleClear("destinationCity")}
                  className="absolute right-3 top-[42px] text-gray-400 hover:text-red-500 transition-colors duration-200 text-lg font-bold"
                >
                  ✕
                </button>
              )}

              {showDestinationDropdown && filteredAirports.length > 0 && (
                <ul className="absolute z-20 bg-white border-2 border-gray-200 w-full rounded-lg max-h-60 overflow-y-auto mt-1 shadow-lg">
                  {filteredAirports.map((airport, index) => (
                    <li
                      key={`${airport.code}-${index}`}
                      className="px-4 py-3 hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setFormData({ ...formData, destinationCity: airport.displayName });
                        setShowDestinationDropdown(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">{airport.city}, {airport.country}</span>
                        <span className="text-xs text-gray-500">{airport.airport} ({airport.code})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dates, Email, Phone, etc (unchanged below) */}

            {/* Departure Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Departure Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800"
              />
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Return Date
              </label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800"
              />
            </div>

            {/* Passengers */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number Of Passengers <span className="text-red-500">*</span>
              </label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">select number of passengers</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6+">6+</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="enter your contact email address"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 placeholder:text-gray-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="px-3 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-800 appearance-none cursor-pointer"
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="enter a full phone number"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Lead Source */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lead Source
              </label>
              <select
                name="leadSource"
                value={formData.leadSource}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 appearance-none cursor-pointer"
              >
                <option value="">Select Source</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="google">Google</option>
                <option value="website">Website</option>
                <option value="referral">Referral</option>
                <option value="tiktok">TikTok</option>
                <option value="other">Other</option>
              </select>

              {formData.leadSource && (
                <button
                  type="button"
                  onClick={() => handleClear("leadSource")}
                  className="absolute right-3 top-[42px] text-gray-400 hover:text-red-500 transition-colors duration-200 text-lg font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2 relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Let us know any specifics"
                rows={5}
                maxLength={2000}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white text-gray-800 placeholder:text-gray-400 resize-none"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                {formData.message.length}/2000
              </div>
            </div>

            {/* Status */}
            {submitStatus.type && (
              <div
                className={`md:col-span-2 p-4 rounded-lg border-2 ${submitStatus.type === "success"
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">
                    {submitStatus.type === "success" ? "✓" : "✕"}
                  </span>
                  <span className="font-medium">{submitStatus.message}</span>
                </div>
              </div>
            )}

            {/* Button */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//testing
