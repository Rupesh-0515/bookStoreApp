import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2"'
            >
              X
            </Link>
            <h3 className="font-bold text-2xl ">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <textarea
                type="text"
                placeholder="Type your message"
                className="w-80 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className="flex mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
