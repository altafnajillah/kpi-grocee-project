import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormCreateDaftarBarang from "@/components/FormElements/FormCreateDaftarBarang";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pendaftaran Barang",
};

const BarangCreate = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pendaftaran Barang" />
      <FormCreateDaftarBarang />
    </DefaultLayout>
  );
};

export default BarangCreate;
