import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import TableInstitusi from "@/components/Tables/TableInstitusi";

export const metadata: Metadata = {
  title: "SIMBA | Institusi",
};

const InstitusiPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName={"Institusi"} />
      <TableInstitusi />
    </DefaultLayout>
  );
};

export default InstitusiPage;
