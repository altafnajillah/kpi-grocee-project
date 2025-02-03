import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormCreateAdmin from "@/components/FormElements/FormCreateAdmin";

export const metadata: Metadata = {
  title: "SIMBA | Tambahkan Admin",
  // other metadata
};

const PenggunaCreate: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tambah Admin" />
      <FormCreateAdmin />
    </DefaultLayout>
  );
};

export default PenggunaCreate;
