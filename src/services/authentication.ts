import axios from "axios";

const loginService = (username: string, password: string) =>
  axios.post("/api/auth/login", {
    username,
    password,
  });

const signupService = (
  firstname: string,
  username: string,
  lastname: string,
  password: string
) =>
  axios.post("/api/auth/signup", {
    firstname,
    username,
    lastname,
    password,
    bio: "",
    bioLink: "",
    profilePicture: "",
    backgroundPicture: "",
  });

export { loginService, signupService };
