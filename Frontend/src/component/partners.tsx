import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Partnerlogos = [
  "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/IATA_1670595693.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
  "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2017/others/taan-ntb-18042017081506.jpg&w=900&height=601",
  "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/IATA_1670595693.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
  "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2017/others/taan-ntb-18042017081506.jpg&w=900&height=601",
  "https://media.assettype.com/outlookbusiness/import/uploadimage/library/16_9/16_9_5/IATA_1670595693.webp?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
];

export default function CertificatesPartners() {
  const [start, setStart] = useState(0);

  const visibleCount = 8; // how many logos to show at once

  const next = () => {
    setStart((prev) =>
      prev + 1 >= Partnerlogos.length - visibleCount ? prev : prev + 1
    );
  };

  const prev = () => {
    setStart((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  return (
    <div className="w-full bg-[#f8f8f8] py-12">
      {/* Title */}
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
        Certificates & Partners
      </h2>

      {/* Slider arrows */}
      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={prev}
          className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-100"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={next}
          className="p-2 rounded-md bg-white border border-gray-300 hover:bg-gray-100"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Logos section */}
      <div className="flex items-center justify-center gap-10 overflow-hidden px-4">
        {Partnerlogos.slice(start, start + visibleCount).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Partner Logo"
            className="h-16 w-auto grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
