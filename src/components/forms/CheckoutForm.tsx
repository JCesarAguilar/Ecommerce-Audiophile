"use client";

import { useFormik } from "formik";
import { H1, H2 } from "../common/Typography";
import {
  checkoutInitialValues,
  checkoutValidationSchema,
  ICheckoutFormValues,
} from "@/validators/checkoutSchema";

export default function CheckoutForm() {
  const formik = useFormik<ICheckoutFormValues>({
    initialValues: checkoutInitialValues,
    validationSchema: checkoutValidationSchema,

    onSubmit: (values: ICheckoutFormValues) => {
      console.log("Valores del formulario", values);
    },
  });

  return (
    <form className="flex flex-col gap-1">
      <H1 className="tracking-wider">CHECKOUT</H1>
      <H2 className="text-orange-strong pb-3 pt-7">BILLING DETAILS</H2>
      <label htmlFor="name" className="label-form-2">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Juan Perez"
        className="label-input-2"
      />
      {formik.errors.name && formik.touched.name ? (
        <p className="text-red-500">{formik.errors.name}</p>
      ) : null}

      <label htmlFor="email" className="label-form-2">
        Correo Electrónico
      </label>
      <input
        id="email"
        name="email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="correo@mail.com"
        className="label-input-2"
      />
      {formik.errors.email && formik.touched.email ? (
        <p className="text-red-500">{formik.errors.email}</p>
      ) : null}

      <label htmlFor="phone" className="label-form-2">
        Teléfono
      </label>
      <input
        id="phone"
        name="phone"
        type="text"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="+51 978-234-341"
        className="label-input-2"
      />
      {formik.errors.phone && formik.touched.phone ? (
        <p className="text-red-500">{formik.errors.phone}</p>
      ) : null}

      <H2 className="text-orange-strong pb-3 pt-5">SHIPPING INFO</H2>

      <label htmlFor="address" className="label-form-2">
        Dirección
      </label>
      <input
        id="address"
        name="address"
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Av. Yanahuara 187"
        className="label-input-2"
      />
      {formik.errors.address && formik.touched.address ? (
        <p className="text-red-500">{formik.errors.address}</p>
      ) : null}

      <label htmlFor="zip" className="label-form-2">
        Código Postal
      </label>
      <input
        id="zip"
        name="zip"
        type="text"
        value={formik.values.zip}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="10001"
        className="label-input-2"
      />
      {formik.errors.zip && formik.touched.zip ? (
        <p className="text-red-500">{formik.errors.zip}</p>
      ) : null}

      <label htmlFor="city" className="label-form-2">
        Ciudad
      </label>
      <input
        id="city"
        name="city"
        type="text"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Arequipa"
        className="label-input-2"
      />
      {formik.errors.city && formik.touched.city ? (
        <p className="text-red-500">{formik.errors.city}</p>
      ) : null}

      <label htmlFor="country" className="label-form-2">
        País
      </label>
      <input
        id="country"
        name="country"
        type="text"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Perú"
        className="label-input-2"
      />
      {formik.errors.country && formik.touched.country ? (
        <p className="text-red-500">{formik.errors.country}</p>
      ) : null}

      {/* <button type="submit" className="btn-primary mt-5">
        COMPRAR
      </button> */}
    </form>
  );
}
