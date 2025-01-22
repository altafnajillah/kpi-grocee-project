import {Metadata} from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TablePenanggungjawab from "@/components/Tables/TablePenanggungjawab";

export const metadata: Metadata = {
    title: "SIMBA | Penanggungjawab",
};

export default function Home() {
    return (
        <>
            <DefaultLayout>
                <div className="flex flex-col min-h-screen">
                    <Breadcrumb pageName="PJ Barang"/>
                    <TablePenanggungjawab/>
                </div>
            </DefaultLayout>
        </>
    );
}
