"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserCard = ({ user }) => {
  const handleEdit = () => {
    console.log("Edit user:", user?._id);
    // Add edit functionality here
  };

  const handleDelete = () => {
    console.log("Delete user:", user?._id);
    // Add delete functionality here
  };

  return (
    <div className="w-[23rem] text-start mx-auto bg-gray-900 text-white rounded-lg border border-gray-700 shadow-xl p-6">
      {/* User Image */}
      <div className="flex justify-center mb-4">
        {user?.image ? (
          <Image
            src={user?.image || "https://picsum.photos/200"}
            alt={user?.name || "User"}
            className="w-32 h-32 rounded-full object-cover shadow-md"
            width={200}
            height={150}
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-400 shadow-md">
            {user?.name[0] || "U"}
          </div>
        )}
      </div>

      {/* User Info */}
      <h2 className="text-xl font-bold text-center mb-2">{user?.name}</h2>
      <p className="text-sm text-gray-400 text-center mb-4">
        {user?.educationalQualifications?.degree || "CSE"} <br />
        {user?.educationalQualifications?.university || "DU"}
      </p>

      {/* User Details */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Age:</span> {user?.age || 25}
        </p>
        <p>
          <span className="font-semibold">Gender:</span>{" "}
          {user?.gender || "Male"}
        </p>
        <p>
          <span className="font-semibold">Nationality:</span>{" "}
          {user?.nationality || "Bangladeshi"}
        </p>
        <p>
          <span className="font-semibold">Skills:</span>{" "}
          {user?.skills || "React JS"}
        </p>
        <p>
          <span className="font-semibold">Address:</span>{" "}
          {user?.address || "Dhaka"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between">
        {/* Details Button */}
        <Link href={`/allUsers/${user._id}`}>
          <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:outline-none">
            Details
          </button>
        </Link>

        {/* Edit Button */}
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-amber-600 text-white font-semibold rounded-md shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-500 focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
