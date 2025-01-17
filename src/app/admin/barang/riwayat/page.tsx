import {Metadata} from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableRiwayat from "@/components/Tables/TableRiwayat";

export const metadata: Metadata = {
    title: "Pengembalian Barang",
    description: "Page Admin, riwayat pengelolaan barang",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Riwayat"/>

                <TableRiwayat/>
            </DefaultLayout>
        </>
    );
}
