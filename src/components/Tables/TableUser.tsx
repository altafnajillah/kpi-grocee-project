"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import Loader from "../common/Loader";

interface users {
  id: number;
  name: string;
  email: string;
}

export default function TableUser() {
  const [data, setData] = useState<users[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setData(data);
    }
    fetchData().then();
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Daftar Admin
        </h4>
        <Link
          href={"/admin/pengguna/create"}
          className="hover:bg-warning-600 ml-auto rounded-sm bg-warning px-2 py-1 text-white"
        >
          Tambah Admin
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 dark:bg-meta-4">
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  #
                </h5>
              </th>
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Nama
                </h5>
              </th>
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Email
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
            {data.map((datum, key) => (
              <tr key={datum.id}>
                <td className="p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{key + 1}</p>
                </td>
                <td className="p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{datum.name}</p>
                </td>
                <td className="p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{datum.email}</p>
                </td>
                <td className="p-2.5 xl:p-5">
                  <div className="flex">
                    <Link
                      href={`/admin/pengguna/${datum.id}`}
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
  );
}
