"use client";
import React from "react";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignIn = () => {
  return (
    <section className="bg-bannerImg1 bg-cover bg-bottom">
      <div className="flex size-full h-screen w-full flex-col items-center justify-center bg-blackOverlay">
        <h3 className="mb-8 text-center text-2xl font-semibold text-white drop-shadow-md">
          Create your account now!
        </h3>
        <div>
          <AuthForm
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{ username: "", password: "" }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
