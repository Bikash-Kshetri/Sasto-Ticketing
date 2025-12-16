import { useNavigate } from "react-router-dom";

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

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  // Airline logos data
  const airlines = [
    "QATAR AIRWAYS", "Emirates", "AIR INDIA", "JET AIRWAYS", "EGYPTAIR", "Lufthansa",
    "swissair", "OMAN AIR", "THAI", "AIRFRANCE", "BRITISH AIRWAYS", "CATHAY PACIFIC",
    "SINGAPORE AIRLINES", "EVA AIR", "TURKISH AIRLINES", "KLM", "DELTA AIR LINES", "IndiGo",
    "ANA", "spicejet", "AIR CANADA", "FINNAIR", "AIR MAURITIUS", "SOUTH AFRICAN AIRWAYS",
    "Air Asia", "Srilankan", "American Airlines", "ROYAL JORDANIAN", "virgin atlantic", "AIR CHINA", "tigerair"
  ];

  // To use your own background image:
  // 1. Place your image in Frontend/public/assets/ folder (e.g., hero-background.jpg)
  // 2. Replace the URL below with: '/assets/hero-background.jpg'
  // Or use an external URL: 'https://your-image-url.com/image.jpg'
  const backgroundImageUrl = '/assets/hero-background.jpg'; // Change this to your image path

  return (
    <div
      className="relative w-full text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-poppins overflow-hidden min-h-screen bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Additional gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-blue-900/30"></div>

      {/* Content Section */}
      <div className="relative z-20 w-full lg:max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
          {/* Main Text */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-2xl">
              DOMESTIC & INTERNATIONAL FLIGHTS
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-red-500 drop-shadow-lg">
              Tickets made easy.
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
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
            <div className="flex justify-center pt-4">
              <button
                onClick={() => navigate("//booknow/:id")}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
                aria-label="Book Your Flight Now"
              >
                Book your flight now
              </button>
            </div>
          </div>
        </div>

        {/* Airline Logos Grid */}
        <div className="relative z-20 mt-16 md:mt-20 lg:mt-24">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-2xl">
            <h3 className="text-center text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
              Our Airline Partners
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 md:gap-4">
              {airlines.map((airline, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:bg-gray-200 rounded p-2 md:p-3 transition-all duration-200 flex items-center justify-center min-h-[60px] md:min-h-[80px]"
                >
                  <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-gray-700 text-center">
                    {airline}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
