import { Metadata } from "next";
import TableBeranda from "@/components/Tables/TableBeranda";
import React from "react";
import PublicLayout from "@/components/Layouts/PublicLayout";

export const metadata: Metadata = {
  title: "SIMBA | Beranda Peminjaman",
};

export default function Home() {
  return (
      <PublicLayout>
        <div
            className="relative h-screen bg-[url('/images/bg/unsulbar9.jpeg')] bg-cover"
        >
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div> {/* Ini untuk lapisan gelap */}
          <div className="relative z-20 mb-6 flex w-full">
          </div>
          <div className="relative z-20 flex items-center justify-center">
            <TableBeranda />
          </div>
        </div>
      </PublicLayout>
  );
}
