import Image from "next/image";
import React from "react";

const UserCard = () => {
  const user = {
    _id: "671f0a80898af28d7d944b7a",
    name: "Mahmud",
    age: "23",
    gender: "male",
    nationality: "Bangladeshi",
    skills: "react",
    address: "Shewrapara, Mirpur-10, Dhaka 1216",
    educationalQualifications: {
      degree: "B.Sc in Computer Science & Engineering",
      university: "UIU",
    },
    image: "https://picsum.photos/200",
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-900 text-white rounded-lg border border-gray-700 shadow-xl p-6">
      {/* User Image */}
      <div className="flex justify-center mb-4">
        {user.image ? (
          <Image
            src={user.image || "https://picsum.photos/200"}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover  shadow-md"
            width={200}
            height={150}
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-400 shadow-md">
            {user.name[0]}
          </div>
        )}
      </div>

      {/* User Info */}
      <h2 className="text-xl font-bold text-center mb-2">{user.name}</h2>
      <p className="text-sm text-gray-400 text-center mb-4">
        {user.educationalQualifications.degree} <br />
        {user.educationalQualifications.university}
      </p>

      {/* User Details */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Age:</span> {user.age}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {user.gender}
        </p>
        <p>
          <span className="font-semibold">Nationality:</span> {user.nationality}
        </p>
        <p>
          <span className="font-semibold">Skills:</span> {user.skills}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {user.address}
        </p>
      </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none">
          User Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
