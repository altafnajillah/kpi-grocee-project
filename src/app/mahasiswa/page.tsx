import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableMahasiswa from "@/components/Tables/TableMahasiswa";

export const metadata: Metadata = {
  title: "Data Mahasiswa",
  description: "Ini Data Mahasiswa dari Tabel Mahasiswa",
};

const Mahasiswa = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName={"Data Mahasiswa"} />
      <TableMahasiswa />
    </DefaultLayout>
  );
};

export default Mahasiswa;
