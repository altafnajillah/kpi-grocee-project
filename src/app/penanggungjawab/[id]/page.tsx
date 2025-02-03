"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import { IoClose } from "react-icons/io5";

interface PjBarang {
  id: number;
  name: string;
  notelp: string;
  alamat: string;
}

export default function PjBarangDetail() {
  const [data, setData] = useState<PjBarang | null>(null);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/pjBarang/${params.id}`);
      const data = await response.json();
      setData(data);
    }
    fetchData().then();
  }, [params.id]);

  if (!data) return <Loader />;

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/pjBarang/${params.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/penanggungjawab");
      }
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-lg flex-1 rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="mb-6 flex justify-between">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Detail Penanggungjawab
          </h4>
          <Link href="/penanggungjawab" className="rounded-sm border p-1">
            <IoClose size={20} />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <tbody>
              <tr className="">
                <th className="p-2.5 text-left xl:p-5">
                  <h5 className="text-sm font-medium xsm:text-base">Nama</h5>
                </th>
                <td className="p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{data.name}</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="p-2.5 text-left xl:p-5">
                  <h5 className="text-sm font-medium xsm:text-base">Alamat</h5>
                </th>
                <td className="p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{data.alamat}</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th className="p-2.5 text-left xl:p-5">
                  <h5 className="text-sm font-medium xsm:text-base">
                    No. Telpon
                  </h5>
                </th>
                <td className="p-2.5 xl:p-5">
                  <p className="text-black dark:text-white">{data.notelp}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-2.5 xl:p-5">
            <form onSubmit={handleDelete}>
              <div className="flex justify-between">
                <div className="mt-1">
                  <Link
                    href={`https://wa.me/${data.notelp}`}
                    className="ml-1 rounded-sm bg-success p-2 text-white"
                  >
                    Hubungi
                  </Link>
                  <Link
                    href={`/penanggungjawab/edit/${data.id}`}
                    className="ml-1 rounded-sm bg-warning p-2 text-white"
                  >
                    Edit
                  </Link>
                </div>
                <button
                  type="submit"
                  className="ml-1 rounded-sm bg-danger p-2 text-white"
                >
                  Hapus
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
