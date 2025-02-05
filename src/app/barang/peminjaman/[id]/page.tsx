"use client";

import Loader from "@/components/common/Loader";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface Peminjaman {
  id: string;
  tglPinjam: Date;
  tglKembali: Date;
  peminjam: string;
  whatsapp: string;
  barang: { name: string };
  stok: number;
  instansi: { name: string };
  status: number;
  ket: string;
}

const PeminjamanDetailPage = () => {
  const [peminjaman, setPeminjaman] = useState<Peminjaman>();
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/peminjaman/${params.id}`);
      const data = await response.json();
      setPeminjaman(data);
    }
    fetchData().then();
  }, [params.id]);

  if (!peminjaman) return <Loader />;

  const updateStatus = async (newStatus: number) => {
    try {
      const response = await fetch(`/api/peminjaman/${peminjaman.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      if (response.ok) {
        router.push(`/barang/peminjaman/${params.id}`);
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex flex-wrap items-center justify-between align-middle">
          <div className="flex">
            <h4 className="text-xl font-semibold text-black dark:text-white">
              Detail Peminjaman
            </h4>
            {/* <div className="ml-2 p-2.5 text-center xl:p-5"> */}
            <p
              className={`ml-2 inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                peminjaman.status == 0
                  ? "bg-primary text-primary"
                  : peminjaman.status == 1
                    ? "bg-warning text-warning"
                    : peminjaman.status == 2
                      ? "bg-success text-success"
                      : "bg-danger text-danger"
              }`}
            >
              {peminjaman.status == 0
                ? "Terjadwal"
                : peminjaman.status == 1
                  ? "Terpinjam"
                  : peminjaman.status == 2
                    ? "Selesai"
                    : "Batal"}
            </p>
            {/* </div> */}
          </div>
          <button
            onClick={() => router.back()}
            className="rounded-sm border p-1"
          >
            <IoClose size={20} />
          </button>
        </div>

        <form>
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Tanggal Peminjaman
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {formatDate(peminjaman.tglPinjam.toString())}
              </p>
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Tanggal Pengembalian
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {formatDate(peminjaman.tglKembali.toString())}
              </p>
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Peminjam
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {peminjaman.peminjam}
              </p>
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Whatsapp
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {peminjaman.whatsapp}
              </p>
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            {/* Selected */}
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Barang
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {peminjaman.barang.name}
              </p>
            </div>

            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Instansi
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {peminjaman.instansi.name}
              </p>
            </div>
          </div>

          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Banyak Dipinjam
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {peminjaman.stok}
              </p>
            </div>
            <div className="w-full xl:w-1/2">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Keterangan
              </label>
              <p className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal">
                {peminjaman.ket}
              </p>
            </div>
          </div>

          <div className="mb-2 flex justify-between">
            {peminjaman.status == 0 ? (
              <button
                onClick={() => updateStatus(2)}
                className="rounded-md bg-danger px-4 py-2 text-white"
              >
                Batal
              </button>
            ) : (
              <div></div>
            )}

            <div className="flex">
              {peminjaman.status == 0 ? (
                <Link
                  href={"#"}
                  className="mr-2 rounded-md bg-warning px-4 py-2 text-white"
                >
                  Edit
                </Link>
              ) : (
                <div></div>
              )}

              <Link
                href={`https://wa.me/${peminjaman.whatsapp}`}
                className="mr-2 rounded-md bg-success px-4 py-2 text-white"
              >
                Hubungi
              </Link>

              {peminjaman.status == 0 ? (
                <button
                  onClick={() => updateStatus(1)}
                  className="rounded-md bg-primary px-4 py-2 text-white"
                >
                  Terpinjam
                </button>
              ) : peminjaman.status == 0 ? (
                <button
                  onClick={() => updateStatus(2)}
                  className="rounded-md bg-primary px-4 py-2 text-white"
                >
                  Selesai
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default PeminjamanDetailPage;
