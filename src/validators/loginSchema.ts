import * as Yup from "yup";

//Interfaz de los valores del formulario
export interface ILoginFormsValues {
  email: string;
  password: string;
}

//Valores iniciales de mi formulario
export const loginInitialValues: ILoginFormsValues = {
  email: "",
  password: "",
};

//Esquema de validación para el formulario

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});
