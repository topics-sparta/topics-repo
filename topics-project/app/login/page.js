"use client";

import { login } from "./actions";
import { useFormStatus, useFormState } from "react-dom";
import { Loader, BadgeAlert, BadgeCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import {
  Alert,
  AlertTitle,
} from "../../@/components/alert";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="w-full rounded-md h-14 mt-4 bg-customSecondary hover:bg-customAccent transition-colors duration-300 flex justify-center items-center"
      disabled={pending}
    >
      <p className="text-xl font-poppins font-bold text-customPrimary">
        {pending ? <Loader className="w-4 h-4 animate-spin" /> : "LOGIN"}
      </p>
    </button>
  );
}

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, {
    message: "",
    errors: undefined,
    fieldValues: {
      email: "",
      password: "",
    },
  });

  const formRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (formState.message === "success") {
      formRef.current?.reset();
      // TO DO: Add routing to dashboard when route is created
      setTimeout(() => {
        router.push('/home');
      }, 0); // Delay navigation very briefly to ensure the router is ready
    }
  }, [formState, router]);

  return (
    <div className="w-full bg-customPrimary min-h-[calc(100vh-64px)] relative">
      {formState.message === "success" ? (
        <div className="absolute top-0 left-0 right-0 mx-auto max-w-60 font-redHatText animate-fade-down animate-duration-300 animate-ease-in-out">
          <Alert className="rounded-md border-transparent bg-green-400 text-white flex items-center justify-center gap-2">
            <BadgeCheck className="h-4 w-4" color="white" />
            <AlertTitle>Success!</AlertTitle>
          </Alert>
        </div>
      ) : (
        formState.message === "error" && (
          <div className="absolute top-0 left-0 right-0 mx-auto max-w-60 font-redHatText animate-fade-down animate-duration-300 animate-ease-in-out">
            <Alert className="rounded-md border-transparent bg-red-400 text-white flex items-center justify-center gap-2">
              <BadgeAlert className="h-4 w-4" color="white" />
              <AlertTitle>{formState.errors}</AlertTitle>
            </Alert>
          </div>
        )
      )}
      <div className="mx-auto px-4 lg:px-0 lg:max-w-screen-xl mt-8 mb-4 flex flex-col justify-center items-start md:items-center gap-8">
        <p className="font-bold text-4xl md:text-5xl text-customAccent font-poppins">
          Sign In
        </p>
        <form
          ref={formRef}
          className="flex flex-col w-full md:w-5/12 gap-4"
          action={formAction}
        >
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="font-redHatText font-medium text-xl text-customAccent"
            >
              Email
            </label>
            <input
              className="h-12 rounded-md border-customAccent border-2 border-solid pl-4 font-redHatText text-base"
              placeholder="Enter email"
              id="email"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-redHatText font-medium text-xl text-customAccent"
            >
              Password
            </label>
            <input
              className="h-12 rounded-md border-customAccent border-2 border-solid pl-4 font-redHatText text-base"
              placeholder="Enter password"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <SubmitButton />
            {/* TO DO: Add Routing to sign in page to span */}
            <p className="text-sm font-redHatText font-medium text-customAccent/40">
              Dont have an account?{" "}
              <span className="text-customAccent">Sign Up Now!</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
