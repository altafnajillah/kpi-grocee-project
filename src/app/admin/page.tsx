import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Beranda from "@/components/Dashboard/Beranda";

export const metadata: Metadata = {
  title: "Beranda Admin",
  description: "Beranda pengelolaan admin",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Beranda />
      </DefaultLayout>
    </>
  );
}
