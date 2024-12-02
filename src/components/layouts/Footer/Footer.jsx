import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 pt-32">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          {/* Branding Section */}
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h1 className="text-2xl font-bold text-white">User Management</h1>
            <p className="mt-2 text-sm">
              Simplifying user operations with modern tools and seamless
              functionality.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 text-sm">
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">
                Quick Links
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-lg font-semibold text-white mb-2">
                Contact Us
              </h2>
              <p className="mb-3">
                Email:{" "}
                <a className="hover:text-indigo-400">
                  support@usermanagement.com
                </a>
              </p>
              <p className="mb-3">
                Phone: <a className="hover:text-indigo-400">+1 234 567 890</a>
              </p>
              <p>Address: Shewrapara, Mirpur-10, Dhaka 1216</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>
        <p className="text-center text-gray-500 text-sm">
          © 2024 User Mangement, All rights reserverd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
