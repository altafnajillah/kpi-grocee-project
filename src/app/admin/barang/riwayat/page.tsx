import {Metadata} from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
    title: "Pengembalian Barang",
    description: "Page Admin, riwayat pengelolaan barang",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <Breadcrumb pageName="Riwayat"/>

                <h1>Riwayat</h1>
            </DefaultLayout>
        </>
    );
}
