import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const peminjaman = await prisma.peminjaman.findMany({
      include: {
        barang: true,
        instansi: true,
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
    const peminjaman = await prisma.peminjaman.create({ data });
    return NextResponse.json(peminjaman, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create peminjaman" },
      { status: 500 },
    );
  }
}
