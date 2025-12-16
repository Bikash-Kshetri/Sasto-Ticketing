import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type SearchItem = {
  label: string;
  path: string;
  description?: string;
};

const SEARCH_ITEMS: SearchItem[] = [
  { label: "Home", path: "/" },
  { label: "Plane Booking", path: "/planes", description: "Domestic & international flights" },
  { label: "Nepal Tour", path: "/travelpackage", description: "Explore Nepal tour packages" },
  { label: "International Tour", path: "/travelpackage", description: "International tour packages" },
  { label: "About Skyline", path: "/about", description: "About Skyline Travels & Tours" },
  { label: "Company Profile", path: "/about#company-profile", description: "Detailed company profile" },
  { label: "Contact Us", path: "/contact" },
  { label: "Login", path: "/login", description: "Staff and agent login" },
  { label: "Agent Login", path: "/agent-login", description: "Dedicated agent portal" },
  { label: "Book Now", path: "/booknow", description: "Start a booking" },
  { label: "Best Selling Packages", path: "/bestsellingpackages" },
  { label: "Browse Tickets", path: "/browseticket" },
  { label: "Bali Tour Details", path: "/bali-tour-details" },
];

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SEARCH_ITEMS;
    return SEARCH_ITEMS.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 font-poppins">
          Search Skyline
        </h1>
        <div className="mb-6">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages (e.g. Company Profile, Plane Booking, About)..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            autoFocus
          />
        </div>

        <div className="space-y-3">
          {results.length === 0 && (
            <div className="text-gray-500 text-sm">No matches found.</div>
          )}
          {results.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block rounded-lg border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-colors px-4 py-3"
            >
              <div className="text-base font-semibold text-gray-800">{item.label}</div>
              {item.description && (
                <div className="text-sm text-gray-600 mt-1">{item.description}</div>
              )}
              <div className="text-xs text-gray-400 mt-1">{item.path}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

