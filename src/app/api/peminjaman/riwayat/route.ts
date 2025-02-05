import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0] + "T00:00:00.000Z";

    const peminjaman = await prisma.peminjaman.findMany({
      orderBy: [{ tglPinjam: "asc" }],
      include: {
        barang: true,
        instansi: true,
      },
      where: {
        status: 2,
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
