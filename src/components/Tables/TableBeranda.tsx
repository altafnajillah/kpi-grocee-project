import { PEMINJAMAN } from "@/types/peminjaman";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const peminjamanData: PEMINJAMAN[] = [
  {
    tglpinjam: "Data",
    tglkembali: "Data",
    barang: "Data",
    peminjam: "Data",
    notelp: "Data",
    ket: "Data",
  },
];

const TableBeranda = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Jadwal Peminjaman
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tgl Peminjaman
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Tgl Pengembalian
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Barang
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Peminjam
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Keterangan
            </h5>
          </div>
        </div>

        {peminjamanData.map((data, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === peminjamanData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                {/*<Image*/}
                {/*  src={data.tglpinjam}*/}
                {/*  alt="Brand"*/}
                {/*  width={48}*/}
                {/*  height={48}*/}
                {/*/>*/}
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {data.tglpinjam}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{data.tglkembali}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{data.barang}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{data.peminjam}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{data.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableBeranda;
