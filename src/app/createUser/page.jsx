"use client";

import { addUser } from "@/redux/features/user/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const UserForm = () => {
  const dispatch = useDispatch();

  const { users, isLoading, error } = useSelector((state) => state.usersR);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    nationality: "",
    skills: "",
    nid: "",
    address: "",
    email: "",
    phone: "",
    website: "",
    image: "",
    educationalQualifications: {
      degree: "",
      university: "",
      session: "",
      cgpa: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("educationalQualifications")) {
      const field = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        educationalQualifications: {
          ...prevData.educationalQualifications,
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure formData is correct before dispatching
    dispatch(addUser(formData));

    // Optionally reset the form fields
    setFormData({
      name: "",
      age: "",
      gender: "",
      nationality: "",
      skills: "",
      nid: "",
      address: "",
      email: "",
      phone: "",
      website: "",
      image: "",
      educationalQualifications: {
        degree: "",
        university: "",
        session: "",
        cgpa: "",
      },
    });
  };

  useEffect(() => {
    // Dispatch the action to fetch users when the component mounts
    // dispatch(getUsers());  // Uncomment if you need to fetch users initially
  }, [dispatch]);

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
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
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
          value={formData.nationality}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">NID</label>
        <input
          type="text"
          name="nid"
          value={formData.nid}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Website</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      {/* Educational Qualifications */}
      <h3 className="text-xl text-center my-8">Educational Qualifications</h3>

      <div className="mb-4">
        <label className="block mb-2">Degree</label>
        <input
          type="text"
          name="educationalQualifications.degree"
          value={formData.educationalQualifications.degree}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">University</label>
        <input
          type="text"
          name="educationalQualifications.university"
          value={formData.educationalQualifications.university}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Session</label>
        <input
          type="text"
          name="educationalQualifications.session"
          value={formData.educationalQualifications.session}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">CGPA</label>
        <input
          type="number"
          step="0.01"
          name="educationalQualifications.cgpa"
          value={formData.educationalQualifications.cgpa}
          onChange={handleChange}
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
