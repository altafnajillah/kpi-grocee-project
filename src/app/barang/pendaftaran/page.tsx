import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TablePendaftaran from "@/components/Tables/TablePendaftaran";

export const metadata: Metadata = {
  title: "Pendaftaran Barang",
  description: "Page Admin, pendaftaran pengelolaan barang",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="flex min-h-screen flex-col">
          <Breadcrumb pageName="Pendaftaran Barang" />
          <TablePendaftaran />
        </div>
      </DefaultLayout>
    </>
  );
}
