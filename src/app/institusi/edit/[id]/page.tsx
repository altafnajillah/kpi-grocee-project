"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";

const InstitusiEdit = () => {
  const [name, setName] = useState("");
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/institutions/${params.id}`);
      const data = await response.json();
      setName(data.name);
    }

    fetchData().then();
  }, [params.id]);

  if (!name) return <Loader />;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/institutions/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
        }),
      });

      if (response.ok) {
        router.push("/institusi");
      }
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  return (
    <DefaultLayout>
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <div className="flex flex-wrap items-center justify-between">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Edit Institusi
            </h3>
            <Link href="/institusi" className="rounded-sm border p-1">
              <IoClose size={20} />
            </Link>
          </div>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="p-6.5">
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
              />
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
    </DefaultLayout>
  );
};

export default InstitusiEdit;
