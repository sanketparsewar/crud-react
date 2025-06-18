import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form({ user, setUser, error, isEditing, onSubmit }) {
  return (
    <>
      <h2 className="text-xl text-center">
        {isEditing ? "Edit User" : "Add User"}
      </h2>
      <p className="text-center text-gray-500 text-sm">
        {isEditing
          ? "You can edit the user details below."
          : "Please fill in the details to add a new user."}
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full sm:flex-row justify-center items-center gap-3 my-4"
      >
        <Input
          placeholder="Enter name"
          type="text"
          value={user.name}
          maxLength={25}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Input
          placeholder="Enter Phone Number"
          type="tel"
          value={user.phone}
          maxLength={10}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <Input
          placeholder="Enter Location"
          type="text"
          value={user.location}
          maxLength={25}
          onChange={(e) => setUser({ ...user, location: e.target.value })}
        />
        <Button
          type="submit"
          className={` ${
            isEditing
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-700 hover:bg-green-600"
          } text-white px-4 py-2 rounded-lg  transition-colors`}
        >
          {isEditing ? "Update" : "Add"}
        </Button>
      </form>
      <div className="text-center">
        <p className="text-red-500 text-sm">{error ? error : ""}</p>
      </div>
    </>
  );
}

export default Form;
