"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Loader from "../common/Loader";

interface Barang {
  id: string;
  name: string;
  stok: number;
  pjId: number;
}

interface pj {
  id: number;
  name: String;
  notelp: String;
  alamat: String;
}

const FormEditDaftarBarang = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const [stok, setStok] = useState("");
  const [pjId, setPjId] = useState("");

  const router = useRouter();
  const params = useParams();

  const [pj, setPj] = useState<pj[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/pjBarang");
      const data = await response.json();
      setPj(data);
    }
    fetchData().then();
  }, []);

  const [data] = useState<Barang[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/barang/${params.id}`);
      const data = await response.json();
      setId(data.id);
      setName(data.name);
      setStok(data.stok);
      setPjId(data.pjId);
    }
    fetchData().then();
  }, [params.id]);

  if (!data) return <Loader />;

  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("/api/barang", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           id,
  //           name,
  //           stok,
  //           pjId,
  //         }),
  //       });

  //       if (response.ok) {
  //         router.push("/barang/pendaftaran");
  //       }
  //     } catch (error) {
  //       console.error("Failed to create", error);
  //     }
  //   };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/barang/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: params.id,
          name,
          stok,
          pjId,
        }),
      });

      if (response.ok) {
        router.push("/barang/pendaftaran");
      }
    } catch (error) {
      console.error("Failed to update barang", error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Edit
          </h3>
          <Link href="/barang/pendaftaran" className="rounded-sm border p-1">
            <IoClose size={20} />
          </Link>
        </div>
      </div>
      <form onSubmit={handleUpdate}>
        <div className="p-6.5">
          <div className="mb-4.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="id"
            >
              Id
            </label>
            <input
              name="id"
              value={id}
              //   onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="id"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              disabled
            />
          </div>

          <div className="mb-4.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="name"
            >
              Nama
            </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nama"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>

          <div className="mb-4.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="notelp"
            >
              Stok
            </label>
            <input
              name="stok"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              type="number"
              placeholder="Stok"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>

          <div className="mb-4.5">
            <label
              className="mb-3 block text-sm font-medium text-black dark:text-white"
              htmlFor="pjId"
            >
              Penanggung Jawab
            </label>
            <select
              name="pjId"
              value={pjId} // Ensure the selected option is displayed
              onChange={(e) => setPjId(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary"
              required
            >
              {/* <option value="">Belum ditentukan</option> */}
              {pj.map((datum) => (
                <option key={datum.id} value={datum.id}>
                  {datum.name}
                </option>
              ))}
            </select>
          </div>
          <button
            className={"w-full rounded-sm bg-success py-2 text-white"}
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditDaftarBarang;
