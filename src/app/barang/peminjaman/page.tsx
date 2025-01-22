import {Metadata} from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TablePeminjaman from "@/components/Tables/TablePeminjaman";

export const metadata: Metadata = {
    title: "Peminjaman Barang",
    description: "Page Admin, peminjaman pengelolaan barang",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <div className="flex flex-col min-h-screen">
                    <Breadcrumb pageName="Peminjaman Barang"/>
                    <TablePeminjaman/>
                </div>
            </DefaultLayout>
        </>
    );
}
