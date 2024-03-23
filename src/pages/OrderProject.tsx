import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@chakra-ui/react";

import { OrderProjectSchemaType, OrderProjectSchema } from "../lib/validation";
import { useAuth } from "../context/AuthContext";
import { useOrderProject } from "../lib/react-query";
import { useTranslation } from "react-i18next";

const OrderProject = () => {
  const [t] = useTranslation();
  const { user } = useAuth();

  const {
    mutate: orderProjectMutation,
    isLoading: orderProjectMutationLoading,
  } = useOrderProject();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderProjectSchemaType>({
    resolver: zodResolver(OrderProjectSchema),
    defaultValues: {
      isFree: true,
      description: "",
      phone: "",
    },
  });

  const onSubmit = (data: OrderProjectSchemaType) => {
    orderProjectMutation({
      isFree: data.isFree,
      number: data.phone,
      description: data.description,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
    });
  };

  return (
    <div className="min-h-screen mb-10">
      <div className="w-full py-32 bg-black/95 flex flex-col items-center justify-center px-4">
        <p className="text-white text-6xl lg:text-7xl">
          {t("order-project.title")}
        </p>
        <p className="text-lg mt-3 text-white/60">
          {" "}
          {t("order-project.subtitle")}
        </p>
      </div>

      <div className="flex flex-col items-center mt-10">
        <p className="text-5xl lg:text-6xl font-[iranyekan400] text-slate-900 leading-[4.2rem]">
          {t("order-project.form-title")}
        </p>
        <p className="text-base text-slate-700 mt-5 font-[iranyekan300] leading-7">
          {t("order-project.form-subtitle")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-8 sm:gap-y-12 mt-10 mx-auto max-w-sm lg:max-w-xl"
      >
        <Checkbox {...register("isFree")}>
          {t("order-project.is-free-label")}
        </Checkbox>
        {watch("isFree") === false && (
          <>
            <div className="space-y-4">
              <input
                type="text"
                className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full read-only:text-slate-500 read-only:focus:border-b-slate-300"
                placeholder={t("order-project.first-name-placeholder")}
                maxLength={80}
                value={user?.first_name || ""}
                readOnly={user !== null}
              />
            </div>

            <div className="space-y-4">
              <input
                type="text"
                className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full read-only:text-slate-500 read-only:focus:border-b-slate-300"
                placeholder={t("order-project.last-name-placeholder")}
                maxLength={80}
                value={user?.last_name || ""}
                readOnly={user !== null}
              />
            </div>

            <div className="space-y-4">
              <input
                type="email"
                className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full read-only:text-slate-500 read-only:focus:border-b-slate-300"
                placeholder={t("order-project.email-placeholder")}
                maxLength={80}
                value={user?.email || ""}
                readOnly={user !== null}
              />
            </div>
          </>
        )}

        <div className="space-y-4">
          <input
            type="text"
            className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 w-full"
            placeholder={t("order-project.phone-placeholder")}
            {...register("phone")}
          />
          {errors.phone && (
            <span className={"text-sm text-red-500"}>
              {errors.phone.message}
            </span>
          )}
        </div>

        <textarea
          className="text-base text-slate-900 font-[iranyekan300] focus:outline-none border-b
                        border-b-slate-300 p-3 pb-1 placeholder-slate-400 focus:border-b-slate-500
                        transition-colors duration-200 mt-6"
          placeholder={t("order-project.description-placeholder")}
          rows={5}
          maxLength={700}
          {...register("description")}
        ></textarea>
        {errors.description && (
          <span className={"text-sm text-red-500"}>
            {errors.description.message}
          </span>
        )}

        <button
          className="w-full max-w-md block mx-auto bg-black/90 text-white text-lg font-[iranyekan300]
                        py-3 mt-8 active:scale-95 transition-transform duration-300"
          disabled={orderProjectMutationLoading}
        >
          {orderProjectMutationLoading
            ? t("order-project.submit-btn-text-on-submit")
            : t("order-project.submit-btn-text")}
        </button>
      </form>
    </div>
  );
};

export default OrderProject;
