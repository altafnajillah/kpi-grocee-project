import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormPeminjamanCreate from "@/components/FormElements/FormPeminjamanCreate";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "SIMBA | Peminjaman Baru",
};

const PeminjamCreatePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Peminjaman Baru" />
      <FormPeminjamanCreate />
    </DefaultLayout>
  );
};

export default PeminjamCreatePage;
