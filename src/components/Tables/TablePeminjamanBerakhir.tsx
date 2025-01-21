import { PEMINJAMAN } from "@/types/peminjaman";
import React from "react";
import { FaSearch } from "react-icons/fa";

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
        <div
            className="rounded-sm border  bg-white border-stroke px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="mb-6 flex flex-wrap items-center justify-between bg-red-700 px-10 py-5">
                <h4 className="text-xl font-semibold dark:text-black text-white">
                    Peminjaman Berakhir
                </h4>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Apa yang akan dicari?..."
                        className="w-full mr-2 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <button className="bg-primary px-4 py-2 text-white rounded-md" >
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
                                Instansi
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

export default TableBeranda;