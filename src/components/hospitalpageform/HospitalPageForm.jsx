"use client";
import React from "react";
import { useForm } from "react-hook-form";

const HospitalPageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5 border border-gray-200 rounded">
      <div className="mb-5">
        <label className="block mb-2 font-medium font-poppins text-(">
          Company Name
        </label>
        <input
          type="text"
          {...register("companyName", { required: "Company name is required" })}
          className="w-full px-4 py-4 bg-[#e4e4e4] rounded-full outline-none"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm">{errors.companyName.message}</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="flex-1">
          <label className="block mb-2 font-medium font-poppins">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-4 bg-[#e4e4e4] rounded-full outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex-1">
          <label className="block mb-2 font-medium font-poppins">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
            className="w-full px-4 py-4 bg-[#e4e4e4] rounded-full outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium font-poppins">Role</label>

        <div className="relative">
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full px-4 py-4 bg-[#e4e4e4] font-poppins rounded-full outline-none appearance-none cursor-pointer"
          >
            <option value="">Select a role</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="fullstack">Fullstack Developer</option>
            <option value="designer">UI/UX Designer</option>
          </select>
          {/* Custom icon */}
          <span className="pointer-events-none absolute right-5 top-[50%] -translate-y-1/2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>

        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
      </div>

      <div className="mb-5">
        <label className="block mb-2 font-medium font-poppins">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full px-4 py-4 bg-[#e4e4e4] rounded-xl outline-none"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-(--main-theme-background) text-xl font-poppins text-white px-6 py-4 rounded-full cursor-pointer transition-all duration-300 hover:bg-(--main-theme-background)/80"
      >
        Submit
      </button>
    </form>
  );
};

export default HospitalPageForm;
