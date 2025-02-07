"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Barang {
  id: string;
  name: string;
}

interface Instansi {
  id: number;
  name: string;
}

const FormPeminjamanCreate = () => {
  const [selectedBarang, setSelectedBarang] = useState<string>("");
  const [selectedInstansi, setSelectedInstansi] = useState<string>("");

  const [isBarangSelected, setIsBarangSelected] = useState<boolean>(false);
  const [isInstansiSelected, setIsInstansiSelected] = useState<boolean>(false);

  const router = useRouter();

  const instansiSelected = () => {
    setIsInstansiSelected(true);
  };

  const barangSelected = () => {
    setIsBarangSelected(true);
  };

  const [instansi, setInstansi] = useState<Instansi[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/institutions");
      const data = await response.json();
      setInstansi(data);
    }
    fetchData().then();
  }, []);

  const [barang, setBarang] = useState<Barang[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/barang");
      const data = await response.json();
      setBarang(data);
    }
    fetchData().then();
  }, []);

  const [tglPinjam, setTglPinjam] = useState("");
  const [tglKembali, setTglKembali] = useState("");
  const [peminjam, setPeminjam] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [stok, setStok] = useState("");
  const [ket, setKet] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/peminjaman", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tglPinjam: convertToISO(tglPinjam),
          tglKembali: convertToISO(tglKembali),
          peminjam,
          whatsapp,
          stok,
          ket,
          selectedBarang,
          selectedInstansi,
        }),
      });

      if (response.ok) {
        router.push("/barang/peminjaman");
      }
    } catch (error) {
      console.error("Failed to create", error);
    }
  };

  function convertToISO(dateString: string) {
    const date = new Date(dateString);
    console.log(date);
    return date;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="mb-6 flex flex-wrap items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Detail Peminjaman Baru
        </h4>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Tanggal Peminjaman
            </label>
            <input
              type="date"
              value={tglPinjam}
              onChange={(e) => setTglPinjam(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary"
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Tanggal Pengembalian
            </label>
            <input
              type="date"
              value={tglKembali}
              onChange={(e) => setTglKembali(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary"
            />
          </div>
        </div>

        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Peminjam
            </label>
            <input
              value={peminjam}
              type="text"
              placeholder="Nama peminjam"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={(e) => setPeminjam(e.target.value)}
              required
            />
          </div>

          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Whatsapp
            </label>
            <input
              value={whatsapp}
              type="text"
              placeholder="Kontak Whatsapp peminjam"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          {/* Selected */}
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Pilih Barang
            </label>

            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                value={selectedBarang}
                onChange={(e) => {
                  setSelectedBarang(e.target.value);
                  barangSelected();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isBarangSelected ? "text-black dark:text-white" : ""
                }`}
                required
              >
                <option
                  value=""
                  disabled
                  className="text-body dark:text-bodydark"
                >
                  Pilih Barang
                </option>
                {barang.map((data) => (
                  <option
                    key={data.id}
                    value={data.id}
                    className="text-body dark:text-bodydark"
                  >
                    {data.name}
                  </option>
                ))}
              </select>

              <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          {/* End Selected */}

          {/* Selected */}
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Pilih Instansi
            </label>

            <div className="relative z-20 bg-white dark:bg-form-input">
              <select
                value={selectedInstansi}
                onChange={(e) => {
                  setSelectedInstansi(e.target.value);
                  instansiSelected();
                }}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                  isInstansiSelected ? "text-black dark:text-white" : ""
                }`}
                required
              >
                <option
                  value=""
                  disabled
                  className="text-body dark:text-bodydark"
                >
                  Pilih Instansi
                </option>
                {instansi.map((data) => (
                  <option
                    key={data.id}
                    value={data.id}
                    className="text-body dark:text-bodydark"
                  >
                    {data.name}
                  </option>
                ))}
              </select>

              <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill="#637381"
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          {/* End Selected */}
        </div>

        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Banyak Dipinjam
            </label>
            <input
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              type="number"
              placeholder="Stok"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              required
            />
          </div>
          <div className="w-full xl:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Keterangan
            </label>
            <input
              value={ket}
              type="text"
              placeholder="Keterangan Peminjaman"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onChange={(e) => setKet(e.target.value)}
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="Buat Peminjaman"
          className="mb-4 w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
        />
      </form>
    </div>
  );
};

export default FormPeminjamanCreate;
