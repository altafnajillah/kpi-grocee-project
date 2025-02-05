import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const peminjaman = await prisma.peminjaman.findMany({
      orderBy: [{ tglPinjam: "asc" }],
      include: {
        barang: true,
        instansi: true,
      },
      where: {
        status: { in: [0, 1] },
      },
    });
    return NextResponse.json(peminjaman);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch peminjaman" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data);
    const peminjaman = await prisma.peminjaman.create({
      data: {
        tglPinjam: new Date(data.tglPinjam),
        tglKembali: new Date(data.tglKembali),
        whatsapp: data.whatsapp,
        peminjam: data.peminjam,
        stok: parseInt(data.stok),
        ket: data.ket,
        barangId: data.selectedBarang,
        instansiId: parseInt(data.selectedInstansi),
      },
    });
    return NextResponse.json(peminjaman, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create peminjaman" },
      { status: 500 },
    );
  }
}
