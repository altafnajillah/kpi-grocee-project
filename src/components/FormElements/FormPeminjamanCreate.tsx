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

  // useEffect(() => {
  //   // Init flatpickr
  //   flatpickr(".form-datepicker", {
  //     mode: "single",
  //     static: true,
  //     monthSelectorType: "static",
  //     dateFormat: "j M Y",
  //     prevArrow:
  //       '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  //     nextArrow:
  //       '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  //   });
  // }, []);

  const [tglPinjam, setTglPinjam] = useState("");
  const [tglKembali, setTglKembali] = useState("");
  const [peminjam, setPeminjam] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [stok, setStok] = useState("");
  const [ket, setKet] = useState("");

  // const [barangId, setBarangId] = useState("");
  // const [instansiId, setInstansiId] = useState("");

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
            {/* <div className="relative">
              <input
                // type="date"
                value={tglPinjam}
                name={tglPinjam}
                className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="H MMM YYYY"
                data-class="flatpickr-right"
                onChange={(e) => setTglPinjam(e.target.value)}
                required
              />

              <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                    fill="#64748B"
                  />
                </svg>
              </div>
            </div> */}
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
            {/* <label className="mb-3 block text-sm font-medium text-black dark:text-white">
              Tanggal Pengembalian
            </label>
            <div className="relative">
              <input
                // type="date"
                value={tglKembali}
                name={tglKembali}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                placeholder="H MMM YYYY"
                // data-class="flatpickr-right"
                onChange={(e) => setTglKembali(e.target.value)}
                required
              />

              <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7504 2.9812H14.2879V2.36245C14.2879 2.02495 14.0066 1.71558 13.641 1.71558C13.2754 1.71558 12.9941 1.99683 12.9941 2.36245V2.9812H4.97852V2.36245C4.97852 2.02495 4.69727 1.71558 4.33164 1.71558C3.96602 1.71558 3.68477 1.99683 3.68477 2.36245V2.9812H2.25039C1.29414 2.9812 0.478516 3.7687 0.478516 4.75308V14.5406C0.478516 15.4968 1.26602 16.3125 2.25039 16.3125H15.7504C16.7066 16.3125 17.5223 15.525 17.5223 14.5406V4.72495C17.5223 3.7687 16.7066 2.9812 15.7504 2.9812ZM1.77227 8.21245H4.16289V10.9968H1.77227V8.21245ZM5.42852 8.21245H8.38164V10.9968H5.42852V8.21245ZM8.38164 12.2625V15.0187H5.42852V12.2625H8.38164V12.2625ZM9.64727 12.2625H12.6004V15.0187H9.64727V12.2625ZM9.64727 10.9968V8.21245H12.6004V10.9968H9.64727ZM13.8379 8.21245H16.2285V10.9968H13.8379V8.21245ZM2.25039 4.24683H3.71289V4.83745C3.71289 5.17495 3.99414 5.48433 4.35977 5.48433C4.72539 5.48433 5.00664 5.20308 5.00664 4.83745V4.24683H13.0504V4.83745C13.0504 5.17495 13.3316 5.48433 13.6973 5.48433C14.0629 5.48433 14.3441 5.20308 14.3441 4.83745V4.24683H15.7504C16.0316 4.24683 16.2566 4.47183 16.2566 4.75308V6.94683H1.77227V4.75308C1.77227 4.47183 1.96914 4.24683 2.25039 4.24683ZM1.77227 14.5125V12.2343H4.16289V14.9906H2.25039C1.96914 15.0187 1.77227 14.7937 1.77227 14.5125ZM15.7504 15.0187H13.8379V12.2625H16.2285V14.5406C16.2566 14.7937 16.0316 15.0187 15.7504 15.0187Z"
                    fill="#64748B"
                  />
                </svg>
              </div>
            </div> */}
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

                {/* <option value="UK" className="text-body dark:text-bodydark">
                  UK
                </option>
                <option value="Canada" className="text-body dark:text-bodydark">
                  Canada
                </option> */}
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
                {/* <option value="USA" className="text-body dark:text-bodydark">
                  USA
                </option>
                <option value="UK" className="text-body dark:text-bodydark">
                  UK
                </option>
                <option value="Canada" className="text-body dark:text-bodydark">
                  Canada
                </option> */}
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
