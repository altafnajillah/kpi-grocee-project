import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Beranda from "@/components/Dashboard/Beranda";
import HelloUser from "@/components/HelloUser";

export const metadata: Metadata = {
  title: "Beranda Admin",
  description: "Beranda pengelolaan admin",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Beranda />
        <HelloUser />
      </DefaultLayout>
    </>
  );
}
