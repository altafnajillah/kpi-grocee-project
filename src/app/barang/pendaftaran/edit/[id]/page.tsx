import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormEditDaftarBarang from "@/components/FormElements/FormEditDaftarBarang";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit Barang",
};

const EditDaftarBarangPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Edit Barang" />
      <FormEditDaftarBarang />
    </DefaultLayout>
  );
};

export default EditDaftarBarangPage;
