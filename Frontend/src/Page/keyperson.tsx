import React from "react";

const keyPersons = [
  {
    name: "Sudip Khanal",
    role: "Founder and CEO",
    image: "/assets/sudip.jpg",
  },
  {
    name: "Prajol Raut",
    role: "Co-Founder, Managing Director",
    image: "/assets/prajwol.jpg",
  },
  
];

const KeyPersons: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Meet our Key Persons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {keyPersons.map((person, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover mb-4 shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {person.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPersons;
