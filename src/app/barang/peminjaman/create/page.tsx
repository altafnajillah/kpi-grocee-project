import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import FormPeminjamanCreate from "@/components/FormElements/FormPeminjamanCreate";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";

const PeminjamCreatePage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Peminjaman Baru" />
      <FormPeminjamanCreate />
    </DefaultLayout>
  );
};

export default PeminjamCreatePage;
