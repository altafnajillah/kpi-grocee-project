import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

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