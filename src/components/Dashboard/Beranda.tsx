"use client";

import React, { useEffect, useState } from "react";
import CardDataStats from "../CardDataStats";
import TableBeranda from "@/components/Tables/TableBeranda";
import TablePeminjamanBerakhir from "@/components/Tables/TablePeminjamanBerakhir";
import { MdOutlineInventory2, MdWarning } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { GrOrganization } from "react-icons/gr";

const Beranda: React.FC = () => {
  const [peminjamanBerakhir, setPeminjamanBerakhir] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/peminjaman/berakhir");
      const data = await response.json();
      setPeminjamanBerakhir(data);
    }
    fetchData().then();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Barang Terpinjam" total="27" satuan="Unit">
          <svg
            className="fill-primary dark:fill-white"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <MdOutlineInventory2 size={22} className="fill-primary" />
          </svg>
        </CardDataStats>
        <CardDataStats title="Banyak Peminjam" total="20" satuan="Instansi">
          <svg
            className="fill-warning dark:fill-white"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <GrOrganization size={22} className="text-warning" />
          </svg>
        </CardDataStats>
        <CardDataStats title="PJ Barang Aktif" total="18" satuan="Orang">
          <svg
            className="fill-green-800 dark:fill-white"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <GoPeople size={22} className="fill-green-800" />
          </svg>
        </CardDataStats>
        <CardDataStats
          title="Tindak Lanjut"
          total={`${peminjamanBerakhir.length}`}
          satuan="Peminjaman"
        >
          <svg
            className="fill-danger dark:fill-white"
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <MdWarning size={22} className="fill-danger" />
          </svg>
        </CardDataStats>
      </div>

      {peminjamanBerakhir.length > 0 ? (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12">
            <TablePeminjamanBerakhir data={peminjamanBerakhir} />
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12">
          <TableBeranda />
        </div>
      </div>
    </div>
  );
};

export default Beranda;
