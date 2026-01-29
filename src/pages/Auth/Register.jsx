import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (data) => {
    console.log("data", data);
    registerUser(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered User:", user);
      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto"
      >
        <h3 className="text-3xl text-center">Welcome to ZapShift</h3>
        <p className="text-center">Create your account to get started</p>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /[A-Za-z]{3}.*[!@#$%^&*]/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500">This field is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500">
              Password must be at least 6 characters
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-red-500">
              Password must contain a special character
            </span>
          )}

          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-md mt-2">
            already have an account? please{" "}
            <a href="/login" className="text-blue-500">
              login
            </a>
          </p>
        </fieldset>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
