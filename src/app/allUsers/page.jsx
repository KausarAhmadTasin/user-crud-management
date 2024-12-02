"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "@/redux/features/user/usersSlice";
import UserCard from "@/components/shared/UserCard/UserCard";
const AllUsersPage = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.usersR);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-20 px-6">
      <h1 className="text-5xl text-slate-100 font-thin text-center mb-16">
        All Users
      </h1>

      {isLoading ? (
        <p className="text-center text-lg text-gray-300">Loading...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllUsersPage;
