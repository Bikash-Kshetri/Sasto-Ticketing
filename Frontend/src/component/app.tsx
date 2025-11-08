import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  HeroSectionLogoSrc: string;
}

const IconWithLabel: React.FC<{
  iconType: "cancel" | "support" | "insurance";
  label: string;
  colorClass: string;
}> = ({ iconType, label, colorClass }) => {
  const getIcon = () => {
    switch (iconType) {
      case "cancel":
        return (
          <svg
            className={`w-6 h-6 md:w-7 md:h-7 lg:h-8 ${colorClass}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        );
      case "support":
        return (
          <svg
            className={`w-6 h-6 md:w-7 md:h-7 lg:h-8 ${colorClass}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case "insurance":
        return (
          <svg
            className={`w-6 h-6 md:w-7 md:h-7 lg:h-8 ${colorClass}`}
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
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {getIcon()}
      <span className="text-xs sm:text-sm md:text-base lg:text-small-size text-customWhite">
        {label}
      </span>
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-customDark w-full text-customWhite pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-poppins">
      <div className="w-full lg:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12">
          {/* Text Section */}
          <div className="md:w-3/5 space-y-4 lg:space-y-6 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl lg:text-[40px] font-bold text-customWhite">
              Find Your Perfect Rental Vehicles
            </h1>
            <p className="text-sm lg:text-base text-customWhite text-justify leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
              Choose from our wide selection of cars, trucks, and SUVs to suit
              your Journey and budget. Book now for a hassle-free experience!
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center md:justify-start">
              <IconWithLabel
                iconType="cancel"
                label="Free Cancellation"
                colorClass="text-yellow-400"
              />
              <IconWithLabel
                iconType="support"
                label="24/7 Support"
                colorClass="text-orange-500"
              />
              <IconWithLabel
                iconType="insurance"
                label="Insurance Included"
                colorClass="text-pink-500"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => navigate("")}
                className="bg-customAccent h-12 flex items-center p-4 rounded-[14px] text-sm md:text-base text-customWhite font-semibold align-middle hover:bg-[#289675] transition-all duration-300 ease-in-out"
                aria-label="Explore Vehicle"
              >
                Browse Vehicle
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/5 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=250&fit=crop"
              alt="Hero section showcasing a variety of courses"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto transform transition-transform duration-300"
            />
          </div>
        </div>
        <div className="mt-12 lg:mt-16 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Featured Collection
          </h1>
          <h2 className="text-sm lg:text-base text-customWhite max-w-3xl mx-auto">
            Handcrafted selection of the world's most extraordinary vehicles.
            Each one tells a story of performance, luxury, and innovation.
          </h2>
        </div>
        <div className="mt-12 lg:mt-16 text-center">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Why Choose Yatra?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
