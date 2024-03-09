import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { t } from "i18next";
import { SignUpSchemaType, SignUpSchema } from "../../lib/validation";
import { Link } from "react-router-dom";
import { useSignUp } from "../../lib/react-query";

const SignUp = () => {
  const { mutate, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignUpSchemaType) => {
    mutate({
      username: data.username,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="min-h-screen mb-10">
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">Sign Up</p>
        <p className="text-lg mt-3 text-white/60">Auth - SignUp</p>
      </div>

      <div className="flex flex-col items-center mt-10">
        <p className="text-5xl lg:text-6xl font-[iranyekan400] text-slate-900 leading-[4.2rem]">
          Sign Up
        </p>
        <p className="text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
          Create an account to get bla bla bla
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-8 sm:gap-y-12 mt-10 mx-auto max-w-sm lg:max-w-xl"
      >
        <div className="space-y-4">
          <input
            type="text"
            className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full"
            placeholder={t("contact-us.form.name")}
            maxLength={80}
            {...register("username")}
          />

          {errors.username && (
            <p className={"text-sm text-red-500"}>{errors.username.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <input
            type="email"
            className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full"
            placeholder={t("contact-us.form.email")}
            maxLength={80}
            {...register("email")}
          />

          {errors.email && (
            <p className={"text-sm text-red-500"}>{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <input
            type="password"
            className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full"
            placeholder={"Password"}
            maxLength={80}
            {...register("password")}
          />
          {errors.password && (
            <p className={"text-sm text-red-500"}>{errors.password.message}</p>
          )}
        </div>

        <button
          className="w-full max-w-md block mx-auto bg-black/90 text-white text-lg font-[iranyekan300]
                        py-3 mt-8 active:scale-95 transition-transform duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="mt-10 text-center">
        Already have an account?&nbsp;
        <Link className="text-blue-500" to={"/sign-in"}>
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
