import Link from "next/link";
import React from "react";
import {IoDocumentText} from "react-icons/io5";
import {BARANG} from "@/types/barang";
import {PENANGGUNGJAWAB} from "@/types/penanggungjawab";

const pjData: PENANGGUNGJAWAB[] = [
    {
        id: 1,
        name: "Altaf Najillah",
        notelp: "081234567890",
        alamat: "Tinambung",
    },
    {
        id: 2,
        name: "Hasnur",
        notelp: "082134567890",
        alamat: "Lembang, Majene",
    }
];

const TablePendaftaran = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex flex-wrap items-center justify-between">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    Daftar Penanggungjawab
                </h4>
                <Link
                    href={"/"}
                    className="ml-auto rounded-sm bg-warning text-white px-2 py-1 hover:bg-warning-600"
                >
                    Tambah PJ
                </Link>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                    <tr className="bg-gray-2 dark:bg-meta-4">
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Nama
                            </h5>
                        </th>
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                Alamat
                            </h5>
                        </th>
                        <th className="p-2.5 text-left xl:p-5">
                            <h5 className="text-sm font-medium uppercase xsm:text-base">
                                No. Telpon
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
                    {pjData.map((data, key) => (
                        <tr
                            key={key}
                            className={`${
                                key === pjData.length - 1
                                    ? ""
                                    : "border-b border-stroke dark:border-strokedark"
                            }`}
                        >
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.name}
                                </p>
                            </td>
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.alamat}
                                </p>
                            </td>
                            <td className="p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">
                                    {data.notelp}
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