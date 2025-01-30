"use client";

import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";
import React, { useEffect, useState } from "react";

interface Institusi {
  id: number;
  name: string;
}

export default function TableInstitusi() {
  const [data, setData] = useState<Institusi[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/institutions");
      const data = await response.json();
      setData(data);
    }
    fetchData().then();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Daftar Institusi
        </h4>
        <Link
          href={"/institusi/create"}
          className="hover:bg-warning-600 ml-auto rounded-sm bg-warning px-2 py-1 text-white"
        >
          Tambah Institusi
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
                  Institusi
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
                  <div className="flex">
                    <Link
                      href={`/institusi/edit/${datum.id}`}
                      className="ml-1 rounded-sm bg-warning p-2 text-white"
                    >
                      <BsPencilSquare size={20} />
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
