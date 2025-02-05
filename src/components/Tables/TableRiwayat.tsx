"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface Peminjaman {
  tglPinjam: Date;
  tglKembali: Date;
  barang: { name: string };
  instansi: { name: string };
  status: number;
  ket: string;
}

const TableRiwayat = () => {
  const [data, setData] = useState<Peminjaman[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/peminjaman/riwayat");
      const data = await response.json();
      setData(data);
    }
    fetchData().then();
  }, []);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Jadwal Peminjaman
        </h4>
        <Link
          href={"#"}
          className="hover:bg-warning-600 ml-auto rounded-sm bg-warning px-2 py-1 text-white"
        >
          Hasilkan Laporan
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="rounded-sm bg-gray-2 dark:bg-meta-4">
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Tgl Peminjaman
                </h5>
              </th>
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Tgl Pengembalian
                </h5>
              </th>
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Barang
                </h5>
              </th>
              <th className="p-2.5 text-left sm:table-cell xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Peminjam
                </h5>
              </th>
              <th className="p-2.5 text-left sm:table-cell xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Keterangan
                </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum, key) => (
              <tr
                key={key}
                className={`${
                  key === data.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                }`}
              >
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">
                    {formatDate(datum.tglPinjam.toString())}
                  </p>
                </td>
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">
                    {formatDate(datum.tglKembali.toString())}
                  </p>
                </td>
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black">{datum.barang.name}</p>
                </td>
                <td className="p-2.5 text-left sm:table-cell xl:p-5">
                  <p className="text-black dark:text-white">
                    {datum.instansi.name}
                  </p>
                </td>
                <td className="p-2.5 text-left sm:table-cell xl:p-5">
                  <p className="text-black">{datum.ket}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableRiwayat;
