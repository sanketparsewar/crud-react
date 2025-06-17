import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";

function Form({ name, setName, isEditing, onSubmit }) {
//   const { register, handleSubmit,reset } = useForm();
//   const [data, setData] = useState("");
//   const handleOnSubmit = (data) => {
//     setData(JSON.stringify({ ...data, id: Date.now() }));
//     onSubmit({ ...data, id: Date.now() })
//     console.log({ ...data, id: Date.now() });
//     reset()
    
//   };
  return (
    <>
      {/* <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          maxLength={25}
          {...register("name")}
          placeholder="First name"
        />

        <Input {...register("location")} placeholder="Location" />
        <p>{data}</p>
        <Button
          type="submit"
          className={` ${
            isEditing
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          } cursor-pointer text-white px-4 py-2 rounded-lg  transition-colors`}
        >
          {" "}
          {isEditing ? "Update" : "Add"}
        </Button>
      </form> */}


      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full sm:flex-row justify-center items-center gap-3 my-4"
      >
        <Input
          placeholder="Enter name"
          className="border w-100 sm:w-auto  px-3 py-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          value={name}
          maxLength={25}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type="submit"
          className={` ${
            isEditing
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-green-500 hover:bg-green-600"
          } cursor-pointer text-white px-4 py-2 rounded-lg  transition-colors`}
        >
          {isEditing ? "Update" : "Add"}
        </Button>
      </form>
    </>
  );
}

export default Form;
