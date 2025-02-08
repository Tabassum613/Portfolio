import { useState, useEffect } from "react";

// Example service data (you would typically fetch this from your backend)
const services = [
  { id: 1, title: "Web Development", description: "Custom websites for businesses." },
  { id: 2, title: "Mobile App Development", description: "Building intuitive mobile apps." },
  { id: 3, title: "SEO Optimization", description: "Boost your search engine rankings." },
  { id: 5, title: "Web Development", description: "Custom websites for businesses." },
  { id: 6, title: "SEO Optimization", description: "Boost your search engine rankings." },
  { id: 4, title: "Mobile App Development", description: "Building intuitive mobile apps." },
];

const ServiceSection = () => {
  const [serviceList, setServiceList] = useState([]);

  // Simulating fetching services data from an API
  useEffect(() => {
    // Normally you would fetch from an API here
    setServiceList(services);
  }, []);

  return (
    <section className="py-10 bg-gray-50 mt-20 mb-1">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
