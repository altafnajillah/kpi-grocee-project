import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SIMBA | Halaman Login",
};

const SignIn: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative flex flex-1 flex-col">
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 sm:w-3/4 md:w-2/3 xl:w-1/2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex flex-wrap items-center justify-between p-4 sm:p-12.5 xl:p-17.5">
                <span className="block font-medium">Selamat Datang</span>
                <Link
                  href={"/"}
                  className="ml-auto rounded-md bg-red-700 px-3 py-1 text-white hover:bg-opacity-90"
                >
                  Kembali
                </Link>
                <h2 className="mb-4 w-full text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                  Silahkan login ke SIMBA!
                </h2>
                <form className="w-full">
                  <div className="mb-4">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Masukkan email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-red-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-red-700"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Silahkan masukkan kata sandi"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-red-700 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-red-700"
                    />
                  </div>
                  <input
                    type="submit"
                    value="Login"
                    className="w-full cursor-pointer rounded-lg border border-red-700 bg-red-700 p-4 text-white transition hover:bg-opacity-90"
                  />
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignIn;
