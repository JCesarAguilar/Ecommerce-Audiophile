import { ILoginFormsValues } from "@/validators/loginSchema";
import { IRegisterFormValues } from "@/validators/registerSchema";
import { toast } from "sonner";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: IRegisterFormValues) => {
  try {
    const response = await fetch(`${apiURL}/users/register`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return { success: false };
  }
};

export const loginUser = async (userData: ILoginFormsValues) => {
  try {
    const response = await fetch(`${apiURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response.json();
    } else {
      toast.error("No se pudo iniciar sesión");

      throw new Error("Login Fallido");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
