"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "@/components/shared/UserCard/UserCard";
import { getUsers } from "@/redux/features/user/usersSlice";
import Link from "next/link";

const FeaturedUsers = () => {
  const dispatch = useDispatch();

  const { users, isLoading, error } = useSelector((state) => state.usersR);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-5xl text-slate-100 font-thin text-center mb-16">
        Featured Users
      </h1>

      {isLoading ? (
        <p className="text-center text-lg text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : (
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-10">
            {users.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center my-10">
            <Link href={"/allUsers"}>
              <button className="bg-indigo-600 py-2 px-8 rounded-lg active:scale-95 text-white font-medium text-lg">
                Show All
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedUsers;
