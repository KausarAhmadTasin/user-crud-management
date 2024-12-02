import UserCard from "@/components/shared/UserCard/UserCard";
import React from "react";

const FeaturedUsers = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-slate-100 font-thin text-center mb-16">
        Featured Users
      </h1>
      <UserCard />
    </div>
  );
};

export default FeaturedUsers;
