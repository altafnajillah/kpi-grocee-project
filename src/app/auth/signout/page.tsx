import { signOut } from "@/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tinggalkan SIMBA?",
};

const SignOutPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="min-w-max max-w-md rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="text-2xl font-semibold text-black dark:text-white">
            Yakin Untuk Keluar?
          </h3>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <div className="p-6.5">
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Sign Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignOutPage;
