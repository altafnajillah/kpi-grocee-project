import { object, string } from "zod";

export const SignInSchema = object({
  email: string().email("Email tidak valid"),
  password: string()
    .min(6, "Password harus lebih dari 8 Karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
});

export const RegisterSchema = object({
  name: string().min(1, "Nama harus lebih dari satu karakter"),
  email: string().email("Email tidak valid"),
  password: string()
    .min(6, "Password harus lebih dari 8 Karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
  confirmPassword: string()
    .min(6, "Password harus lebih dari 8 Karakter")
    .max(32, "Password harus kurang dari 32 karakter"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password dan konfirmasi tidak sama",
  path: ["confirmPassword"],
});
