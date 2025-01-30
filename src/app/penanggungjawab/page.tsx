"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import Loader from "@/components/common/Loader";

interface pjBarang {
  id: number;
  name: string;
  notelp: string;
  alamat: string;
}

export default function PjBarang() {
  const [data, setData] = useState<pjBarang[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/pjBarang");
      const data = await response.json();
      setData(data);
    }
    fetchData().then();
  }, []);

  if (!data) return <Loader />;

  return (
    <DefaultLayout>
      <div className="flex min-h-screen flex-col">
        <Breadcrumb pageName="PJ Barang" />
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="mb-6 flex flex-wrap items-center justify-between">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Daftar Penanggungjawab
            </h4>
            <Link
              href={"/penanggungjawab/create"}
              className="hover:bg-warning-600 ml-auto rounded-sm bg-warning px-2 py-1 text-white"
            >
              Tambah PJ
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 dark:bg-meta-4">
                  <th className="p-2.5 text-left xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Nama
                    </h5>
                  </th>
                  <th className="p-2.5 text-left xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      No. Telepon
                    </h5>
                  </th>
                  <th className="p-2.5 text-left xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Alamat
                    </h5>
                  </th>
                  <th className="p-2.5 text-left xl:p-5">
                    <h5 className="text-sm font-medium uppercase xsm:text-base">
                      Aksi
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((datum) => (
                  <tr key={datum.id}>
                    <td className="border-b border-[#eee] p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">{datum.name}</p>
                    </td>
                    <td className="border-b border-[#eee] p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">
                        {datum.notelp}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">
                        {datum.alamat}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] p-2.5 xl:p-5">
                      <div className="flex">
                        <Link
                          href={`/penanggungjawab/${datum.id}`}
                          className="ml-1 rounded-sm bg-success p-2 text-white"
                        >
                          <IoDocumentText size={20} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
