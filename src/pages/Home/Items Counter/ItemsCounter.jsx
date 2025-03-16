import { useState, useEffect } from "react";
import { FaCrown, FaLock, FaStar, FaSearch, FaBoxOpen, FaCheckCircle } from "react-icons/fa";

const PremiumClass = () => {
  const [stats, setStats] = useState({
    lostItems: 0,
    foundItems: 0,
    returnedItems: 0,
    premiumTracking: 0,
    secureHandling: 0,
    vipAssistance: 0, 
  });

  // Simulating fetching data
  useEffect(() => {
    setTimeout(() => {
      setStats({
        lostItems: 250,
        foundItems: 180,
        returnedItems: 120,
        premiumTracking: 120,
        secureHandling: 90,
        vipAssistance: 50, 
      });
    }, 1000);
  }, []);

  return (
    <section className="my-20 text-center py-16 rounded-xl shadow-2xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-blue-400 drop-shadow-lg">🚀Lost & Found Services</h2>
        <p className="text-lg text-blue-300 mb-10">Exclusive Priority Assistance & Tracking</p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Lost Items */}
          <div className="bg-white/20 shadow-xl rounded-3xl p-8 text-center backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaSearch className="text-red-500 text-6xl mx-auto" />
            <h3 className="text-4xl font-bold text-blue-400 mt-4">{stats.lostItems}</h3>
            <p className="text-lg text-blue-300 opacity-90">Lost Items Reported</p>
          </div>

          {/* Found Items */}
          <div className="bg-white/20 shadow-xl rounded-3xl p-8 text-center backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaBoxOpen className="text-green-400 text-6xl mx-auto" />
            <h3 className="text-4xl font-bold text-blue-400 mt-4">{stats.foundItems}</h3>
            <p className="text-lg text-blue-300 opacity-90">Found & Listed Items</p>
          </div>

          {/* Returned Items */}
          <div className="bg-white/20  shadow-xl rounded-3xl p-8 text-center backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaCheckCircle className="text-orange-300 text-6xl mx-auto" />
            <h3 className="text-4xl font-bold text-blue-400 mt-4">{stats.returnedItems}</h3>
            <p className="text-lg text-blue-300 opacity-90">Returned to Owners</p>
          </div>

          {/* Premium Tracking */}
          <div className="bg-white/20 shadow-xl rounded-3xl p-8 text-center backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaStar className="text-yellow-400 text-6xl mx-auto" />
            <h3 className="text-4xl font-bold text-blue-400 mt-4">{stats.premiumTracking}</h3>
            <p className="text-lg text-blue-300 opacity-90">Premium Tracking Users</p>
          </div>

          {/* Secure Handling */}
          <div className="bg-white/20 shadow-xl rounded-3xl p-8 text-center backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaLock className="text-indigo-400 text-6xl mx-auto" />
            <h3 className="text-4xl font-bold text-blue-400 mt-4">{stats.secureHandling}</h3>
            <p className="text-lg text-blue-300 opacity-90">Secure Items Handled</p>
          </div>

          {/* VIP Assistance */}
          <div className="bg-white/20 shadow-xl rounded-3xl p-8 text-center backdrop-blur-md border border-white/30 transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaCrown className="text-pink-400 text-6xl mx-auto" />
            <h3 className="text-4xl font-bold text-blue-400 mt-4">{stats.vipAssistance}</h3>
            <p className="text-lg text-blue-300 opacity-90">VIP Assistance Cases</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumClass;
