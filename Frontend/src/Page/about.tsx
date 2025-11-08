import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-customDark text-customWhite pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
            About Yatra Rental Services
          </h1>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            Your trusted partner for premium vehicle rentals
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center font-poppins">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Founded in 2024, VuTungTung started with a simple mission: to
                make vehicle rental accessible, affordable, and hassle-free for
                everyone. What began as a small local business has grown into a
                trusted name in the transportation industry.
              </p>
              <p className="text-base md:text-lg">
                We believe that mobility should never be a barrier to your
                adventures, business needs, or daily life. That's why we've
                built a diverse fleet of well-maintained vehicles and a
                customer-centric team that's available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-16 bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="w-full lg:max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-poppins">
            Our Values
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
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reliability
              </h3>
              <p className="text-gray-600">
                Well-maintained vehicles and dependable service you can count on
                every time.
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
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Affordability
              </h3>
              <p className="text-gray-600">
                Competitive pricing that makes vehicle rental accessible to
                everyone.
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
                    strokeWidth={2}
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
              To provide exceptional vehicle rental services that empower people
              to explore, connect, and achieve their goals without the
              constraints of transportation barriers. We're committed to
              maintaining the highest standards of service while making mobility
              accessible to all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
