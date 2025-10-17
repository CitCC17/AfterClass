import { User } from "../models/user";

export const registerUser = async (email, password) => {
  if (!email || !password) {
    throw new Error("Todos los campos son obligatorios");
  }

  // Aquí podrías agregar lógica para guardar el usuario en una API o Firebase
  const newUser = new User(email, password);
  console.log("Usuario registrado:", newUser);

  return newUser;
};
