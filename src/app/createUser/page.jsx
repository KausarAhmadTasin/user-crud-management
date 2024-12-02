"use client";

import { addUser } from "@/redux/features/user/usersSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
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

    dispatch(addUser(formData));
    form.reset();
  };

  return (
    <form
      className="max-w-2xl mx-auto my-16 bg-gray-800 p-6 rounded-lg shadow-md text-white"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl text-center mb-4">User Details Form</h2>

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
      <h3 className="text-xl text-center my-8">Educational Qualifications</h3>

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

      <button
        type="submit"
        className="w-full bg-amber-500 text-black font-semibold py-2 rounded hover:bg-amber-400 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
