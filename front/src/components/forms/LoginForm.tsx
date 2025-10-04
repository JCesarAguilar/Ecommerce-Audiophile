"use client";

import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/services/auth.services";
import {
  ILoginFormsValues,
  loginInitialValues,
  loginValidationSchema,
} from "@/validators/loginSchema";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginForm() {
  const { setDataUser } = useAuth();
  const router = useRouter();

  const formik = useFormik<ILoginFormsValues>({
    initialValues: loginInitialValues,

    validationSchema: loginValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      const response = await loginUser(values);
      setDataUser(response);
      toast.success("Inicio de sesión realizado con éxito");
      router.push("/");
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1">
      <label htmlFor="email" className="label-form">
        Correo Electrónico:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        required
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.email && formik.touched.email ? (
        <p id="email-errors" className="text-red-500">
          {formik.errors.email}
        </p>
      ) : null}
      <label htmlFor="password" className="label-form">
        Contraseña:
      </label>
      <input
        id="password"
        type="password"
        name="password"
        required
        value={formik.values.password}
        onChange={formik.handleChange}
        className="label-input"
      />
      {formik.errors.password ? (
        <p id="password-errors" className="text-red-500">
          {formik.errors.password}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="mt-5 btn-primary"
      >
        {formik.isSubmitting ? "INICIANDO SESIÓN..." : "INICIAR SESIÓN"}
      </button>
    </form>
  );
}
