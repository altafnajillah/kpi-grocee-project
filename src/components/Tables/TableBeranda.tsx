"use client";

import { formatDate } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Peminjaman {
  tglPinjam: Date;
  tglKembali: Date;
  barang: { name: string };
  stok: number;
  instansi: { name: string };
  notelp: string;
  ket: string;
}

const TableBeranda = () => {
  const [data, setData] = useState<Peminjaman[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/peminjaman");
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
        <div className="flex">
          <input
            type="text"
            placeholder="Cari peminjaman..."
            className="mr-2 w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <button className="rounded-md bg-primary px-4 py-2 text-white">
            <FaSearch />
          </button>
        </div>
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
                  <p className="text-black">{`${datum.barang.name} ${datum.stok > 1 ? `(${datum.stok})` : ""}`}</p>
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

export default TableBeranda;
