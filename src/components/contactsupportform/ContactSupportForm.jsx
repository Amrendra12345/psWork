// components/EmailForm.jsx
"use client";
import { useForm } from "react-hook-form";

let ContactSupportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(`Submitted: ${data.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-[120px] md:min-h-[76px] px-3 md:px-4">
      <div className="flex items-center flex-col md:flex-row gap-4">
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          className="w-full md:w-[450px] bg-white/20 text-white placeholder-white focus:outline-none px-4 py-2 rounded-full"
        />
        <button type="submit" className="bg-white rounded-full w-full md:w-[150px] text-sm py-2 cursor-pointer">
          Submit a Request
        </button>
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm p-2">{errors.email.message}</p>
      )}
    </form>
  );
};

export default ContactSupportForm;
