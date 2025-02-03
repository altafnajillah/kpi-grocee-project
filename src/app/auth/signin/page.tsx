import React from "react";
import { Metadata } from "next";
import FormLoginAdmin from "@/components/FormElements/FormLoginAdmin";

export const metadata: Metadata = {
  title: "SIMBA | Halaman Login",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative flex flex-1 flex-col">
        <FormLoginAdmin />
      </div>
    </div>
  );
};

export default SignIn;
