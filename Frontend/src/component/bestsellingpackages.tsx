import { Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BestSellingPackage {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  image: string;
  rating?: number;
  showReviews?: boolean;
}

const bestSellingPackages: BestSellingPackage[] = [
  {
    id: 1,
    title: "Muktinath Religious Tour",
    subtitle: "Nepal Tour",
    duration: "6 days",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
  },
  {
    id: 2,
    title: "Everest Base Camp Trekking",
    subtitle: "Nepal Tour, Trekking in Nepal",
    duration: "9 days",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    rating: 4.2,
    showReviews: true,
  },
  {
    id: 3,
    title: "Annapurna Base Camp Trek",
    subtitle: "Nepal Tour, Trekking in Nepal",
    duration: "9 days",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    id: 4,
    title: "Dubai Tour 5N/4D",
    subtitle: "International Tour",
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    showReviews: true,
  },
  {
    id: 5,
    title: "Indonesia Bali Tour (4N/5D)",
    subtitle: "International Tour",
    duration: "4 days",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    showReviews: true,
  },
  {
    id: 6,
    title: "Thailand Tour (4N/5D) [2N Pattaya + 2N Bangkok]",
    subtitle: "International Tour",
    duration: "5 days",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
    showReviews: true,
  },
];

const BestSellingPackages = () => {
  const navigate = useNavigate();

  const handlePackageClick = (e: React.MouseEvent, pkg: BestSellingPackage) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("Package clicked:", pkg.id, pkg.title);

    // Navigate to Bali tour details page for id 5
    if (pkg.id === 5) {
      console.log("Navigating to Bali tour details...");
      navigate("/bali-tour-details");
    }
    // Add other package routes here as needed
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Best Selling Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enjoy the exclusive package tours with us.
          </p>
        </div>

        {/* Packages Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bestSellingPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={(e) => handlePackageClick(e, pkg)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                {/* Rating/Reviews Badge */}
                {(pkg.rating || pkg.showReviews) && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                    {pkg.rating && (
                      <>
                        <Star className="w-3 h-3 fill-white" />
                        <span>{pkg.rating}</span>
                      </>
                    )}
                    <span className={pkg.rating ? "ml-1" : ""}>Reviews</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{pkg.subtitle}</p>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>{pkg.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingPackages;
