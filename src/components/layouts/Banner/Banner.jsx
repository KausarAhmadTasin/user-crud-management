import { headers } from "next/headers";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="font-thin leading-[7rem]">Welcome to Our</span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-yellow-500 to-indigo-500">
              User Management System
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Streamline user operations with ease and efficiency. Our system is
            designed to help you manage users seamlessly, improve productivity,
            and ensure security.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg shadow hover:bg-amber-400 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-10 lg:mt-0">
          <Image
            src="https://i.ibb.co.com/mt0R7hV/Email.png"
            alt="User Management Illustration"
            className="w-full max-w-md mx-auto lg:max-w-lg"
            width={300}
            height={250}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
