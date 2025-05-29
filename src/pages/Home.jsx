import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const services = [
    { id: 1, title: "Interior Painting", description: "Transform your space with our premium interior painting services." },
    { id: 2, title: "Exterior Painting", description: "Protect and beautify the outside of your home or office." },
    { id: 3, title: "Wall Textures & Designs", description: "Add style and depth to your walls with custom textures." },
    { id: 4, title: "Commercial Painting", description: "Professional painting for offices, malls, and commercial spaces." },
  ];

  const projects = [
    { id: 1, category: "interior", image: "/VVB/HOUSE1.jpg " },
    { id: 2, category: "exterior", image: "/VVB/HOUSE2.jpg " },
    { id: 3, category: "design", image: "/VVB/HOUSE3.jpg " },
    { id: 4, category: "commercial", image: "/VVB/HOUSE4.jpg " },
    { id: 5, category: "interior", image: "/VVB/HOUSE5.jpg " },
    { id: 6, category: "exterior", image: "/VVB/HOUSE6.jpg " },
  ];

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Homeowner",
      content: "The team did an amazing job on our living room. Clean, professional, and fast!",
      avatar: "https://placehold.co/100x100/3498db/ffffff?text=SM ",
    },
    {
      name: "James Carter",
      role: "Office Manager",
      content: "Our office looks brand new after their commercial paint service. Highly recommend!",
      avatar: "https://placehold.co/100x100/e67e22/ffffff?text=JC ",
    },
    {
      name: "Linda Brooks",
      role: "Property Owner",
      content: "They brought my vision to life with stunning wall textures. Absolutely thrilled.",
      avatar: "https://placehold.co/100x100/27ae60/ffffff?text=LB ",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-red-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Bring Color to Your World</h1>
            <p className="mt-4 text-lg opacity-90">Professional residential and commercial painting services that transform spaces.</p>
            <a 
  href="https://wa.me/+254754611441 " 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-400 hover:bg-yellow-300 text-white font-semibold px-8 py-3 rounded shadow transition-transform transform hover:scale-105 inline-block"
>
  Get Free Quote
</a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/VVB/HOM2.jpg " alt="Painting Service" className="rounded shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["all", "interior", "exterior", "design", "commercial"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-4 py-2 rounded-full transition-colors ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="overflow-hidden rounded shadow-md hover:shadow-xl transition-shadow">
                <img src={project.image} alt={`Project ${project.id}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg mb-6">Get in touch today for a free consultation and quote.</p>
          <a 
  href="https://wa.me/+254113750834 " 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-400 hover:bg-green-300 text-white font-semibold px-8 py-3 rounded shadow transition-transform transform hover:scale-105 inline-block"
>
  Contact Us Now
</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 JOROZZPAINTS Painting Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}