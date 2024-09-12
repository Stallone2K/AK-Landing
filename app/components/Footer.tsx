import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              A.K Enterprises
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              AK Enterprise is a furniture company known for its high-quality
              and stylish furniture designs. Specializing in both modern and
              affordable furniture, AK Enterprise focuses on creating durable
              and aesthetically pleasing pieces for homes and offices.
            </p>
          </div>
          <div className="mb-8 flex space-x-6">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col">
              <h3 className="mb-2 text-gray-800 font-bold">About Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-gray-800 font-bold">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Knowledge base
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Live chat
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-gray-800 font-bold">Jobs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Our team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-gray-800 font-bold">Nordic Chair</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Kruzo Aero
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Ergonomic
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-gray-600 text-sm">
              Copyright 2022 A.K. Enterprises All Rights Reserved.
            </p>
            <div className="flex space-x-4 text-gray-600 text-sm">
              <a href="#" className="hover:text-gray-900">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
