import React from "react";
import Companyprofile from "./companyprofile";

const About = (): React.ReactElement => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-customDark text-customWhite pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
            Skyline Travels & Tour
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Your trusted partner for premium Ticketing Services.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center font-poppins">
              About Skyline Travels and Tours
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Established on June 25, 2015, Skyline Travels and Tours is a leading IATA-accredited travel agency in Nepal, dedicated to providing world-class travel solutions. With strong partnerships spanning international star airlines, budget carriers, and domestic airlines, we offer competitive group fares, private fares, and tailor-made itineraries worldwide. To better serve our global clients, we also operate a fully functional branch office in the UAE.
              </p>
              <p className="text-base md:text-lg">
                Founded by Mr. Sudip Khanal, a professional pilot and aviation enthusiast, Skyline Travels and Tours combines passion, expertise, and a commitment to excellence. Our team of 35+ certified travel professionals has successfully served over 20,000 clients worldwide, delivering seamless planning, personalized service, and exceptional travel experiences.
              </p>
              <p className="text-base md:text-lg font-semibold">
                At Skyline, we believe every journey matters. From start to finish, we ensure personalized attention, trusted guidance, and unforgettable memories. Skyline Travels and Tours — Your trusted partner for global travel excellence. ✈️🌍
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-16 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="bg-customAccent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tailored Travel Packages
              </h3>
              <p className="text-gray-600">
                Well-maintained Flight Ticketing Services and dependable service
                you can count on every time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-customAccent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Affordability
              </h3>
              <p className="text-gray-600">
                Competitive Ticketing pricing that makes accessible to everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-customAccent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                24/7 support and a team dedicated to making your experience
                seamless.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Group Tours
              </h3>
              <p className="text-gray-600">
                Join like-minded travelers on our exciting group tours
                throughout Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-poppins">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our main aim is to low cost ticketing services that empower people
              to explore, connect, and achieve their goals without the
              constraints of flight transportation barriers. We're committed to
              maintaining the highest standards of service while making mobility
              accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section
        id="company-profile"
        className="py-0 lg:py-4 bg-white"
      >
        <Companyprofile />
      </section>
    </div>
  );
};

export default About;
