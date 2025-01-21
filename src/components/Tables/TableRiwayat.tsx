import {PEMINJAMAN} from "@/types/peminjaman";
import React from "react";
import Link from "next/link";

const peminjamanData: PEMINJAMAN[] = [
    {
        // @ts-ignore
        tglpinjam: "4 Januari 2025",
        // @ts-ignore
        tglkembali: "4 Januari 2025",
        barang: "Ruang Teater",
        peminjam: "Heri",
        notelp: "081234567890",
        ket: "Seminar KPI Informatika",
    },
];

const TableRiwayat = () => {
    return (
        <div
            className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex flex-wrap items-center justify-between">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Jadwal Peminjaman
                </h4>
                <Link
                    href={"/"}
                    className="ml-auto rounded-sm bg-warning text-white px-2 py-1 hover:bg-warning-600"
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
                    {peminjamanData.map((data, key) => (
                        <tr
                            key={key}
                            className={`${
                                key === peminjamanData.length - 1
                                    ? ""
                                    : "border-b border-stroke dark:border-strokedark"
                            }`}
                        >
                            <td className="p-2.5 text-left xl:p-5">
                                <p className="text-black dark:text-white">{data.tglkembali.toString()}</p>
                            </td>
                            <td className="p-2.5 text-left xl:p-5">
                                <p className="text-black dark:text-white">{data.tglkembali.toString()}</p>
                            </td>
                            <td className="p-2.5 text-left xl:p-5">
                                <p className="text-black">{data.barang}</p>
                            </td>
                            <td className="p-2.5 text-left sm:table-cell xl:p-5">
                                <p className="text-black dark:text-white">{data.peminjam}</p>
                            </td>
                            <td className="p-2.5 text-left sm:table-cell xl:p-5">
                                <p className="text-black">{data.ket}</p>
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