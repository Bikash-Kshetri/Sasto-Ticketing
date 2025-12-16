import {
  Building2,
  Calendar,
  Users,
  Plane,
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Globe,
  Briefcase,
  Map,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

// Reusable Row Component for consistent layout
interface InfoRowProps {
  icon?: LucideIcon;
  label: string;
  children: ReactNode;
  className?: string;
}

const InfoRow = ({
  icon: Icon,
  label,
  children,
  className = "",
}: InfoRowProps) => (
  <div
    className={`flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 py-4 border-b border-gray-100 last:border-0 ${className}`}
  >
    <div className="flex items-center gap-2 sm:w-1/3 md:w-1/4 min-w-[200px] text-gray-600 font-medium">
      {Icon && <Icon className="w-4 h-4 text-blue-600 shrink-0" />}
      <span>{label}</span>
    </div>
    <div className="flex-1 text-gray-800 leading-relaxed">{children}</div>
  </div>
);

const Companyprofile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-linear-to-r from-blue-700 to-blue-900 px-6 py-8 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Company Profile
          </h1>
          <p className="text-blue-100 opacity-90">
            {" "}
            Skyline Travels and Tours (P). Ltd.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <InfoRow icon={Building2} label="Name of the company:">
            <span className="font-semibold text-lg">
              Skyline Travels and Tours (P). Ltd.
            </span>
          </InfoRow>

          <InfoRow icon={Briefcase} label="Business type:">
            Ticketing (domestic and international), Expeditions, domestic tours,
            adventures and outland tours to India, Thailand & Dubai.
          </InfoRow>

          <InfoRow icon={Calendar} label="Year of Establishment:">
            December, 2015
          </InfoRow>

          <InfoRow icon={Users} label="Affiliations:">
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Department of Tourism, Government of Nepal</li>
              <li>Department of Foreign Currency, Nepal Rastra Bank</li>
              <li>NATTA (Nepal Associations of Travels and Tours Agents)</li>
              <li>NTB (Nepal Tourism Board)</li>
              <li>
                IATA (International Air Transport Association) registration.
              </li>
            </ul>
          </InfoRow>

          <InfoRow icon={Plane} label="Domestic Flights Partner:">
            Buddha Air, Yeti Airlines, Simrik Airlines, Tara Airlines, Nepal
            Airlines, Saurya Airlines.
          </InfoRow>

          <InfoRow icon={Plane} label="International Flights Partner:">
            All International Airlines
          </InfoRow>

          <InfoRow icon={Map} label="Tour types:">
            Cultural/ Pilgrimage/ Holiday/ World Heritage tour packages,
            Adventures (Rafting, Bungee jumping, rock climbing, Jungle safari,
            wildlife safari, bird watching, etc), Mountain Flight (Everest
            flight), Kathmandu Sightseeing, Trekking and Expedition and many
            more
          </InfoRow>

          <InfoRow icon={Map} label="Outbound Tour:">
            India, Thailand, Bali
          </InfoRow>

          <InfoRow icon={MapPin} label="Located at:">
            Putalisadak, Kathmandu, Nepal (Near To Star Mall )
          </InfoRow>

          <InfoRow icon={Phone} label="Telephone:">
            <a
              href=" tel+977 9767655305 "
              className="hover:text-blue-600 hover:underline transition-colors"
            >
              01- 720524
            </a>
            ,{" "}
            <a
              href="tel:+9770000000"
              className="hover:text-blue-600 hover:underline transition-colors"
            >
              4000000
            </a>
            ,{" "}
            <a
              href="tel:+9770000000"
              className="hover:text-blue-600 hover:underline transition-colors"
            >
              4000000
            </a>
          </InfoRow>

          <InfoRow icon={Smartphone} label="Cell:">
            <a
              href="tel:+977970000000"
              className="hover:text-blue-600 hover:underline transition-colors font-medium"
            >
              +977- 9767655305
            </a>
            <span className="text-gray-500 ml-2">
              (WhatsCompany Profile/Viber)
            </span>
          </InfoRow>

          <InfoRow icon={Mail} label="Email address:">
            <a
              href="mailto:info@plannepal.com"
              className="text-blue-600 hover:underline break-all"
            >
              info@skylinetravelsandtours.com
            </a>
          </InfoRow>

          <InfoRow icon={Globe} label="Websites:" className="border-b-0">
            <div className="flex flex-col gap-1">
              <a
                href="http://www.plannepal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.skylinetravelsandtours.com
              </a>
            </div>
          </InfoRow>
        </div>
      </div>
    </div>
  );
};

export default Companyprofile;
