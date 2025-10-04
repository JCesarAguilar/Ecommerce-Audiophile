"use client";

import { registerUser } from "@/services/auth.services";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  IRegisterFormValues,
  registerInitialValues,
  registerValidationSchema,
} from "@/validators/registerSchema";

export default function RegisterForm() {
  const router = useRouter();
  const formik = useFormik<IRegisterFormValues>({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      const response = await registerUser(values);
      if (response.success) {
        toast.success("Registro realizado con éxito");
      } else {
        toast.error("Hubo un error al registrarse");
      }
      router.push("/login");
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1">
      <label htmlFor="name" className="label-form">
        Nombres y Apellidos:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.name && formik.touched.name ? (
        <p className="text-red-500">{formik.errors.name}</p>
      ) : null}

      <label htmlFor="address" className="label-form">
        Dirección:
      </label>
      <input
        id="address"
        name="address"
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.address && formik.touched.address ? (
        <p className="text-red-500">{formik.errors.address}</p>
      ) : null}

      <label htmlFor="phone" className="label-form">
        Teléfono:
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.phone && formik.touched.phone ? (
        <p className="text-red-500">{formik.errors.phone}</p>
      ) : null}

      <label htmlFor="email" className="label-form">
        Correo electrónico:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.email && formik.touched.email ? (
        <p className="text-red-500">{formik.errors.email}</p>
      ) : null}

      <label htmlFor="password" className="label-form">
        Contraseña:
      </label>
      <input
        id="password"
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.password && formik.touched.password ? (
        <p className="text-red-500">{formik.errors.password}</p>
      ) : null}

      <label htmlFor="confirmPassword" className="label-form">
        Confirmación de contraseña:
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="label-input"
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
        <p className="text-red-500">{formik.errors.confirmPassword}</p>
      ) : null}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="btn-primary mt-5"
      >
        {formik.isSubmitting ? "REGISTRANDO..." : "REGISTRAR"}
      </button>
    </form>
  );
}
