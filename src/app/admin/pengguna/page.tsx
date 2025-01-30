import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableUser from "@/components/Tables/TableUser";
import React from "react";

function UserListPage() {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pengguna" />
      <TableUser />
    </DefaultLayout>
  );
}

export default UserListPage;
