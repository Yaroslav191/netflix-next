import Input from "@/components/input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const Auth = () => {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");

   const [variant, setVariant] = useState("login");

   const toggleVariant = useCallback(() => {
      setVariant((currentVariant) =>
         currentVariant === "login" ? "register" : "login"
      );
   }, []);

   const register = useCallback(async () => {
      try {
         console.log(email, name, password);
         await axios.post("/api/register", {
            email,
            name,
            password,
         });
      } catch (error) {
         console.log(error);
      }
   }, [email, name, password]);

   const login = useCallback(async () => {
      try {
         await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: "/",
         });
      } catch (error) {
         console.log(error);
      }
   }, [email, password]);

   return (
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
         <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
               <img src="/images/logo.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex justify-center">
               <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                  <h2 className="text-white text-4xl mb-8 font-semibold">
                     {variant === "login" ? "Sign In" : "Create an account"}
                  </h2>
                  <div className="flex flex-col gap-4">
                     {variant === "register" && (
                        <Input
                           label="name"
                           onChange={(e: any) => {
                              setName(e.target.value);
                           }}
                           type=""
                           value={name}
                           id="name"
                        />
                     )}
                     <Input
                        label="Email"
                        onChange={(e: any) => {
                           setEmail(e.target.value);
                        }}
                        type="email"
                        value={email}
                        id="email"
                     />

                     <Input
                        label="Password"
                        onChange={(e: any) => {
                           setPassword(e.target.value);
                        }}
                        type="password"
                        value={password}
                        id="password"
                     />
                  </div>
                  <button
                     onClick={variant === "login" ? login : register}
                     className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                  >
                     {variant === "login" ? "Login" : "Sign up"}
                  </button>
                  <p className="text-neutral-500 mt-12">
                     {variant === "login"
                        ? "First time using Netflix?"
                        : "Already have an account"}

                     <span
                        onClick={toggleVariant}
                        className="text-white ml-1 hover:underline cursor-pointer"
                     >
                        {variant === "login" ? "Create an account" : "Login"}
                     </span>
                  </p>
               </div>
            </div>
            <button
               onClick={register}
               className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
               {variant === "login" ? "Login" : "Sign up"}
            </button>
            <p className="text-neutral-500 mt-12">
               {variant === "login"
                  ? "First time using Netflix?"
                  : "Already have an account"}

               <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer"
               >
                  {variant === "login" ? "Create an account" : "Login"}
               </span>
            </p>
         </div>
      </div>
   );
};

export default Auth;
