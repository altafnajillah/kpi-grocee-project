import { PEMINJAMAN } from "@/types/peminjaman";
import React from "react";
import { IoDocumentText } from "react-icons/io5";
import Link from "next/link";

const peminjamanData: PEMINJAMAN[] = [
  {
    tglpinjam: "4 Januari 2025",
    tglkembali: "4 Januari 2025",
    barang: "Ruang Teater",
    peminjam: "Fakultas Teknik",
    notelp: "081234567890",
    ket: "Seminar KPI Informatika",
  },
];

const TableBeranda = () => {
  return (
    <div className="rounded-sm border border-stroke bg-red-50 px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between ">
        <h4 className="text-xl font-bold dark:text-white text-red-700">
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
            {peminjamanData.map((data, key) => (
              <tr
                key={key}
                className={`${
                  key === peminjamanData.length - 1
                    ? ""
                    : "border-b border-stroke dark:border-strokedark"
                } bg-red-100`}
              >
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">
                    {data.tglkembali.toString()}
                  </p>
                </td>
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">
                    {data.tglkembali.toString()}
                  </p>
                </td>
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black">{data.barang}</p>
                </td>
                <td className="p-2.5 text-left xl:p-5">
                  <p className="text-black dark:text-white">{data.peminjam}</p>
                </td>
                {/*<td className="p-2.5 text-left xl:p-5">*/}
                {/*    <p className="text-black">{data.ket}</p>*/}
                {/*</td>*/}
                <td className="">
                  <div className="flex p-2.5 sm:flex xl:p-5">
                    <Link href={"#"} className={"bg-success p-2 rounded-sm text-white ml-1"}>
                      <IoDocumentText size={20}/>
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

export default TableBeranda;
