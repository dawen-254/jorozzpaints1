import { useState } from "react";

export default function Products() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Mock paint data with new categories
  const paints = [
    { id: 1, name: "Acrylic Paint Set", category: "Interior Wall", image: "VVB/MOC5.jpg " },
    { id: 2, name: "Classic Interior Wall Paint", category: "Interior Wall", image: " VVB/sack 11.jpg" },
    { id: 3, name: "Rock Master Coating", category: "Rock Master", image: "VVB/MOC4.jpg" },
    { id: 4, name: "Premium Rock Master Finish", category: "Rock Master", image: "VVB/PAI1.jpg" },
    { id: 5, name: "High-Gloss Undercoat", category: "Undercoat", image: "VVB/MOC1.jpg " },
    { id: 6, name: "Smooth Undercoat Primer", category: "Undercoat", image: "VVB/PAI3.jpg" },
    { id: 7, name: "Natural Stone Seal", category: "Stone Seal", image: "VVB/MOC3.jpg" },
    { id: 8, name: "Eco-Friendly Stone Seal", category: "Stone Seal", image: "VVB/MOC3.jpg" },
    { id: 9, name: "Classic Emulsion", category: "Emulsion", image: "VVB/MOC5.jpg " },
    { id: 10, name: "Luxury Emulsion Finish", category: "Emulsion", image: "VVB/PAI2.jpg " },
    { id: 11, name: "Advanced Weathershield", category: "Weathershield", image: "VVB/MOC2.jpg" },
    { id: 12, name: "Extreme Weather Protection", category: "Weathershield", image: "VVB/PAI3.jpg" },
  ];

  const categories = ["All", "Interior Wall", "Rock Master", "Undercoat", "Stone Seal", "Emulsion", "Weathershield"];

  // Filtered products based on search and category
  const filteredPaints = paints.filter(
    (paint) =>
      paint.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeCategory === "All" || paint.category === activeCategory)
  );

  const addToCart = (paint) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === paint.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === paint.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...paint, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity + change > 0
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">PaintMart</h1>
          {/* Search Bar */}
          <div className="hidden md:flex items-center w-1/2 max-w-lg mx-4">
            <input
              type="text"
              placeholder="Search for paints..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>
      {/* Mobile Search */}
      <div className="md:hidden px-4 py-3 bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search for paints..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Category Filters */}
      <div className="bg-white py-3 overflow-x-auto">
        <div className="flex space-x-4 px-4 container mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {activeCategory === "All" ? "All Paint Products" : `${activeCategory} Paints`}
        </h2>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPaints.map((paint) => (
            <div
              key={paint.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={paint.image}
                alt={paint.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{paint.name}</h3>
                <button
                  onClick={() => addToCart(paint)}
                  className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredPaints.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No paints found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-blue-500 hover:text-blue-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
      {/* Footer */}
      <footer className="bg-white mt-12 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} PaintMart Kenya. All rights reserved.</p>
        </div>
      </footer>
      {/* Shopping Cart Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-start space-x-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {cart.length > 0 && (
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-bold">Items:</span>
                <span className="font-bold text-blue-600">{cartTotal}</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}