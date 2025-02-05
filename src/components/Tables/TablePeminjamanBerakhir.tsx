"use client";

import React, { useEffect, useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface Peminjaman {
  id: string;
  tglPinjam: Date;
  tglKembali: Date;
  barang: { name: string };
  stok: number;
  instansi: { name: string };
  status: number;
  ket: string;
}

const TablePeminjamanBerakhir = ({ data }: { data: Peminjaman[] }) => {

  return (
    <div className="rounded-sm border border-stroke bg-red-50 px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between ">
        <h4 className="text-xl font-bold text-red-700 dark:text-white">
          Peminjaman Berakhir
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto rounded-lg">
          <thead>
            <tr className="rounded-md bg-meta-1 dark:bg-meta-4">
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase text-white xsm:text-base">
                  Tgl Peminjaman
                </h5>
              </th>
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase text-white xsm:text-base">
                  Tgl Pengembalian
                </h5>
              </th>
              <th className="p-2.5 text-left xl:p-5">
                <h5 className="text-sm font-medium uppercase text-white xsm:text-base">
                  Barang
                </h5>
              </th>
              <th className="p-2.5 text-left sm:table-cell xl:p-5">
                <h5 className="text-sm font-medium uppercase text-white xsm:text-base">
                  Peminjam
                </h5>
              </th>
              {/*<th className="p-2.5 text-left sm:table-cell xl:p-5">*/}
              {/*    <h5 className="text-sm text-white font-medium uppercase xsm:text-base">*/}
              {/*        Keterangan*/}
              {/*    </h5>*/}
              {/*</th>*/}
              <th className="p-2.5 text-left sm:table-cell xl:p-5">
                <h5 className="text-sm font-medium uppercase text-white xsm:text-base">
                  Aksi
                </h5>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum, key) => (
              <tr key={key}>
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
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">
                    {datum.instansi.name}
                  </p>
                </td>
                <td className="">
                  <div className="flex p-2.5 sm:flex xl:p-5">
                    <Link
                      href={`/barang/peminjaman/${datum.id}`}
                      className={"ml-1 rounded-sm bg-success p-2 text-white"}
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
};

export default TablePeminjamanBerakhir;
