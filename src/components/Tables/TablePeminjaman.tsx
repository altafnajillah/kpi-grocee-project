"use client";

import React, { useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { formatDate } from "@/lib/utils";
import SearchComponent from "../Search";

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

const TablePeminjaman = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

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
          <SearchComponent />
          <Link
            href={"/barang/peminjaman/create"}
            className="rounded-md bg-warning px-4 py-3 text-white"
          >
            <FaPlus />
          </Link>
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
              <th className="p-2.5 text-center sm:table-cell xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Status
                </h5>
              </th>
              <th className="p-2.5 text-left sm:table-cell xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Aksi
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
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">
                    {datum.instansi.name}
                  </p>
                </td>
                <td className="p-2.5 text-center xl:p-5">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      datum.status == 0
                        ? "bg-primary text-primary"
                        : datum.status == 1
                          ? "bg-warning text-warning"
                          : datum.status == 2
                            ? "bg-success text-success"
                            : "bg-danger text-danger"
                    }`}
                  >
                    {datum.status == 0
                      ? "Terjadwal"
                      : datum.status == 1
                        ? "Terpinjam"
                        : datum.status == 2
                          ? "Selesai"
                          : "Batal"}
                  </p>
                </td>
                <td className="p-2.5 xl:p-5">
                  <div className="flex">
                    <Link
                      href={`/barang/peminjaman/${datum.id}`}
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
};

export default TablePeminjaman;
