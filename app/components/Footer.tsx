import React from "react";
import Image from "next/image";
import FooterSofa from "../assets/FooterSofa.png";
import Email from "../assets/Email.png";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 ">
      <div className="container mx-auto px-4 max-w-[1280px]">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex gap-2 items-center mb-2">
              <Image src={Email} alt="Email"></Image>
              <h3>Get In Touch</h3>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-full max-w-sm min-w-[200px]">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter Your Name"
                ></input>
              </div>
              <div className="w-full max-w-sm min-w-[200px]">
                <input
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter Your Email"
                ></input>
              </div>
            </div>
          </div>
          <Image src={FooterSofa} alt="FooterSofa"></Image>
        </div>

        <div className="flex justify-around items-center">
          <div className="mb-6 max-w-[400px]">
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

          {/* Right Side  */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-sm">
            <div className="flex flex-col">
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
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
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Knowledge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Jobs
                  </a>
                </li>
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
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Nordic Chair
                  </a>
                </li>
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
    </footer>
  );
};

export default Footer;
