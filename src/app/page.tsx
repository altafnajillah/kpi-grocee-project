import { Metadata } from "next";
import React from "react";
import PublicLayout from "@/components/Layouts/PublicLayout";
import TablePublic from "@/components/Tables/TablePublic";

export const metadata: Metadata = {
  title: "SIMBA | Beranda Peminjaman",
};

export default function Home() {
  return (
    <PublicLayout>
      <div className="h-screen bg-[url('/images/bg/unsulbar9.jpeg')] bg-cover pt-5">
        <div className="flex items-center justify-center">
          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12">
              <TablePublic />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
