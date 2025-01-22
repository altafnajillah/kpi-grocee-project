import Link from "next/link";
import React from "react";
import {IoDocumentText} from "react-icons/io5";
import {BARANG} from "@/types/barang";

const barangData: BARANG[] = [
    {
        id: "KEN0001",
        name: "Bus Unsulbar DC 2121 B",
        pj: "Altaf Najillah",
        stok: 1,
    },
    {
        id: "RUA0001",
        name: "Ruang Teater GK A",
        pj: "Hasnur",
        stok: 1,
    }
];

const TablePendaftaran = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex flex-wrap items-center justify-between">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Daftar Barang
                </h4>
                <Link
                    href={"/"}
                    className="ml-auto rounded-sm bg-warning text-white px-2 py-1 hover:bg-warning-600"
                >
                    Tambah Barang
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                    <tr className="bg-gray-2 dark:bg-meta-4">
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                ID
                            </h5>
                        </th>
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Nama
                            </h5>
                        </th>
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Penanggung Jawab
                            </h5>
                        </th>
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Stok
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
                    {barangData.map((data, key) => (
                        <tr
                            key={key}
                            className={`${
                                key === barangData.length - 1
                                    ? ""
                                    : "border-b border-stroke dark:border-strokedark"
                            }`}
                        >
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.id}
                                </p>
                            </td>
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.name}
                                </p>
                            </td>
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.pj}
                                </p>
                            </td>
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.stok}
                                </p>
                            </td>
                            <td className="p-2.5 xl:p-5">
                                <div className="flex">
                                    <Link href={"#"} className="bg-success p-2 rounded-sm text-white ml-1">
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

export default TablePendaftaran;