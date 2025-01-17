import React from 'react';
import {PEMINJAMAN} from "@/types/peminjaman";


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

// const TableRiwayat: React.FC<TableRiwayatProps> = ({ peminjamanData }) => {
const TableRiwayat = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tgl Peminjaman
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tgl Pengembalian
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Barang
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Peminjam
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Keterangan
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        {peminjamanData.map((data, key) => (
          <tr key={key}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {data.tglpinjam}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {data.tglkembali}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {data.barang}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {data.peminjam}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {data.ket}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableRiwayat;
