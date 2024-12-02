"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUserById } from "@/redux/features/user/usersSlice";
import { useEffect, useState } from "react";
import Image from "next/image";
import EditUserModal from "@/components/EditModal/EditModal";

const UserDetails = ({ slug }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state) => state.usersR);

  useEffect(() => {
    if (slug) {
      dispatch(getUserById(slug));
    }
  }, [dispatch, slug]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = () => {
    setModalOpen(true);
  };

  if (isLoading) {
    return <p className="text-center text-lg text-gray-300">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }
  return (
    <div className="max-w-2xl mx-auto my-16 p-6 bg-gray-800 text-white rounded-lg shadow-md">
      {user ? (
        <>
          <div className="flex items-center justify-between mb-5">
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
          <div className="flex justify-center items-center mb-6">
            {user?.image ? (
              <Image
                width={400}
                height={250}
                src={user?.image || "https://picsum.photos/200"}
                alt={user?.name || "User Image"}
                className="w-72 h-72 object-cover shadow-md"
              />
            ) : (
              <div className="w-72 h-72 bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-400 shadow-md">
                {user?.name?.[0] || "N/A"}
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-4">
            {user?.name || "Abdur Rahim"}
          </h1>

          {/* Basic Info */}
          <div className="mb-6">
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Email:</span>
              {user?.email | "a@b.com"}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Age:</span>
              {user?.age || 25}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Gender:</span>
              {user?.gender | "male"}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Nationality:</span>
              {user?.nationality | "Bangladeshi"}
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Address:</span>
              {user?.address}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Phone:</span>
              {user?.phone}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Website:</span>
              <a
                href={user?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {user?.website}
              </a>
            </p>
          </div>

          {/* Skills */}
          <p className="flex items-center mb-6">
            <span className="font-bold mr-2">Skills:</span>
            {user?.skills}
          </p>

          {/* Educational Qualifications */}
          <h2 className="text-2xl font-semibold mb-4">
            Educational Qualifications
          </h2>
          <div className="mb-6">
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Degree:</span>
              {user?.educationalQualifications?.degree}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">University:</span>
              {user?.educationalQualifications?.university}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">Session:</span>
              {user?.educationalQualifications?.session}
            </p>
            <p className="flex items-center mb-2">
              <span className="font-bold mr-2">CGPA:</span>
              {user?.educationalQualifications?.cgpa}
            </p>
          </div>
        </>
      ) : (
        <p className="text-center text-lg text-gray-400">User not found.</p>
      )}
      {isModalOpen && (
        <EditUserModal user={user} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default UserDetails;
