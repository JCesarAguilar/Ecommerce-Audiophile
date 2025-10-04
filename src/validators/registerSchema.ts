import * as Yup from "yup";

// Interface de los valores del formulario
export interface IRegisterFormValues {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Valores iniciales del formulario
export const registerInitialValues = {
  name: "",
  email: "",
  address: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

// Esquema de validación para el formulario
export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Este campo es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico es obligatorio"),
  address: Yup.string().required("Este campo es obligatorio"),
  phone: Yup.string()
    .matches(
      /^[0-9+\-\s()]+$/,
      "El teléfono debe contener solo números y caracteres válidos"
    )
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .matches(/[@$!%*?&#]/, "Debe contener al menos un carácter especial")
    .required("La contraseña es requerida"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Las 2 contraseñas deben coincidir"
  ),
});
