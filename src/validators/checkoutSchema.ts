import * as Yup from "yup";

// Interface de los valores del formulario
export interface ICheckoutFormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
}

// Valores iniciales del formulario
export const checkoutInitialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
  country: "",
};

// Esquema de validación del formulario
export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Este campo es obligatorio")
    .required("Este campo es obligatorio"),
  phone: Yup.string()
    .matches(
      /^[0-9+\-\s()]+$/,
      "El teléfono debe contener solo números y caracteres válidos"
    )
    .required("Este campo es obligatorio"),
  address: Yup.string().required("Este campo es obligatorio"),
  zip: Yup.string()
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, "El código postal no es válido")
    .required("Este campo es obligatorio"),
  city: Yup.string().required("Este campo es obligatorio"),
  country: Yup.string().required("Este campo es obligatorio"),
});
