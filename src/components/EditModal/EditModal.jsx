"use client";

import { updateUser } from "@/redux/features/user/usersSlice";
import { useDispatch } from "react-redux";

const EditUserModal = ({ user, onClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      age: form.age.value,
      gender: form.gender.value,
      nationality: form.nationality.value,
      skills: form.skills.value,
      nid: form.nid.value,
      address: form.address.value,
      email: form.email.value,
      phone: form.phone.value,
      website: form.website.value,
      image: form.image.value,
      educationalQualifications: {
        degree: form.degree.value,
        university: form.university.value,
        session: form.session.value,
        cgpa: form.cgpa.value,
      },
    };

    dispatch(updateUser(formData));
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 my-5 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div onClick={(e) => e.stopPropagation()} className="overflow-x-auto">
        <form
          className="w-[65rem] mx-auto my-16 bg-gray-800 p-6 rounded-lg shadow-md text-white"
          onSubmit={handleSubmit}
        >
          <div className="relative grid grid-cols-3 gap-x-8">
            <button
              onClick={onClose}
              className="absolute -top-16 -right-6 text-2xl bg-red-500 z-50 hover:bg-red-400 text-white rounded-full w-14 h-16 flex items-center justify-center"
            >
              &times;
            </button>
            {/* General Information */}
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Age</label>
              <input
                type="number"
                name="age"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Gender</label>
              <select
                name="gender"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Nationality</label>
              <input
                type="text"
                name="nationality"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Skills</label>
              <input
                type="text"
                name="skills"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">NID</label>
              <input
                type="text"
                name="nid"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Address</label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Website</label>
              <input
                type="url"
                name="website"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Image URL</label>
              <input
                type="url"
                name="image"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            {/* Educational Qualifications */}

            <div className="mb-4">
              <label className="block mb-2">Degree</label>
              <input
                type="text"
                name="degree"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">University</label>
              <input
                type="text"
                name="university"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Session</label>
              <input
                type="text"
                name="session"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">CGPA</label>
              <input
                type="number"
                step="0.01"
                name="cgpa"
                className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-black font-semibold py-2 rounded hover:bg-amber-400 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
